/* GENERATED FILE — do not edit.
   Built by uk-hero-optimizely/build.mjs from:
     experience.src.js  (mount + behaviour)
     config.src.js      (all copy and asset filenames)
     page.src.js        (render functions, one per row)
   Edit those, then re-run: node uk-hero-optimizely/build.mjs
*/
(function () {
  'use strict';

  /* ============================================================
     UK video hero — Optimizely experience.
     Source: experience.src.js + config.src.js + page.src.js
     Build:  node uk-hero-optimizely/build.mjs

     CONFIG — override before this script runs by setting
     window.UK_HERO_CONFIG:

       window.UK_HERO_CONFIG = {
         assetBase: 'https://…',   // host serving the uploaded media
         anchor:    '[data-pattern-id="…"]',  // Sitecore row to insert BEFORE
         flatAssets: true,         // false = nested paths (local preview only)
         previewMount: '#some-el'  // dev-only fallback mount, see below
       };
     ============================================================ */
  var CFG = window.UK_HERO_CONFIG || {};

  /* ============================================================
   CONFIG — everything an editor may want to change.

   Every piece of user-facing content lives here: copy, image
   filenames, and the layout options below. Render functions in
   page.src.js read from this object and contain no hard-coded
   copy, so a wording change never means touching render code.

   Note on `headlineHtml`: it is an HTML string because the
   headline carries an inline gradient span. The tags are
   deliberate — edit the words around them and leave the
   <span class="uk-hero__ai"> wrapper in place.

   Assets are referenced by FILENAME ONLY. Sitecore flattens its
   media library on upload, so folder paths in code do not
   survive. See README "Assets".
   ============================================================ */
var config = {
  hero: {
    eyebrowIcon: 'icon-tag.svg',
    eyebrowIconAlt: '',
    eyebrow: 'New: Sage Ai now available across the entire accounting platform',

    // [OPT-CHANGE 4] The spans are display:block (visual line breaks). The newline between
    headlineHtml:
      '<span class="uk-hero__headline"><span class="uk-hero__ai">AI-powered</span> software, for</span>\n' +
      '<span class="uk-hero__headline">every stage of business</span>',

    subtitle:
      'From first sale to scale-up. Our AI handles the admin, shows what matters, ' +
      'and keeps you in control.',

    videoDesktop: 'sage-intacct-hero-gb-loop-web.mp4',
    videoMobile: 'sage-intacct-hero-gb-loop-web-mobile.mp4',
    videoMobileMaxWidth: 640,
    poster: 'sage-intacct-hero-gb-poster.jpg',

    pauseLabel: 'Pause background video',
    playLabel: 'Play background video',
  },

  /* [OPT-CHANGE 9] The card row OVERLAPS the hero video: the sections below
     the hero are pulled up by --uk-sections-pull and the video panel extends
     by --uk-hero-overhang, so the footage runs behind the selector and the top
     of the cards.

     [OPT-CHANGE 18] Panels, cards and copy MATCH LIVE GWO-4624 exactly
     (captured from the running treatment variant, spec rule 4 — real source,
     not inferred). Four products, not the five the prototype carried:

       - MTD          added; live has it, the prototype did not
       - Accountants  no longer a PANEL. Live has none: its two products
                      (Sage for Accountants, Sage Intacct Accountants) live
                      under Accounting tagged sizes:['practice'], and surface
                      only when the size filter is "Accountants in practice".
                      They are never in the default Accounting set.
       - Explore Sage Ai  removed; live has no such panel and ours was empty

     Sizes are per-card (`sizes`), because the second select filters WITHIN the
     chosen product. A card with no `sizes` shows for every size.

     `media` is a FILENAME ONLY (Sitecore flattens on upload). An empty string
     renders the card with no image — the intended state for products whose
     micro-UI artwork has not been produced yet, NOT an error. Live GWO-4624
     has no card artwork at all; the micro-UI is our addition. */
  tabs: {
    activeIndex: 1,          // Accounting, as live

    productLabel: 'I am interested in',
    sizeLabel: 'software, for a business of',

    panels: [
      {
        title: 'MTD',
        sizes: [
          { value: 'all', label: 'Select business size' },
          { value: 'solo', label: 'Just me' },
        ],
        cards: [
          {
            eyebrow: 'Sole Traders with MTD requirements',
            title: 'Sage Sole Trader',
            bodyHtml:
              '<p>Sort Self Assessment today and get ahead of Making Tax ' +
              'Digital without the stress.</p>' +
              '<p><strong>FREE plan available</strong></p>',
            ctaText: 'Discover Sage Sole Trader',
            ctaHref: '/en-gb/products/sage-sole-trader/',
            sizes: ['solo'],
            media: 'micro-ui-sage-sole-trader-gb.svg',
          },
        ],
      },
      {
        title: 'Accounting',
        sizes: [
          { value: 'all', label: 'Select business size' },
          { value: 'solo', label: 'Just me' },
          { value: 'small', label: '1-19 Employees' },
          { value: 'large', label: '20+ Employees' },
          { value: 'practice', label: 'Accountants in practice' },
        ],
        cards: [
          {
            eyebrow: 'Sole Traders with MTD requirements',
            title: 'Sage Sole Trader',
            bodyHtml:
              '<p>Sort Self Assessment today and get ahead of Making Tax ' +
              'Digital without the stress.</p>' +
              '<p><strong>FREE plan available</strong></p>',
            ctaText: 'Discover Sage Sole Trader',
            ctaHref: '/en-gb/products/sage-sole-trader/',
            sizes: ['solo'],
            media: 'micro-ui-sage-sole-trader-gb.svg',
          },
          {
            eyebrow: '1-19 Employees',
            title: 'Sage Accounting',
            bodyHtml:
              '<p>Get paid 7 days faster and save 5 hours weekly with Sage ' +
              'Copilot.</p>' +
              '<p><strong>Get 90% off for 6 months</strong>, prices start at ' +
              '\u00A32 then \u00A320 per month (excluding VAT).</p>',
            ctaText: 'Discover Sage Accounting',
            ctaHref: '/en-gb/sage-business-cloud/sage-accounting/',
            sizes: ['small'],
            media: 'micro-ui-sage-accounting-gb.svg',
          },
          {
            eyebrow: '20+ Employees',
            title: 'Sage Intacct',
            bodyHtml:
              '<p>Cloud finance software for growing and mid-sized ' +
              'businesses. Run multi-entity, multi-currency finances in one ' +
              'AI-powered scalable platform.</p>' +
              '<p><strong>Price on request</strong></p>',
            ctaText: 'Discover Sage Intacct',
            ctaHref: '/en-gb/sage-business-cloud/intacct/',
            sizes: ['large'],
            media: 'micro-ui-sage-intacct-gb.svg',
          },
          {
            eyebrow: 'Accountants in practice',
            title: 'Sage for Accountants',
            bodyHtml:
              '<p>Includes NEW MTD agent. Cut 80% admin, 60% faster client ' +
              'onboarding, save 5+ hours a week.</p>' +
              '<p><strong>Sign up for free</strong></p>',
            ctaText: 'Discover Sage for Accountants',
            ctaHref: '/en-gb/accountants/',
            sizes: ['practice'],
            defaultHidden: true,
            media: 'micro-ui-sage-for-accountants-gb.svg',
          },
          {
            eyebrow: 'Accountants in practice',
            title: 'Sage Intacct Accountants',
            bodyHtml:
              '<p>For accountancy firms managing complex clients. Automate ' +
              'multi-entity workflows, surface real-time insights with AI, ' +
              'and elevate your advisory offering.</p>' +
              '<p><strong>Join the programme</strong></p>',
            ctaText: 'Discover Sage Intacct Accountants',
            ctaHref: '/en-gb/accountants/intacct-accountants/',
            sizes: ['practice'],
            defaultHidden: true,
            media: 'micro-ui-sage-intacct-gb.svg',
          },
        ],
      },
      {
        title: 'Payroll & HR',
        sizes: [
          { value: 'all', label: 'Select business size' },
          { value: 'p150', label: '1-150 Employees' },
          { value: 'p249', label: '151-249 Employees' },
          { value: 'p250', label: '250+ Employees' },
        ],
        cards: [
          {
            eyebrow: '1-150 Employees',
            title: 'Sage Payroll',
            bodyHtml:
              '<p>Your trusted partner for fast, effortless payroll and HR. ' +
              'Get the essentials you need, fully compliant and ' +
              'HMRC-recognised.</p>' +
              '<p><strong>Get 90% off for 3 months,</strong> prices start at ' +
              '\u00A31.20 per month (excluding VAT).</p>',
            ctaText: 'Discover Sage Payroll',
            ctaHref: '/en-gb/sage-business-cloud/payroll/',
            sizes: ['p150'],
            media: 'micro-ui-sage-payroll-gb.svg',
          },
          {
            eyebrow: '1-250 Employees',
            title: 'Sage HR',
            bodyHtml:
              '<p>Easy-to-use HR software that connects you and your ' +
              'people.</p>' +
              '<p><strong>Try free for 30 days,</strong> then starting at ' +
              '\u00A35 per employee/month (excluding VAT).</p>',
            ctaText: 'Discover Sage HR',
            ctaHref: '/en-gb/sage-business-cloud/hr/',
            sizes: ['p150', 'p249'],
            media: 'micro-ui-sage-hr-gb.svg',
          },
          {
            eyebrow: '500-5,000 Employees',
            title: 'Sage People',
            bodyHtml:
              '<p>Manage your HR needs as they grow in complexity. Get ' +
              'configurable HR and payroll for your organisation. Automate, ' +
              'stay compliant, and scale fast.</p>' +
              '<p><strong>Price on request</strong></p>',
            ctaText: 'Discover Sage People',
            ctaHref: '/en-gb/sage-business-cloud/people/',
            sizes: ['p250'],
            media: 'micro-ui-sage-people-gb.svg',
          },
        ],
      },
      {
        title: 'ERP',
        sizes: [
          { value: 'all', label: 'Select business size' },
          { value: 'e49', label: '10-49 Employees' },
          { value: 'e50', label: '50+ Employees' },
        ],
        cards: [
          {
            eyebrow: '10-49 Employees',
            title: 'Operations for Sage Intacct',
            bodyHtml:
              '<p>Optimise your operations with manufacturing and ' +
              'distribution ERP software.</p>' +
              '<p><strong>Price on request</strong></p>',
            ctaText: 'Discover Operations for Sage Intacct',
            ctaHref: '/en-gb/sage-business-cloud/intacct/product-capabilities/' +
                     'extended-capabilities/sage-distribution-and-manufacturing-operations/',
            sizes: ['e49'],
            media: 'micro-ui-operations-for-sage-intacct-gb.svg',
          },
          {
            eyebrow: '50+ Employees',
            title: 'Sage X3',
            bodyHtml:
              '<p>Cloud-native ERP for manufacturing and distribution. ' +
              'Manage finance, production, and supply chain with smarter ' +
              'automation and insights.</p>' +
              '<p><strong>Price on request</strong></p>',
            ctaText: 'Discover Sage X3',
            ctaHref: '/en-gb/sage-business-cloud/x3/',
            sizes: ['e50'],
            media: 'micro-ui-sage-x3-gb.svg',
          },
        ],
      },
    ],
  },
};

  var ASSET_BASE = (CFG.assetBase || '').replace(/\/+$/, '');
  var FLAT_ASSETS = CFG.flatAssets !== false;   // flat is the default
  var NESTED_FOLDERS = CFG.nestedFolders || {};

  function assetUrl(name) {
    var file = String(name).replace(/^\/+/, '').split('/').pop();
    if (FLAT_ASSETS) return ASSET_BASE + '/' + file;
    var ext = file.slice(file.lastIndexOf('.')).toLowerCase();
    return ASSET_BASE + '/' + (NESTED_FOLDERS[ext] || '') + file;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

function heroTop() {
  var c = config.hero;
  return (
    '<section class="uk-hero">' +
      '<div class="uk-hero__bg">' +
        '<video class="uk-hero__video" data-uk-hero-video autoplay muted loop ' +
               'playsinline preload="auto" poster="' + assetUrl(c.poster) + '"></video>' +
      '</div>' +
      '<div class="uk-hero__scrim" aria-hidden="true"></div>' +

      '<div class="uk-hero__video-controls lottie-container">' +
        '<div class="lottie-controls">' +
          '<button type="button" data-uk-hero-toggle class="lottie-control playing" ' +
                  'aria-label="' + esc(c.pauseLabel) + '"></button>' +
        '</div>' +
      '</div>' +

      '<div class="uk-hero__content">' +
        // [OPT-CHANGE 1] Eyebrow moved OUTSIDE the <h1>. Inside it, the heading's accessible
        '<p class="uk-hero__eyebrow">' +
          '<img class="uk-hero__eyebrow-icon" src="' + assetUrl(c.eyebrowIcon) + '" ' +
               'alt="' + esc(c.eyebrowIconAlt) + '">' +
          esc(c.eyebrow) +
        '</p>' +
        '<h1 class="uk-hero__title">' + c.headlineHtml + '</h1>' +
        '<p class="uk-hero__subtitle">' + esc(c.subtitle) + '</p>' +
      '</div>' +
    '</section>'
  );
}

/* [OPT-CHANGE 9] Tabset + card row.

   Markup deliberately reuses the sage.com bundle's own component classes
   (.score-tab, .nav-tabs, .score-flex-box, .score-highlight, .caption) so the
   cards inherit the host's card styling rather than re-declaring it. Only the
   deltas live in styles.css.

   IDs are generated per render (uk-tab-N) rather than copied from Sitecore's
   GUIDs: the aria-controls/aria-labelledby pair must agree with whatever is
   actually in the DOM, and a hard-coded GUID would collide if the host ever
   ships the same panel.

   The tab buttons are real <button>s in a role="tablist", each owning
   aria-selected and tabindex, so the control is operable by keyboard and
   announced as a tabset (WCAG 4.1.2). Behaviour is wired in experience.src.js.
*/
function tabId(i) { return 'uk-tab-' + i; }

function cardHtml(card) {
  var media = card.media
    ? '<div class="score-center-text uk-card__media">' +
        '<img class="uk-card__media-img" src="' + assetUrl(card.media) + '" alt="">' +
      '</div>'
    : '';
  // [OPT-CHANGE 16] `sizes` drives the business-size filter. Omitted or empty
  var sizeAttr = (card.sizes && card.sizes.length)
    ? ' data-sizes="' + esc(card.sizes.join(' ')) + '"'
    : '';
  if (card.defaultHidden) sizeAttr += ' data-default-hidden hidden';
  return (
    '<div class="flex-item"' + sizeAttr + '>' +
      '<div class="score-style-box all-corners-sm padding-sm theme-light" ' +
           'style="background-color:#F2F5F6;">' +
        media +
        '<div class="score-style-box padding-none">' +
          '<div class="score-highlight heading-lg">' +
            '<div class="score-highlight-header">' + esc(card.eyebrow) + '</div>' +
            '<div class="caption">' +
              // [OPT-CHANGE 14] h2, not h3. The hero's headline is the h1, so a
              '<h2 class="inner-heading">' + esc(card.title) + '</h2>' +
              '<div class="score-highlight-body">' + card.bodyHtml + '</div>' +
              '<div class="score-call-to-action">' +
                '<a class="score-button primary" href="' + esc(card.ctaHref) + '">' +
                  esc(card.ctaText) +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function tabsBlock() {
  var t = config.tabs;
  var active = t.activeIndex || 0;

  /* [OPT-CHANGE 16] Product selector, ported from the live GWO-4624 experiment
     (T_UK_GWO-4624_Homepage_Product_Filtering) which is A/B running on the
     en-gb homepage. Markup names follow that experiment so the two are
     directly comparable; see reference/uk-hero-vs-gwo4624.md for every point
     where this build deviates from it.

     Native <select>, exactly as live: no custom dropdown, so it inherits the
     platform's own keyboard and screen-reader handling rather than
     re-implementing a listbox (spec rule 45a — semantic HTML first).

     Each <option> value IS the id of the panel it reveals, so the selector
     drives the same panels directly. Live GWO-4624 has no tabset behind it —
     it builds the cards itself — so none is emitted here either. */
  var options = t.panels.map(function (p, i) {
    return '<option value="' + tabId(i) + '"' + (i === active ? ' selected' : '') + '>' +
             esc(p.title) +
           '</option>';
  }).join('');

  var activeSizes = (t.panels[active] && t.panels[active].sizes) || [];
  var sizeOptions = activeSizes.map(function (sz, i) {
    return '<option value="' + esc(sz.value) + '"' + (i === 0 ? ' selected' : '') + '>' +
             esc(sz.label) +
           '</option>';
  }).join('');

  var controls =
    '<div class="opt-gwo-controls">' +
      '<label class="opt-gwo-label" for="opt-gwo-product">' +
        esc(t.productLabel) +
      '</label>' +
      '<span class="opt-select-wrap">' +
        '<select id="opt-gwo-product" class="opt-gwo-select" ' +
                'data-uk-hero-product>' + options + '</select>' +
      '</span>' +
      (sizeOptions
        ? '<label class="opt-gwo-label" for="opt-gwo-size">' +
            esc(t.sizeLabel) +
          '</label>' +
          '<span class="opt-select-wrap">' +
            '<select id="opt-gwo-size" class="opt-gwo-select" ' +
                    'data-uk-hero-size>' + sizeOptions + '</select>' +
          '</span>'
        : '') +
    '</div>';

  var panels = t.panels.map(function (p, i) {
    var on = i === active;
    var inner = p.rawHtml
      ? p.rawHtml
      : '<div class="score-flex-box col-3">' +
          p.cards.map(cardHtml).join('') +
        '</div>';
    return (
      '<div class="tab-pane fade score-tab-panel animations-off' +
           (on ? ' active' : '') + '" ' +
           'id="' + tabId(i) + '" role="tabpanel"' + (on ? '' : ' hidden') + '>' +
        inner +
      '</div>'
    );
  }).join('');

  return (
    '<div class="uk-sections">' +
      '<div class="uk-tabs-container">' +
        '<div class="score-tab button-tabset ai-gradient sage-ai">' +
          controls +
          '<div class="tab-content-wrapper-outer">' +
            '<div class="tab-content">' + panels + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderBody() {
  return heroTop() + tabsBlock();
}

  function wireKbdGate() {
    if (document.documentElement.hasAttribute('data-uk-hero-kbd')) return;
    document.documentElement.setAttribute('data-uk-hero-kbd', '');
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') document.body.classList.add('using-kbd');
    });
    document.addEventListener('mousedown', function () {
      document.body.classList.remove('using-kbd');
    });
  }

  function wireHeroVideo(root) {
    var video = root.querySelector('[data-uk-hero-video]');
    var toggle = root.querySelector('[data-uk-hero-toggle]');
    if (!video || !toggle) return;
    var c = config.hero;

    var isMobile = window.matchMedia(
      '(max-width: ' + c.videoMobileMaxWidth + 'px)').matches;
    var source = document.createElement('source');
    source.src = assetUrl(isMobile ? c.videoMobile : c.videoDesktop);
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();

    if (window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.autoplay = false;
      video.pause();
    }

    function sync() {
      var paused = video.paused;
      toggle.classList.toggle('playing', !paused);
      toggle.setAttribute('aria-label', paused ? c.playLabel : c.pauseLabel);
    }
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    sync();

    toggle.addEventListener('click', function () {
      if (video.paused) { video.play(); } else { video.pause(); }
    });
  }

  // [OPT-CHANGE 16] Panel switching driven by the GWO-4624 <select>, not by a
  function wireSelector(root) {
    var product = root.querySelector('[data-uk-hero-product]');
    if (!product) return;

    function show(panelId) {
      var panels = [].slice.call(root.querySelectorAll('.score-tab-panel'));
      panels.forEach(function (panel) {
        var on = panel.id === panelId;
        panel.classList.toggle('active', on);
        if (on) { panel.removeAttribute('hidden'); }
        else { panel.setAttribute('hidden', ''); }
      });
      var shown = root.querySelector('#' + panelId);
      if (shown) initCarousel(shown);
    }

    var size = root.querySelector('[data-uk-hero-size]');

    function syncSizes(panelId) {
      if (!size) return;
      var panel = config.tabs.panels.filter(function (p, i) {
        return tabId(i) === panelId;
      })[0];
      var list = (panel && panel.sizes) || [];
      size.innerHTML = '';
      list.forEach(function (sz) {
        var o = document.createElement('option');
        o.value = sz.value;
        o.textContent = sz.label;
        size.appendChild(o);
      });
      size.selectedIndex = 0;
    }

    product.addEventListener('change', function () {
      show(product.value);
      syncSizes(product.value);
    });

    if (size) {
      size.addEventListener('change', function () {
        filterBySize(root.querySelector('#' + product.value), size.value);
      });
    }
  }

  // [OPT-CHANGE 17] Below 1200px the three cards become a single-card slick
  var CAROUSEL_MAX = 1199;

  function carouselWanted() {
    return window.matchMedia('(max-width: ' + CAROUSEL_MAX + 'px)').matches;
  }

  function initCarousel(panel) {
    if (!panel) return;
    var $ = window.jQuery;
    var row = panel.querySelector('.score-flex-box');
    if (!row || !$ || !$.fn || !$.fn.slick) return;
    var $row = $(row);

    if (carouselWanted()) {
      if (!$row.hasClass('slick-initialized')) {
        $row.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          mobileFirst: false,
          respondTo: 'slider'
        });
      }
    } else if ($row.hasClass('slick-initialized')) {
      $row.slick('unslick');
    }
  }

  function filterBySize(panel, size) {
    if (!panel) return;
    var $ = window.jQuery;
    var row = panel.querySelector('.score-flex-box');
    if (!row) return;
    var $row = $ && $.fn && $.fn.slick ? $(row) : null;
    var wasSlick = $row && $row.hasClass('slick-initialized');
    if (wasSlick) $row.slick('unslick');

    [].slice.call(row.querySelectorAll('.flex-item')).forEach(function (item) {
      var attr = item.getAttribute('data-sizes');
      var declared = attr ? attr.split(/\s+/).filter(Boolean) : [];
      var show;
      if (!size || size === 'all') {
        show = item.getAttribute('data-default-hidden') === null;
      } else {
        show = !declared.length || declared.indexOf(size) !== -1;
      }
      item.hidden = !show;
    });

    initCarousel(panel);
  }

  function wireCarouselResize(root) {
    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var active = root.querySelector('.score-tab-panel.active');
        initCarousel(active);
      }, 150);
    });
  }

  function mount() {
    if (document.querySelector('.uk-hero-root')) return;   // idempotent

    var wrapper = document.createElement('div');
    wrapper.className = 'uk-hero-root';
    wrapper.innerHTML = renderBody();

    var anchor = CFG.anchor ? document.querySelector(CFG.anchor) : null;

    if (anchor) {
      anchor.parentNode.insertBefore(wrapper, anchor);
    } else if (CFG.previewMount) {
      var host = document.querySelector(CFG.previewMount);
      if (!host) {
        console.error('[uk-hero] previewMount not found:', CFG.previewMount);
        return;
      }
      host.appendChild(wrapper);
    } else {
      console.error(
        '[uk-hero] No insertion anchor found. Looked for: ' +
        (CFG.anchor || '(none configured — set window.UK_HERO_CONFIG.anchor)') +
        '. Nothing was inserted.');
      return;
    }

    wireKbdGate();
    wireHeroVideo(wrapper);
    wireSelector(wrapper);
    wireCarouselResize(wrapper);
    initCarousel(wrapper.querySelector('.score-tab-panel.active'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
