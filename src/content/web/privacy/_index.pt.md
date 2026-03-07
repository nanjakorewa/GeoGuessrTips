---
title: "Ocultar informações pessoais"
subtitle: "Como ocultar dados pessoais e evitar vazamentos"
date: 2023-02-26
lastmod: 2023-07-01
weight: 21
draft: false
keywords: ["folhas de estilo", "css", "privacidade", "informações pessoais"]
sections: [""]
---

<br />

Pela natureza do jogo, é fácil acabar expondo informações pessoais sem querer.
Depois de pensar bastante, passei a usar as medidas abaixo.


- Quando estou em live, uso uma janela anônima ou saio da conta Google
- Forço a localização atual para São Francisco usando as ferramentas de desenvolvedor
- Qualquer texto exibido que combine com palavras-chave (IP, e-mail etc.) é substituído automaticamente
- Botões que não quero clicar (por exemplo, o "Atualizar localização" do Google) são escondidos com CSS para impedir o clique

Se você tiver outras boas ideias, ficarei muito feliz em saber.

<br />
<br />
<h3 class="no-blur">Alterar a localização exibida na busca do Google</h3>
<img src="/web/privacy/2023-03-21-16-59-28.png" alt="Imagem Web Privacy mostrando 2023 03 21 16 59 28" />

<span style="font-weight: bold;">Se você estiver logado no Google, a página de resultados pode mostrar endereços muito detalhados, então tenha cuidado. Mesmo deslogado, o Google pode estimar a região pelo IP.</span>
Pesquisar por transporte, restaurantes ou lojas também pode fazer o mapa saltar para perto do seu IP. Em lives, evito pesquisar termos como "conveniência" ou "supermercado" para não revelar a área.
Você pode alterar a localização usando VPN ou substituindo a geolocalização diretamente nas ferramentas de desenvolvedor do Chrome.

<img src="/web/privacy/2023-03-21-17-01-06.png" alt="Imagem Web Privacy mostrando 2023 03 21 17 01 06" />

<br />
<br />

<h3 class="no-blur">Substituir em massa palavras sensíveis na tela</h3>

Com algumas extensões do Chrome (até uma simples extensão caseira já resolve), dá para esconder apenas as palavras que você definir. Se você configurar para substituir endereços de e-mail, nomes de estados e cidades, sobrenomes, IPs e até parte de DDD, fica muito mais difícil identificar você mesmo se algo aparecer.
Uma ideia é usar um plugin que mascara palavras proibidas para que nomes de lugares nunca apareçam.

<b>[Extensão ● TextForma](https://chrome.google.com/webstore/detail/textforma/nmoicgikomkhfcfimpldahmfabckjiie?hl=ja)</b>

<br />
<br />

<h3 class="no-blur">Esconder áreas da interface com CSS</h3>

Isso serve mais para tranquilidade, mas aplicar CSS personalizado para ocultar áreas que podem expor dados e os links para elas pode evitar acidentes, já que você não consegue clicar nesses lugares. O exemplo abaixo esconde botões que costumam mostrar e-mail ou parte do DDD (válido em janeiro de 2023).

<pre>
@-moz-document domain("google.co.jp") {
    div.qLP7kc {
        display: none;
    }
    
    div.qWuU9c {
        display: none;
    }
    
    div.scene-footer-container {
        bottom: 3em !important;
        right: 10em !important;
        margin-top: 0;
        transform: scale(1.5, 1.5);
    }
    
    div.sW9vGe {
        width: 12em;
    }
    
    img.gb_h {
        display: none;
    }
    
    div.gb_Ef {
        display: none;
    }
    
    div.hdeJwf{
        display: none;
    }
    
    div.etWJQ {
        display: none;
    }
}
</pre>

<pre>
@-moz-document url-prefix("https://www.google.com/maps/") {
    img.gb_h {
        display: none;
    }
    
    div.gb_Ef {
        display: none;
    }
    
    div.hdeJwf{
        display: none;
    }
    
    div.etWJQ {
        display: none;
    }
}
</pre>


<h3 class="no-blur">Antes de aplicar o CSS</h3>

Você consegue ver seu e-mail e o nome de outras contas no canto superior direito.
Ao clicar em "Enviar para o dispositivo móvel" etc., também aparece parte do DDD.

![](/web/privacy/2023-03-02-12-19-13.png)

<h3 class="no-blur">Depois de aplicar o CSS</h3>

A área inteira de botões desaparece e fica apenas a descrição do local.

![](/web/privacy/2023-03-02-12-16-43.png)

Alguns sites redirecionam para a tela de login do Google de forma inesperada, então talvez seja uma boa ideia borrar essa tela também com CSS. Lembre-se de que qualquer borrão pode ser revertido, então, se precisar, adicione caracteres extras com `:before` ou `:after` para mudar o tamanho da string.

![](/web/privacy/2023-04-02-16-24-50.png)
