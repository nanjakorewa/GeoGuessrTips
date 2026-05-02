---
title: "Aichi"
date: 2023-02-26
lastmod: 2023-07-01
weight: 80
draft: false
keywords: [""]
sections: [""]
no_jetro: true
is_pref: true
flag: "Aichi.svg"
mapProvider: "osm"
mapPins:
  - { lat: 35.171, lng: 136.882, label: "Estación de Nagoya", type: "capital", note: "Capital de la Prefectura de Aichi y mayor ciudad de Chubu" }
  - { lat: 35.185, lng: 136.900, label: "Castillo de Nagoya", type: "historical", note: "Famoso por sus shachihoko dorados" }
  - { lat: 35.083, lng: 137.156, label: "Toyota", type: "city", note: "Sede central de Toyota Motor" }
  - { lat: 35.224, lng: 137.087, label: "Seto", type: "city", note: "Productora de cerámica Seto" }
  - { lat: 34.857, lng: 136.815, label: "Aeropuerto Internacional de Chubu", type: "landmark", note: "Centrair" }
  - { lat: 35.388, lng: 136.939, label: "Castillo de Inuyama", type: "historical", note: "Tesoro Nacional con torre original" }
features:
  - text: 'Prefectura industrial número uno de Japón en valor de envíos manufactureros, centrada en la ciudad de Toyota, sede de <span class="quiz">Toyota Motor</span>'
    ref: "https://ja.wikipedia.org/wiki/愛知県#工業"
  - text: 'La ciudad de Nagoya es el núcleo de la <span class="quiz">región de Chukyo</span>, una de las tres grandes áreas metropolitanas de Japón'
    ref: "https://ja.wikipedia.org/wiki/中京圏"
---

<div class="main-desciption country-description">
    <h2 class="section-title">Panorama general</h2>
    <ul class="rule-list">
        <li>En la región de Tokai, los pasos de peatones con líneas de rombos sin interrupciones indican la prefectura de Aichi.</li>
    </ul>
    {{% corp "asia/japan" "chubu/aichi" %}}
</div>

{{% tabs %}}
{{% tab "Señalización de pasos de peatones" %}}
{{% notice tip %}}
Busca rombos sin cortes en las líneas{{% ex "https://maps.app.goo.gl/Kq6rMXEsvVwRVNaK9" "https://maps.app.goo.gl/W2g7huWrdGiDAG4WA" %}}. En Gifu, Mie y Shizuoka lo habitual es que estén seccionados.
{{% /notice %}}

<div class="googlemap-if">
<img src="/rule/asia/japan/chubu/aichi/aichi_pref_r_281.jpg" alt="Aichi GeoGuessr guide image showing Aichi Pref R 281">
</div>

{{% /tab %}}
{{% tab "Fábricas" %}}
{{% notice tip %}}
Aichi es la prefectura con más fábricas de Japón{{% ref "https://www.tsr-net.co.jp/data/detail/1188375_1527.html" "Tokyo Shoko Research" %}}. Sus envíos industriales ascienden a 52 billones de yenes, más del doble que Osaka, que ocupa el segundo lugar{{% ref "https://www.siken.net/j_ranking?stat=ind_top" "Prefecturas con mayor producción industrial" %}}.
{{% /notice %}}

<div class="googlemap-if">
<img src="/rule/asia/japan/chubu/aichi/tokai_rika_hagi_factory.jpg" alt="Aichi GeoGuessr guide image showing Tokai Rika Hagi Factory">
</div>

{{% /tab %}}
{{% tab "Chubu Electric Power" %}}
{{% notice tip %}}
En Aichi, Gifu, Mie, en la zona de Shizuoka al oeste del río Fuji y en Nagano se pueden ver postes y logotipos de Chubu Electric Power.
{{% /notice %}}

<div class="googlemap-if">
<img src="/rule/asia/japan/pole/pole-chubu.png" width="220px" alt="Pole GeoGuessr guide image showing Pole Chubu">
</div>

{{% /tab %}}
{{% /tabs %}}


<div class="container-corp mt-5" id="corp-desc" style="padding-top:50px">
    <h4 class="mb-4">Empresas destacadas</h4>
    <table class="table table-striped table-bordered">
        <thead class="table-light">
            <tr>
                <th scope="col" class="col-width-2">Empresa</th>
                <th scope="col" class="col-width-1">Código</th>
                <th scope="col" class="col-width-6">Descripción</th>
                <th scope="col" class="col-width-05">Resultados</th>
                <th scope="col" class="col-width-05">Historial de dividendos</th>
            </tr>
        </thead>
        <tbody class="corp-desc">
            <tr>
                <td>Toyota Motor</td>
                <td>{{% minkabu 7203 %}}</td>
                <td>El mayor fabricante de automóviles del mundo. Es la empresa japonesa con mayor facturación y número de empleados.</td>
                <td>{{% corplink "https://global.toyota/jp/ir/financial-results/" %}}</td>
                <td>{{% dividend "tokyo" "7203" %}}</td>
            </tr>
        </tbody>
    </table>
</div>

