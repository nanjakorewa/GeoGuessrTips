(function ($) {
  'use strict';

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


  // match height
  $(function () {
    $('.match-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  });

  // Get Parameters from some url
  var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
      var sURLVariables = url[1].split('&'),
        sParameterName,
        i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        obj[sParameterName[0]] = sParameterName[1];
      }
      return obj;
    } else {
      return undefined;
    }
  };

  // Execute actions on images generated from Markdown pages
  var images = $(".content img").not(".inline");
  // Wrap image inside a featherlight (to get a full size view in a popup)
  images.wrap(function () {
    var image = $(this);
    if (!image.parent("a").length) {
      return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
    }
  });

  // Change styles, depending on parameters set to the image
  images.each(function (index) {
    var image = $(this)
    var o = getUrlParameter(image[0].src);
    if (typeof o !== "undefined") {
      var h = o["height"];
      var w = o["width"];
      var c = o["classes"];
      image.css("width", function () {
        if (typeof w !== "undefined") {
          return w;
        } else {
          return "auto";
        }
      });
      image.css("height", function () {
        if (typeof h !== "undefined") {
          return h;
        } else {
          return "auto";
        }
      });
      if (typeof c !== "undefined") {
        var classes = c.split(',');
        for (i = 0; i < classes.length; i++) {
          image.addClass(classes[i]);
        }
      }
    }
  });

  // Image lightbox popup
  var lightboxTemplate = [
    '<div class="image-lightbox" aria-hidden="true" role="dialog">',
    '  <div class="image-lightbox__backdrop" data-lightbox-close></div>',
    '  <figure class="image-lightbox__content">',
    '    <button type="button" class="image-lightbox__close" aria-label="閉じる" data-lightbox-close>',
    '      <span aria-hidden="true">&times;</span>',
    '    </button>',
    '    <img class="image-lightbox__img" alt="">',
    '    <figcaption class="image-lightbox__caption"></figcaption>',
    '  </figure>',
    '</div>'
  ].join('');

  var $lightbox = $('.image-lightbox');
  if (!$lightbox.length) {
    $lightbox = $(lightboxTemplate);
    $('body').append($lightbox);
  }

  var $lightboxImage = $lightbox.find('.image-lightbox__img');
  var $lightboxCaption = $lightbox.find('.image-lightbox__caption');
  var $lightboxClose = $lightbox.find('.image-lightbox__close');
  var lastFocusedElement = null;
  var escKeyHandler = function (event) {
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      closeLightbox();
    }
  };

  function openLightbox($img) {
    if (!$img || !$img.length) {
      return;
    }
    var src = $img.attr('data-lightbox-src') || $img.attr('data-src') || $img.attr('data-original') || $img.attr('src') || ($img[0] && $img[0].currentSrc);
    if (!src) {
      return;
    }
    var alt = $img.attr('alt') || '';
    var caption = $img.data('caption') || $img.attr('title') || alt;

    $lightboxImage.attr('src', src);
    $lightboxImage.attr('alt', alt);

    if (caption) {
      $lightboxCaption.text(caption).show();
      $lightbox.addClass('has-caption');
    } else {
      $lightboxCaption.text('').hide();
      $lightbox.removeClass('has-caption');
    }

    lastFocusedElement = document.activeElement;
    $lightbox.attr('aria-hidden', 'false').addClass('is-visible');
    $('body').addClass('lightbox-open');
    $lightboxClose.trigger('focus');
    $(document).on('keydown.imageLightbox', escKeyHandler);
  }

  function closeLightbox() {
    if (!$lightbox.hasClass('is-visible')) {
      return;
    }
    $lightbox.attr('aria-hidden', 'true').removeClass('is-visible');
    $('body').removeClass('lightbox-open');
    $(document).off('keydown.imageLightbox', escKeyHandler);
    window.setTimeout(function () {
      $lightboxImage.attr('src', '');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
      lastFocusedElement = null;
    }, 50);
  }

  $lightbox.on('click', '[data-lightbox-close]', function (event) {
    event.preventDefault();
    closeLightbox();
  });

  $lightbox.on('click', function (event) {
    if ($(event.target).is('.image-lightbox')) {
      closeLightbox();
    }
  });

  function isLightboxEligible($img) {
    if (!$img || !$img.length) {
      return false;
    }
    if ($img.closest('.flag-list').length) {
      return false;
    }
    return true;
  }

  function bindLightbox($imgs) {
    if (!$imgs || !$imgs.length) {
      return;
    }
    $imgs.each(function () {
      var $img = $(this);
      if (!isLightboxEligible($img)) {
        return;
      }
      if ($img.data('lightbox-ready')) {
        return;
      }
      $img.data('lightbox-ready', true);
      var $trigger = $img.parent('a').length ? $img.parent('a') : $img;
      $trigger.addClass('lightbox-trigger');
      $trigger.on('click', function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.which > 1) {
          return;
        }
        event.preventDefault();
        openLightbox($img);
      });
    });
  }

  var $lightboxTargets = $('.article-surface img, .content img, .main-desciption img, .googlemap-if img')
    .not('.inline, .no-lightbox, [data-no-lightbox]')
    .filter(function () {
      return isLightboxEligible($(this));
    });
  bindLightbox($lightboxTargets);

  // Allow opting out dynamically
  $(document).on('lightbox:refresh', function () {
    var refreshedTargets = $('.article-surface img, .content img, .main-desciption img, .googlemap-if img')
      .not('.inline, .no-lightbox, [data-no-lightbox]')
      .filter(function () {
        return isLightboxEligible($(this));
      });
    bindLightbox(refreshedTargets);
  });


  // tab
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');
    if (title === "国を間違えそうなポイント") {
      navTabs.append('<li class="nav-item mymemo"><a class="nav-link" href="#">' + title + '</a></li>');
    }
    else if (title === "Difficult place") {
      navTabs.append('<li class="nav-item mymemo"><a class="nav-link" href="#">' + title + '</a></li>');
    }
    else {
      navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
    }
  });

  $('.code-tabs ul.nav-tabs').each(function () {
    $(this).find("li:first").addClass('active');
  })

  $('.code-tabs .tab-content').each(function () {
    $(this).find("div:first").addClass('active');
  });

  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
  });



  // search
  $('#search').keyup(function () {
    if (this.value) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
  $('#search').focusout(function () {
    $(this).removeClass('active')
  })

})(jQuery);
