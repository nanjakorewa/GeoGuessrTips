#!/usr/bin/env python3
"""Generate all 19 quiz Japanese content files with new frontmatter format."""
import json, os

BASE = os.path.join(os.path.dirname(__file__), "..", "src", "content", "quiz")

quizzes = [
    dict(num=1, suffix="日本", weight=2, diff=1, opts=["韓国", "台湾", "日本"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718467003953!6m8!1m7!1sfqYqx0ug5oHKLc6zgzdlEQ!2m2!1d43.51896332400487!2d144.9735985487119!3f317.5630179714016!4f13.325482767071023!5f0.4000000000000002",
         body='右奥の看板にひらがなが書かれています！ちなみに矢印の看板（固定式視線誘導柱）は積雪が多い地域にしかないため、北海道のような地域が候補になります。\n\n地名だけでなく市外局番や電柱などを活用すれば、{{% goto "../../rule/asia/japan/" "日本" %}}の中でさらに地域を特定することができます。そのようなヒントが集まった有志による有名サイト、{{% goto "https://www.plonkit.net/japan" "plonk it" %}}は一番初めに目を通すべき重要なサイトです。'),
    dict(num=2, suffix="北半球と南半球", weight=2, diff=1, opts=["アメリカ", "オーストラリア", "カナダ"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718903805570!6m8!1m7!1st29HSCPGR1flw19CsLUWvw!2m2!1d-24.30933025243582!2d133.4471751691202!3f319.4849661329898!4f7.64996052905957!5f0.4000000000000002",
         body='太陽が北側に見えるのでこれは南半球です。３つの中で南半球にある国は{{% goto "../../rule/oceania/australia/" "オーストラリア" %}}のみです！はじめに必ず太陽を見て、北半球か南半球かを判断しましょう。'),
    dict(num=3, suffix="右側通行", weight=3, diff=1, opts=["日本", "韓国", "マレーシア"], ans=2, hint="マレーシアは左側通行で、韓国は右側通行です。",
         map="https://www.google.com/maps/embed?pb=!4v1718507789146!6m8!1m7!1sjSd8dhZbA4O3P8mRX-e1kQ!2m2!1d33.41342365794524!2d126.7210451098351!3f18.081632441798906!4f-3.465725837173622!5f0.6715099281175758",
         body='標識が道路の右側にあるためこの道は右側通行です。この３つの中で右側通行の国は「{{% goto "../../rule/asia/korea/" "韓国" %}}」だけです。標識の位置が通行に関係しているという点が重要です！'),
    dict(num=4, suffix="左側通行", weight=4, diff=1, opts=["ノルウェー", "イギリス", "ドイツ"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718518946954!6m8!1m7!1sMGI8Nd2ZUUGlu5TqkKxyFw!2m2!1d51.53194709712935!2d-0.1772617219728011!3f327.9307712080929!4f-5.937013931617628!5f2.7600112153774767",
         body='{{% goto "../../rule/europe/united-kingdom/" "イギリス" %}}とイギリスに影響を受けた地域は左側通行の場所が多いです。ちなみに場所はビートルズのアルバムのジャケットにもなっているアビー・ロードです。'),
    dict(num=5, suffix="ナンバープレート", weight=5, diff=1, opts=["澳門", "香港", "台湾"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718509378332!6m8!1m7!1sFpFrDxfKq6yRdraZUY1NBQ!2m2!1d22.31645060100648!2d114.1692832815125!3f349.4356544873801!4f3.63421322727379!5f0.6087197630498872",
         body='{{% goto "../../rule/europe/united-kingdom/" "イギリス" %}}とイギリスに影響を受けた地域は左側通行かつ後ろのナンバープレートが黄色です。1841年1月26日から1997年6月30日までイギリス統治下にあった香港もその例外ではありません。{{% goto "../../rule/asia/srilanka/" "スリランカ" %}}や{{% goto "../../rule/africa/kenya/" "ケニア" %}}なども同じ理由で後ろナンバーが黄色です。'),
    dict(num=6, suffix="ドメイン", weight=6, diff=1, opts=["イギリス", "南アフリカ", "ニュージーランド"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718518822240!6m8!1m7!1ssCec8ePnPVbfwjUO3qUciQ!2m2!1d-33.92430487496268!2d18.41669011142289!3f111.92!4f-8.370000000000005!5f2.9946704395007897",
         body='{{% goto "../../rule/africa/south-africa/" "南アフリカ" %}}のドメイン「.za」がトラックの後ろに見えます。このドメインの文字列を見ることで国を確定させることができます。はじめたての頃はこのような文字列を見つけて国を絞り込んでいきましょう。国の数だけドメインがあるので、遊びながら覚えていきましょう。'),
    dict(num=7, suffix="コンパス", weight=7, diff=2, opts=["A", "B", "C"], ans=1, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718605655847!6m8!1m7!1sAF89idKYMgLG7zhNOfWSoA!2m2!1d22.18761081340289!2d113.5494184252053!3f155.185725396147!4f3.2624217912323275!5f0.4000000000000002",
         body='コンパスを北に合わせて真下を向くことで、道の角度が地図と一致しているか確認できます！\n日本と違い、海外では名前のついていない交差点もたくさんあります。通り名や交差点名が不明なときは、角度をもとに現在位置が正しいかを判断しましょう。'),
    dict(num=8, suffix="ボラード", weight=8, diff=2, opts=["フランス", "イタリア", "スペイン"], ans=1, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718606798512!6m8!1m7!1slE6bilvexDHSVO2fsC95cA!2m2!1d46.19131079853136!2d-0.8080228076615404!3f319.8191521622827!4f-3.8805901398504687!5f1.5120643604224382",
         body='海外では日本と異なり街灯がない地域も多いです。街灯の代わりに道端に反射板がおかれていることがあり、これを「ボラード」と呼んでいます。ボラードの見た目は国ごとに違うため、これを見れば国を判断することができます。この太くて白いボラードは{{% goto "../../rule/europe/france/" "フランス" %}}特有のボラードです。'),
    dict(num=9, suffix="言語", weight=9, diff=1, opts=["イタリア", "チュニジア", "ギリシャ"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718607988646!6m8!1m7!1sfA04Fj_QRgHPSAh7zA_N9g!2m2!1d37.34871634384982!2d23.46602506691343!3f109.59962480741643!4f6.410306581563518!5f0.4000000000000002",
         body='ギリシャ語が看板に書かれており、ギリシャが答えとなります。「Ελληνικά」のような数学で見る記号などは{{% goto "../../rule/europe/greece/" "ギリシャ" %}}語から来ています。\n看板に書かれている文字から国を特定したり、{{% goto "../../rule/europe/spain/" "スペイン" %}}語圏など範囲を絞り込むことができます。'),
    dict(num=10, suffix="旧宗主国", weight=20, diff=2, opts=["イスラエル", "チュニジア", "ヨルダン"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718608943665!6m8!1m7!1sp-J3ZLxpl0oBDhsZHAampA!2m2!1d33.85970387295289!2d10.87894104069269!3f179.96706149414155!4f0.8480628883755941!5f2.296520883539236",
         body='看板にフランス語が書かれているため、フランスに関連する国であるチュニジアが答えとなります。\nチュニジアや{{% goto "../../rule/africa/senegal/" "セネガル" %}}はかつて{{% goto "../../rule/europe/france/" "フランス" %}}の植民地でした。他国の植民地や保護国となっていた地域は、宗主国の影響を受けることが多いです。フランスの他には{{% goto "../../rule/europe/united-kingdom/" "イギリス" %}}の影響が色濃く残る国が多く存在します。'),
    dict(num=11, suffix="EU", weight=21, diff=2, opts=["イタリア", "フィンランド", "カナダ"], ans=1, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718609158908!6m8!1m7!1s7xWxvzQ7XQ4TOQjfieLqgg!2m2!1d45.69007251635454!2d11.05171071094286!3f285.42834679180163!4f-6.966505814309613!5f1.3382500820059544",
         body='ナンバープレートの片方・もしくは両方に青い線が入っているのはEUの特徴です。３つの国のうち、EUに加盟しているのはイタリアのみなので{{% goto "../../rule/europe/italy/" "イタリア" %}}が答えとなります。'),
    dict(num=12, suffix="標識", weight=22, diff=2, opts=["ハンガリー", "イタリア", "ポーランド"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718735787856!6m8!1m7!1spKyAFTfXHvj-urxD-jMPMA!2m2!1d53.93335259649422!2d14.53675556051739!3f9.19!4f2.6400000000000006!5f1.239386682719425",
         body='赤く細い線で縁取られた警告看板は{{% goto "../../rule/europe/poland/" "ポーランド" %}}の特徴です。\nジオゲッサーで国を絞り込む上で、特定の国にしか存在しない標識・道路番号の標識や矢印（シェブロン）の看板は大きな手掛かりになります。'),
    dict(num=13, suffix="電柱", weight=23, diff=2, opts=["ポルトガル", "ルーマニア", "スペイン"], ans=1, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718735934009!6m8!1m7!1sH7mt-E7c0GNc0nfV9XlzZQ!2m2!1d38.33717844064801!2d-7.390493649004357!3f306.00759372449625!4f8.744405287154976!5f0.5083383856762611",
         body='仕切りのある電柱はポルトガルの影響がある国の特徴です。\nたとえばポルトガル語圏の{{% goto "../../rule/cs_america/brazil/" "ブラジル" %}}では穴のない仕切りのある電柱が見つかります。\nまたかつてポルトガルの植民地だった{{% goto "../../rule/africa/saotome/" "サントメプリンシペ" %}}でもポルトガルと同じ電柱がみつかるはずです。\n電柱は国を特定する上で重要なヒントのひとつです。'),
    dict(num=14, suffix="Google Car", weight=24, diff=2, opts=["ナイジェリア", "ガーナ", "ウガンダ"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718736135857!6m8!1m7!1slka0_BZ2ijcyo7j3_xC9yQ!2m2!1d5.974502381926311!2d1.017063955646502!3f88.58447592070883!4f-51.216293613545176!5f0.4000000000000002",
         body='Googleストリートビューを撮影している車（Google Car）が写真に写りこむことがあり、何が映りこんでいるかによって国が確定することがあります。\n今回のような、右前に黒いテープが巻かれた車は{{% goto "../../rule/africa/ghana/" "ガーナ" %}}の特徴です。\nガーナ・{{% goto "../../rule/n_america/guatemala/" "グアテマラ" %}}・{{% goto "../../rule/africa/reunion/" "レユニオン島" %}}などが分かりやすい例です。\nただし、どの国もまれに車が映っていないことはあるため「車が映っていないから100%この国ではない」と断定することはできません。'),
    dict(num=15, suffix="建築", weight=25, diff=2, opts=["エストニア", "イギリス", "オランダ"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718737167107!6m8!1m7!1sJEq7zrmBkYoK9XMAtziKYg!2m2!1d51.47539676028853!2d5.263433264093697!3f322.86650346191243!4f-4.511110177140381!5f0.7820865974627469",
         body='レンガの家は{{% goto "../../rule/europe/netherlands/" "オランダ" %}}やベルギー、{{% goto "../../rule/europe/croatia/" "クロアチア" %}}内陸部に多いです。\nこの３つの選択肢の中ではオランダが正解となります。どの国にも伝統的なデザインの家が存在し、それによって国や地域をある程度絞り込むこともできます。'),
    dict(num=16, suffix="道路の線", weight=26, diff=2, opts=["ノルウェー", "スウェーデン", "フィンランド"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718785632566!6m8!1m7!1sbon5eyy656ZLEsKgYogHbQ!2m2!1d56.11679388584265!2d15.52100342985536!3f295.1083688320057!4f-7.645816948843461!5f0.7820865974627469",
         body='白の短い破線の路側帯は{{% goto "../../rule/europe/sweden/" "スウェーデン" %}}の特徴です。\n国によって道路の線の長さ・細さ・色がわずかに異なり、それによって国を絞り込むことができます。'),
    dict(num=17, suffix="地形", weight=27, diff=2, opts=["ボツワナ", "エスワティニ", "レソト"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718787852524!6m8!1m7!1sV6XF-0lBGOfBP28TDuiNBg!2m2!1d-30.33567016515342!2d27.74272081424504!3f99.02888214827175!4f2.872701343245623!5f0.4000000000000002",
         body='木が非常に少なくほとんどが草原によって覆われているこの景色は{{% goto "../../rule/africa/lesotho/" "レソト" %}}の特徴です。\n標高や気候によって木が生えない地域・ヤシの木が多い地域・サバンナの地域などが存在し、それによって地域を絞り込むことができます。'),
    dict(num=18, suffix="土の色", weight=28, diff=3, opts=["シェットランド諸島（イギリス）", "カナリア諸島（スペイン）", "マダガスカル島（マダガスカル）"], ans=2, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718788124217!6m8!1m7!1se7J-ZOapgDeOLPFmw28WPg!2m2!1d28.99563122225519!2d-13.75328846161904!3f279.1403975170958!4f5.214576586869697!5f0.4000000000000002",
         body='火山島であるカナリア諸島が正解です。\n一般には火山があるハワイ、ピトケアン諸島、カナリア諸島やシチリア島のエトナ火山などではかなり黒い土を見ることができます。\n海沿いは白っぽい砂が多いなど、土や岩の様子で地域が絞り込めるケースがよくあります。'),
    dict(num=19, suffix="例外", weight=29, diff=3, opts=["チェコ", "スロバキア", "ブルガリア"], ans=3, hint="",
         map="https://www.google.com/maps/embed?pb=!4v1718705093079!6m8!1m7!1sYzK4lcHOXy4YCDfuS_vXhw!2m2!1d41.97785462752488!2d24.60465620317377!3f130.14259234756682!4f-1.864245506451283!5f2.5816745527702323",
         body='道端にあるボラードは{{% goto "../../rule/europe/czechia/" "チェコ" %}}やスロバキアのものですが、正解は{{% goto "../../rule/europe/bulgaria/" "ブルガリア" %}}となります。\nこのように、このゲームではどんなヒントも100%国が確定するわけではない点に注意する必要があります。'),
]

for q in quizzes:
    opts_yaml = json.dumps(q["opts"], ensure_ascii=False)
    lines = [
        "---",
        f'title: "{q["num"]}問目"',
        f'quiz_suffix: "{q["suffix"]}"',
        "date: 2024-06-15",
        "lastmod: 2024-06-15",
        f'weight: {q["weight"]}',
        "draft: false",
        'keywords: [""]',
        'sections: [""]',
        'pagetype: "quiz"',
        f'difficulty: {q["diff"]}',
        f'quiz_options: {opts_yaml}',
        f'quiz_answer: {q["ans"]}',
        f'quiz_map_url: "{q["map"]}"',
    ]
    if q["hint"]:
        lines.append(f'quiz_hint: "{q["hint"]}"')
    lines.append("---")
    lines.append("")
    lines.append(q["body"])
    lines.append("")

    path = os.path.join(BASE, f'quiz{q["num"]}', "_index.ja.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {path}")
