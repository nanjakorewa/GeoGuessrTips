---
title: "Hiding Personal Information"
subtitle: "How to hide personal data and prevent leaks"
date: 2023-02-26
lastmod: 2023-07-01
weight: 21
draft: false
keywords: ["stylesheets", "css", "privacy", "personal information"]
sections: [""]
---

<br />

Because of how GeoGuessr is played, it is surprisingly easy to expose personal information by accident. These are the steps I currently take after a lot of trial and error.


- When streaming I either use an incognito window or stay signed out of Google
- I force the current location to San Francisco from the developer tools
- Any text on screen that matches certain keywords (IP address, email address, etc.) is automatically replaced with placeholder characters
- Buttons I never want to press (for example Google’s “Update location” button) are hidden with CSS so they can’t be clicked

Let me know if you have any other good ideas—I’d love to learn from them.

<br />
<br />
<h3 class="no-blur">Changing the location Google Search uses</h3>
<img src="/web/privacy/2023-03-21-16-59-28.png" alt="Web Privacy image showing 2023 03 21 16 59 28" />

<span style="font-weight: bold;">If you stay logged in to Google, the search results page can show very detailed addresses, so be careful. Even when signed out, Google can often guess the rough area from your IP address, so that deserves attention as well.</span>
Searching for transit lines, restaurants, or shops can also snap the map close to your IP-based location. When streaming I avoid searching for terms that point too close to home, such as “convenience store” or “supermarket.”
You can change the detected location by using a VPN or by opening Chrome’s developer tools and overwriting the geolocation entirely.

<img src="/web/privacy/2023-03-21-17-01-06.png" alt="Web Privacy image showing 2023 03 21 17 01 06" />

<br />
<br />

<h3 class="no-blur">Replacing any sensitive keywords in bulk</h3>

With some Chrome extensions (a simple self-made script works too) you can hide just the words you care about. If you configure it to rewrite email addresses, prefecture or city names, surnames, IP addresses, and even partial area codes, it becomes much harder to identify you even if something slips through.
One approach is to use a plug-in that masks NG words so that place names are never rendered in the first place.

<b>[Extension ● TextForma](https://chrome.google.com/webstore/detail/textforma/nmoicgikomkhfcfimpldahmfabckjiie?hl=ja)</b>

<br />
<br />

<h3 class="no-blur">Hiding UI sections with CSS</h3>

This is mostly for peace of mind, but applying custom CSS to hide areas that might leak personal information—and the links that lead to them—can prevent mistakes because you simply cannot click them. The example below hides buttons that tend to show email addresses or area codes (working as of January 2023).

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


<h3 class="no-blur">Before applying the CSS</h3>

You can read your email address and other account names from the top-right corner.
Clicking “Send to your mobile device,” etc., also shows part of the area code.

![](/web/privacy/2023-03-02-12-19-13.png)

<h3 class="no-blur">After applying the CSS</h3>

The entire button area disappears so only the place description stays visible.

![](/web/privacy/2023-03-02-12-16-43.png)

Some sites unexpectedly redirect to a Google login page, so you may want to blur that screen with CSS as well. Keep in mind that anything you blur can theoretically be restored, so add extra characters with `:before` or `:after` and change the string length if you need stronger masking.

![](/web/privacy/2023-04-02-16-24-50.png)
