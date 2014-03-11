/*global require: false */
require.config({
  paths: {
    text:                 '../../assets/vendor/requirejs-text/text',
    json:                 '../../assets/vendor/requirejs-plugins/src/json',
    jquery:               '../../assets/vendor/jquery/dist/jquery.min',
    jqueryui:             '../../assets/vendor/jquery-ui/ui/minified/jquery-ui.min',
    jqueryScrollTo:       '../../assets/vendor/jquery.scrollTo/jquery.scrollTo.min',
    angular:              '../../assets/vendor/angular/angular.min',
    angularResource:      '../../assets/vendor/angular-resource/angular-resource.min',
    angularRoute:         '../../assets/vendor/angular-route/angular-route.min',
    angularSanitize:      '../../assets/vendor/angular-sanitize/angular-sanitize.min',
    angularTranslate:     '../../assets/vendor/angular-translate/angular-translate.min',
    angularAdaptiveSpeech:'../../assets/vendor/angular-adaptive-speech/angular-adaptive-speech.min',
    lodash:               '../../assets/vendor/lodash/dist/lodash.min',
    bootstrap:            '../../assets/vendor/bootstrap/dist/js/bootstrap.min',
    pdfCompatibility:     'lib/pdf/compatibility',
    pdfl10n:              'lib/pdf/l10n',
    pdf:                  'lib/pdf/pdf',
    pdfViewer:            'lib/pdf/viewer',
    ssp:                  'lib/ssp/embed'
  },
  shim: {
    jqueryScrollTo: ['jquery'],
    angular: {
      exports: 'angular'
    },
    angularResource: ['angular'],
    angularRoute: ['angular'],
    angularSanitize: ['angular'],
    angularTranslate: ['angular'],
    angularAdaptiveSpeech: ['angular'],
    lodash: {
      exports: '_'
    },
    bootstrap: ['jquery'],
    // pdfCompatibility: ['jquery'],
    pdfl10n: ['pdfCompatibility'],
    pdf: ['pdfl10n'],
    pdfViewer: ['pdf']
  }
});

require([
  'jquery',
  'jqueryScrollTo',
  'lodash',
  'bootstrap',
  'angular',
  'angularResource',
  'angularRoute',
  'angularSanitize',
  'angularTranslate',
  'angularAdaptiveSpeech',
  'app',
  'routes',
  'translate'
], function (
    $, 
    scrollTo, 
    _,
    bootstrap, 
    angular, 
    angularResource, 
    angularRoute, 
    angularSanitize, 
    angularTranslate,
    angularAdaptiveSpeech, 
    app, 
    routes,
    translate
  ) {
  'use strict';

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    $html.addClass('ng-app');
    angular.bootstrap($html, [app.name]);
  });

  $(document).ready(function () {

    // TODO: move to a directive
    var navLinks;

    $('#creations-slider.carousel').carousel();

    navLinks = function(clicked) {
      var itemId;
      itemId = clicked.attr('href');
      return $('body').stop().scrollTo(itemId, 500);
    };

    $('a.scrollto').click(function() {
      var nav_clicked;
      nav_clicked = $(this);
      navLinks(nav_clicked);
      return false;
    });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
    });
  });
});