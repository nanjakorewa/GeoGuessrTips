import sys
import re
import time
from pathlib import Path
from googletrans import Translator

translator = Translator()
cache = {}

shortcode_quote_pattern = re.compile(r'"([^"\\]*(?:\\.[^"\\]*)*)"')

no_translate_prefixes = ('http://', 'https://', 'mailto:', 'tel:')

def should_translate_text(text: str) -> bool:
    return any(ord(ch) > 127 for ch in text)

def translate_core(text: str, dest: str) -> str:
    key = (text, dest)
    if key in cache:
        return cache[key]
    if not text.strip():
        cache[key] = text
        return text
    for attempt in range(4):
        try:
            result = translator.translate(text, src='ja', dest=dest)
            translated = result.text
            cache[key] = translated
            return translated
        except Exception:
            if attempt == 3:
                cache[key] = text
                return text
            time.sleep(1 + attempt)
    return text

def translate_quoted_strings(block: str, dest: str) -> str:
    def repl(match):
        content = match.group(1)
        raw = content
        stripped = raw.strip()
        if stripped.startswith(no_translate_prefixes) or '://' in stripped or stripped.startswith('../') or stripped.startswith('./') or stripped.startswith('#'):
            return match.group(0)
        if any(ch in raw for ch in ('%','{','}','[',']')):
            # likely shortcode syntax or formatting -> skip unless non-ascii
            if not should_translate_text(raw):
                return match.group(0)
        if not should_translate_text(raw):
            return match.group(0)
        translated = translate_core(raw, dest)
        translated = translated.replace('"', '\\"')
        return f'"{translated}"'
    return shortcode_quote_pattern.sub(repl, block)


def translate_with_segmentation(text: str, dest: str, max_len: int = 250) -> str:
    if len(text) <= max_len:
        return translate_core(text, dest)

    sentences = re.split(r'(?<=[。．！？!?])', text)
    buffer = ''
    segments = []
    for sentence in sentences:
        if not sentence:
            continue
        if len(buffer) + len(sentence) > max_len and buffer:
            segments.append(buffer)
            buffer = sentence
        else:
            buffer += sentence
    if buffer:
        segments.append(buffer)
    if not segments:
        segments = [text]

    translated_parts = []
    for segment in segments:
        if len(segment) > max_len:
            for idx in range(0, len(segment), max_len):
                part = segment[idx:idx + max_len]
                translated_parts.append(translate_core(part, dest))
        else:
            translated_parts.append(translate_core(segment, dest))
    return ''.join(translated_parts)

def process_plain_text(text: str, dest: str) -> str:
    if not text:
        return text
    prefix_match = re.match(r'^\s*', text)
    suffix_match = re.search(r'\s*$', text)
    prefix = prefix_match.group(0) if prefix_match else ''
    suffix = suffix_match.group(0) if suffix_match else ''
    core = text[len(prefix): len(text) - len(suffix)] if suffix else text[len(prefix):]
    if not core:
        return text
    translated = translate_with_segmentation(core, dest)
    return f'{prefix}{translated}{suffix}'

def process_shortcode(token: str, dest: str) -> str:
    return translate_quoted_strings(token, dest)

def process_line(line: str, dest: str) -> str:
    result_parts = []
    i = 0
    length = len(line)
    while i < length:
        if line.startswith('{{%', i) or line.startswith('{{<', i):
            marker = '%}}' if line.startswith('{{%', i) else '>}}'
            j = line.find(marker, i)
            if j == -1:
                token = line[i:]
                i = length
            else:
                token = line[i:j + len(marker)]
                i = j + len(marker)
            result_parts.append(process_shortcode(token, dest))
        elif line[i] == '<':
            j = line.find('>', i)
            if j == -1:
                token = line[i:]
                i = length
            else:
                token = line[i:j + 1]
                i = j + 1
            result_parts.append(token)
        else:
            j = i
            while j < length and not (line.startswith('{{%', j) or line.startswith('{{<', j) or line[j] == '<'):
                j += 1
            segment = line[i:j]
            result_parts.append(process_plain_text(segment, dest))
            i = j
    return ''.join(result_parts)

def translate_body(body: str, dest: str) -> str:
    lines = body.split('\n')
    translated_lines = [process_line(line, dest) for line in lines]
    text = '\n'.join(translated_lines)
    text = re.sub(r'([A-Za-z])<span', r'\1 <span', text)
    text = re.sub(r'</span>([A-Za-z])', r'</span> \1', text)
    return text

def translate_file(src_file: Path, dest: str, out_file: Path | None = None) -> None:
    if out_file is None:
        out_file = src_file.with_name(f'_index.{dest}.md')
    text = src_file.read_text(encoding='utf-8')
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            _, front_raw, rest = parts
            front = translate_quoted_strings(front_raw, dest)
            if rest.startswith('\n'):
                rest = rest[1:]
            body = rest
            translated_body = translate_body(body, dest)
            output = f'---\n{front}---\n{translated_body}'
        else:
            output = translate_body(text, dest)
    else:
        output = translate_body(text, dest)
    out_file.write_text(output, encoding='utf-8')


def main():
    if len(sys.argv) < 3:
        print('Usage: translate_rule.py <src_file> <dest_lang> [<output_file>]')
        return
    src = Path(sys.argv[1])
    dest_lang = sys.argv[2]
    out = Path(sys.argv[3]) if len(sys.argv) >= 4 else None
    translate_file(src, dest_lang, out)


if __name__ == '__main__':
    main()
