#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build src/data/areacode-quiz.json for the 市外局番クイズ (/quiz/areacode/).

Authoritative source: 総務省「市外局番の一覧」PDF (temp/001072440.pdf).
The PDF lists every 番号区画 (= 市外局番) together with the full set of
市区町村 it covers, including 郡-level groupings and inclusion / exclusion
clauses. This script parses it into:

  { prefectures: { "JP-13": {slug,ja}, ... },
    questions:   [ { code, ma:[番号区画名...], answers:[{muni,slug,prefJa,jp}] }, ... ] }

For each 市外局番 the `answers` list contains EVERY clickable municipality
polygon served by that code, so the quiz accepts any of them and 暗記モード
can show a code for every municipality.

Inputs
  - temp/001072440.pdf                     総務省の市外局番一覧
  - public/maps/prefectures/<slug>.svg     data-code / data-name 付きポリゴン
  - scripts/.generated/<slug>.muni.yaml    code -> note(郡名) for 郡 expansion
  - src/data/areacodes.json                code -> 番号区画名 (feedback label)

Requires: pip install pdfplumber
Run:      python3 scripts/build-areacode-quiz.py
"""
import os, re, json, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "temp", "001072440.pdf")

PREF = [["hokkaido","北海道"],["aomori","青森県"],["iwate","岩手県"],["miyagi","宮城県"],
["akita","秋田県"],["yamagata","山形県"],["fukushima","福島県"],["ibaraki","茨城県"],
["tochigi","栃木県"],["gunma","群馬県"],["saitama","埼玉県"],["chiba","千葉県"],
["tokyo","東京都"],["kanagawa","神奈川県"],["niigata","新潟県"],["toyama","富山県"],
["ishikawa","石川県"],["fukui","福井県"],["yamanashi","山梨県"],["nagano","長野県"],
["gifu","岐阜県"],["shizuoka","静岡県"],["aichi","愛知県"],["mie","三重県"],
["shiga","滋賀県"],["kyoto","京都府"],["osaka","大阪府"],["hyogo","兵庫県"],
["nara","奈良県"],["wakayama","和歌山県"],["tottori","鳥取県"],["shimane","島根県"],
["okayama","岡山県"],["hiroshima","広島県"],["yamaguchi","山口県"],["tokushima","徳島県"],
["kagawa","香川県"],["ehime","愛媛県"],["kochi","高知県"],["fukuoka","福岡県"],
["saga","佐賀県"],["nagasaki","長崎県"],["kumamoto","熊本県"],["oita","大分県"],
["miyazaki","宮崎県"],["kagoshima","鹿児島県"],["okinawa","沖縄県"]]
ja2slug = {j: s for s, j in PREF}
slug2ja = {s: j for s, j in PREF}
slug2jp = {s: "JP-%02d" % (i + 1) for i, (s, j) in enumerate(PREF)}
prefja_sorted = sorted([j for s, j in PREF], key=len, reverse=True)
prefectures = {"JP-%02d" % (i + 1): {"slug": s, "ja": j} for i, (s, j) in enumerate(PREF)}

# Normalise spelling variants used inconsistently between the PDF and the maps.
def norm(s):
    return s.replace("ヶ", "ケ").replace("ヵ", "カ").replace("檮", "梼")

# Municipalities the PDF still lists under a pre-merger name.
ALIAS = {"hyogo": {"篠山市": "丹波篠山市"}}

def load_svg():
    code2name, names = {}, {}
    for s, j in PREF:
        txt = open(os.path.join(ROOT, "public/maps/prefectures", s + ".svg"), encoding="utf-8").read()
        d = {c: n for c, n in re.findall(r'data-code="([0-9]+)" data-name="([^"]+)"', txt)}
        code2name[s] = d
        names[s] = set(d.values())
    return code2name, names

def load_gun(code2name):
    gun = {s: {} for s, j in PREF}
    for s, j in PREF:
        y = open(os.path.join(ROOT, "scripts/.generated", s + ".muni.yaml"), encoding="utf-8").read()
        for m in re.finditer(r'code:\s*"([0-9]+)".*?note:\s*"([^"]*)"', y):
            if m.group(2).endswith("郡"):
                nm = code2name[s].get(m.group(1))
                if nm:
                    gun[s].setdefault(m.group(2), set()).add(nm)
    return gun

def extract_rows():
    import pdfplumber
    rows = []
    with pdfplumber.open(PDF) as pdf:
        for pg in pdf.pages:
            for t in pg.extract_tables():
                for r in t:
                    if len(r) < 3:
                        continue
                    desc = (r[1] or "").replace("\n", "").strip()
                    ac = (r[2] or "").strip()
                    if re.fullmatch(r"\d+", ac) and desc:
                        rows.append((desc, "0" + ac))
    return rows

def split_top(s):
    out, buf, depth = [], "", 0
    for ch in s:
        if ch in "（(":
            depth += 1; buf += ch
        elif ch in "）)":
            depth = max(0, depth - 1); buf += ch
        elif ch == "、" and depth == 0:
            out.append(buf); buf = ""
        else:
            buf += ch
    if buf:
        out.append(buf)
    return out

def strip_pref(tok):
    for j in prefja_sorted:
        if tok.startswith(j):
            return ja2slug[j], tok[len(j):]
    return None, tok

def strip_parens(s):
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"（[^（）]*）", "", s)
    return s

def balanced_after(s, g):
    i = s.find(g)
    if i < 0:
        return None
    j = i + len(g)
    if j >= len(s) or s[j] not in "（(":
        return None
    depth = 0
    for k in range(j, len(s)):
        if s[k] in "（(":
            depth += 1
        elif s[k] in "）)":
            depth -= 1
            if depth == 0:
                return s[j + 1:k]
    return s[j + 1:]

def greedy_found(tnorm, pairs):
    cand = sorted([(nn, o) for nn, o in pairs if nn in tnorm], key=lambda x: len(x[0]), reverse=True)
    found, tmp = set(), tnorm
    for nn, o in cand:
        if nn in tmp:
            found.add(o); tmp = tmp.replace(nn, "〓" * len(nn))
    return found

def full_excluded(inside, members):
    ns, ex = norm(inside), set()
    for m in members:
        nm = norm(m)
        for mt in re.finditer(re.escape(nm), ns):
            tail = ns[mt.end():]
            if re.match(r"（[^（）]*限る", tail):  # municipality only partly excluded -> keep
                break
            if tail[:1] in ("を", "、", "及", "）", ""):
                ex.add(m); break
    return ex

def main():
    code2name, slug_names = load_svg()
    gun = load_gun(code2name)
    norm_pairs = {}
    for s, j in PREF:
        pairs = [(norm(n), n) for n in slug_names[s]]
        for old, new in ALIAS.get(s, {}).items():
            if new in slug_names[s]:
                pairs.append((norm(old), new))
        norm_pairs[s] = pairs
    tokyo_wards = {n for n in slug_names["tokyo"] if n.endswith("区")}

    rows = extract_rows()
    code_munis = {}  # code -> set((slug,muni))
    for desc, areacode in rows:
        cur = None
        for tok in split_top(desc):
            sl, rest = strip_pref(tok)
            if sl:
                cur = sl
            if cur is None:
                continue
            t2 = rest
            tnorm = norm(t2)
            found = greedy_found(tnorm, norm_pairs[cur])
            ps = strip_parens(t2).strip()
            result = set()
            if "23区" in t2 and cur == "tokyo":
                result |= tokyo_wards
            if ps.endswith("郡"):
                gm = re.search(r"([^、（）]*郡)$", ps)
                g = gm.group(1) if gm else ps
                members = gun[cur].get(g, set())
                inside = balanced_after(t2, g)
                if inside is None:
                    result |= members
                else:
                    tail = norm(inside).rstrip("。 ")
                    if tail.endswith("限る"):
                        result |= found
                    elif tail.endswith("除く"):
                        result |= (members - full_excluded(inside, members))
                    else:
                        result |= members
            else:
                ex = set()
                for mm in re.finditer(r"（((?:[^（）]|（[^（）]*）)*)を除く。?）", t2):
                    ex |= full_excluded(mm.group(1), slug_names[cur])
                result |= (found - ex)
            for n in result:
                code_munis.setdefault(areacode, set()).add((cur, n))

    # 番号区画名 (feedback label): code -> [MA names], inverted from areacodes.json
    code_ma = {}
    ac = json.load(open(os.path.join(ROOT, "src/data/areacodes.json"), encoding="utf-8"))
    for ma, codes in ac.items():
        for c in codes:
            code_ma.setdefault(c, []).append(ma)

    questions = []
    for code in sorted(code_munis):
        answers = [
            {"muni": n, "slug": s, "prefJa": slug2ja[s], "jp": slug2jp[s]}
            for (s, n) in sorted(code_munis[code])
        ]
        if not answers:
            continue
        q = {"code": code, "ma": code_ma.get(code, []), "answers": answers}
        questions.append(q)

    out = {"prefectures": prefectures, "questions": questions}
    out_path = os.path.join(ROOT, "src/data/areacode-quiz.json")
    json.dump(out, open(out_path, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))

    # coverage report
    all_pairs = set((s, n) for s, j in PREF for n in slug_names[s])
    covered = set()
    for v in code_munis.values():
        covered |= v
    missing = sorted(all_pairs - covered)
    tot_ans = sum(len(q["answers"]) for q in questions)
    print("[areacode-quiz] codes: %d, answer-entries: %d, municipalities covered: %d/%d, uncovered: %d"
          % (len(questions), tot_ans, len(covered), len(all_pairs), len(missing)))
    if missing:
        print("  uncovered (no area code / no service):", ", ".join("%s@%s" % (n, s) for s, n in missing))

if __name__ == "__main__":
    main()
