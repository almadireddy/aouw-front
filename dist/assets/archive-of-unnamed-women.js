"use strict";



define('archive-of-unnamed-women/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://aouw.herokuapp.com/api/'
  });
});
define('archive-of-unnamed-women/app', ['exports', 'archive-of-unnamed-women/resolver', 'ember-load-initializers', 'archive-of-unnamed-women/config/environment', 'archive-of-unnamed-women/models/custom-inflector-rules'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("archive-of-unnamed-women/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define('archive-of-unnamed-women/components/archive-photo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    quote: null,
    currentPhoto: null,

    init: function init() {
      this._super.apply(this, arguments);
      var literature = this.get('literature');
      var rand = Math.random() * literature.content.length;

      this.set('quote', literature.content[Math.floor(rand)].__data.quote);
      this.set('currentPhoto', this.get('photo'));
    },


    actions: {
      imageClicked: function imageClicked() {
        this.sendAction('show', this.get('quote'), this.get('photo').get('nypl'), this.get('photo'));
      }
    }
  });
});
define('archive-of-unnamed-women/components/click-to-show', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    showingInfo: false,
    quote: null,

    init: function init() {
      this._super.apply(this, arguments);
      var literature = this.get('model.literature');
      var rand = Math.random() * literature.content.length;

      this.set('quote', literature.content[Math.floor(rand)].__data.quote);
    },


    actions: {
      clicked: function clicked() {
        document.getElementById('quote').innerText = this.get('quote');
      }
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define('archive-of-unnamed-women/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define("archive-of-unnamed-women/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define('archive-of-unnamed-women/components/lazy-background-image', ['exports', 'ember-lazy-image/components/lazy-background-image'], function (exports, _lazyBackgroundImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lazyBackgroundImage.default;
});
define('archive-of-unnamed-women/components/lazy-image', ['exports', 'ember-lazy-image/components/lazy-image'], function (exports, _lazyImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lazyImage.default;
});
define('archive-of-unnamed-women/components/liquid-append', ['exports', 'liquid-wormhole/components/liquid-append'], function (exports, _liquidAppend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidAppend.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define('archive-of-unnamed-women/components/liquid-destination', ['exports', 'liquid-wormhole/components/liquid-destination'], function (exports, _liquidDestination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDestination.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('archive-of-unnamed-women/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define('archive-of-unnamed-women/components/liquid-tether', ['exports', 'liquid-tether/components/liquid-tether'], function (exports, _liquidTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTether.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("archive-of-unnamed-women/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('archive-of-unnamed-women/components/liquid-wormhole', ['exports', 'liquid-wormhole/components/liquid-wormhole'], function (exports, _liquidWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidWormhole.default;
    }
  });
});
define('archive-of-unnamed-women/components/masonry-grid/component', ['exports', 'ember-masonry-grid/components/masonry-grid/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('archive-of-unnamed-women/components/masonry-item/component', ['exports', 'ember-masonry-grid/components/masonry-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('archive-of-unnamed-women/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('archive-of-unnamed-women/components/nav-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('archive-of-unnamed-women/components/site-footer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('archive-of-unnamed-women/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('archive-of-unnamed-women/controllers/archive', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    isShowingModal: false,
    quote: null,
    imgSrc: null,
    currentPhoto: null,

    actions: {
      showPictureModal: function showPictureModal(quote, nypl, photo) {
        this.set('imgSrc', 'images/' + nypl + '.jpeg');
        this.set('quote', quote);
        this.set('isShowingModal', true);
        this.set('currentPhoto', photo);
      },
      toggleModal: function toggleModal() {
        this.toggleProperty('isShowingModal');
      },
      showQuoteOnImage: function showQuoteOnImage() {
        var imageWidth = document.getElementById('modal-image').clientWidth;
        document.getElementById('quote').style.width = imageWidth + 'px';
        document.getElementById('quote-container').style.width = imageWidth + 'px';
        document.getElementById('info-section').style.width = imageWidth + 'px';
        document.getElementById('quote').innerText = this.get('quote');
      }
    }
  });
});
define('archive-of-unnamed-women/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('archive-of-unnamed-women/helpers/app-version', ['exports', 'archive-of-unnamed-women/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('archive-of-unnamed-women/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('archive-of-unnamed-women/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('archive-of-unnamed-women/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('archive-of-unnamed-women/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('archive-of-unnamed-women/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('archive-of-unnamed-women/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('archive-of-unnamed-women/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'archive-of-unnamed-women/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('archive-of-unnamed-women/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('archive-of-unnamed-women/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('archive-of-unnamed-women/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('archive-of-unnamed-women/initializers/export-application-global', ['exports', 'archive-of-unnamed-women/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('archive-of-unnamed-women/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("archive-of-unnamed-women/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('archive-of-unnamed-women/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('archive-of-unnamed-women/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('archive-of-unnamed-women/initializers/viewport-config', ['exports', 'ember-in-viewport/initializers/viewport-config'], function (exports, _viewportConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _viewportConfig.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _viewportConfig.initialize;
    }
  });
});
define("archive-of-unnamed-women/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('archive-of-unnamed-women/models/collection', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string')
  });
});
define('archive-of-unnamed-women/models/custom-inflector-rules', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var inflector = _emberInflector.default.inflector;

  // Tell the inflector that the plural of "advice" is "advice"
  inflector.uncountable('literature');

  // Modules must have an export, so we just export an empty object here
  exports.default = {};
});
define('archive-of-unnamed-women/models/literature', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    quote: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    title: _emberData.default.attr('string'),
    startPage: _emberData.default.attr('number'),
    endPage: _emberData.default.attr('number'),
    originalPublicationDate: _emberData.default.attr('number'),
    originalPublisher: _emberData.default.attr('string'),
    publisher: _emberData.default.attr('string'),
    currentCitation: _emberData.default.attr('number'),
    pseudonym: _emberData.default.attr('string'),
    photos: _emberData.default.belongsTo('collection')
  });
});
define('archive-of-unnamed-women/models/photo', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    uuid: _emberData.default.attr('string'),
    permalink: _emberData.default.attr('string'),
    nypl: _emberData.default.attr('string'),
    photographer: _emberData.default.attr('string'),
    year: _emberData.default.attr('string'),
    location: _emberData.default.attr('string'),
    description: _emberData.default.attr('string')
  });
});
define('archive-of-unnamed-women/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('archive-of-unnamed-women/router', ['exports', 'archive-of-unnamed-women/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('archive');
    this.route('credits');
  });

  exports.default = Router;
});
define('archive-of-unnamed-women/routes/archive', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.RSVP.hash({
        photos: this.store.findAll('photo'),
        collections: this.store.findAll('collection'),
        literature: this.store.findAll('literature')
      });
    }
  });
});
define('archive-of-unnamed-women/routes/credits', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('archive-of-unnamed-women/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.RSVP.hash({
        photos: this.store.findAll('photo'),
        collections: this.store.findAll('collection'),
        literature: this.store.findAll('literature')
      });
    }
  });
});
define('archive-of-unnamed-women/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(key) {
      return key;
    }
  });
});
define('archive-of-unnamed-women/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('archive-of-unnamed-women/services/liquid-fire-transitions', ['exports', 'liquid-wormhole/services/liquid-fire-transitions'], function (exports, _liquidFireTransitions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidFireTransitions.default;
    }
  });
});
define('archive-of-unnamed-women/services/liquid-wormhole', ['exports', 'liquid-wormhole/services/liquid-wormhole'], function (exports, _liquidWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidWormhole.default;
    }
  });
});
define('archive-of-unnamed-women/services/modal-dialog', ['exports', 'archive-of-unnamed-women/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define("archive-of-unnamed-women/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mtQnP6jv", "block": "{\"statements\":[[1,[33,[\"nav-bar\"],null,[[\"title\"],[\"An Archive of Unnamed Women\"]]],false],[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/application.hbs" } });
});
define("archive-of-unnamed-women/templates/archive", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tIA40qva", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"full-container no-margin grid\"],[13],[0,\"\\n\"],[6,[\"masonry-grid\"],null,[[\"items\",\"initLayout\",\"percentPosition\",\"customLayout\"],[[28,[\"model\",\"photos\"]],false,true,true]],{\"statements\":[[6,[\"masonry-item\"],null,[[\"item\",\"grid\"],[[28,[\"photo\"]],[28,[\"grid\"]]]],{\"statements\":[[0,\"      \"],[1,[33,[\"archive-photo\"],null,[[\"literature\",\"photo\",\"show\"],[[28,[\"model\",\"literature\"]],[28,[\"photo\"]],[33,[\"action\"],[[28,[null]],\"showPictureModal\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"photo\",\"index\",\"grid\"]},null],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"isShowingModal\"]]],null,{\"statements\":[[6,[\"modal-dialog\"],null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\",\"animatable\"],[\"toggleModal\",\"center\",true,true]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"image-quote\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-left\"],[13],[0,\"\\n          \"],[11,\"img\",[]],[15,\"id\",\"modal-image\"],[16,\"src\",[26,[\"imgSrc\"]],null],[15,\"alt\",\"\"],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"showQuoteOnImage\"],null],null],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-right\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"id\",\"quote-container\"],[15,\"class\",\"quote\"],[13],[0,\"\\n            \"],[11,\"h2\",[]],[15,\"id\",\"quote\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"id\",\"info-section\"],[15,\"class\",\"info\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"description\"],[13],[0,\"\\n          \"],[1,[33,[\"click-to-show\"],null,[[\"model\",\"photo\",\"attribute\"],[[28,[\"model\"]],[28,[\"currentPhoto\"]],\"description\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"other-info\"],[13],[0,\"\\n          \"],[1,[33,[\"click-to-show\"],null,[[\"model\",\"photo\",\"attribute\"],[[28,[\"model\"]],[28,[\"currentPhoto\"]],\"location\"]]],false],[0,\"\\n          \"],[1,[33,[\"click-to-show\"],null,[[\"model\",\"photo\",\"attribute\"],[[28,[\"model\"]],[28,[\"currentPhoto\"]],\"photographer\"]]],false],[0,\"\\n          \"],[1,[33,[\"click-to-show\"],null,[[\"model\",\"photo\",\"attribute\"],[[28,[\"model\"]],[28,[\"currentPhoto\"]],\"year\"]]],false],[0,\"\\n          \"],[1,[33,[\"click-to-show\"],null,[[\"model\",\"photo\",\"attribute\"],[[28,[\"model\"]],[28,[\"currentPhoto\"]],\"nypl\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/archive.hbs" } });
});
define("archive-of-unnamed-women/templates/components/archive-photo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ozu9t7qq", "block": "{\"statements\":[[11,\"button\",[]],[15,\"class\",\"archive-photo-button\"],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"imageClicked\"],null],null],[13],[0,\"\\n   \"],[1,[33,[\"lazy-image\"],null,[[\"url\",\"class\"],[[33,[\"concat\"],[\"images/\",[28,[\"photo\",\"nypl\"]],\".jpeg\"],null],\"grid-image\"]]],false],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/archive-photo.hbs" } });
});
define("archive-of-unnamed-women/templates/components/click-to-show", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pvBOkgJ6", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"click-to-show\"],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"clicked\"],null],null],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"label\"],[13],[0,\"\\n    \"],[11,\"h4\",[]],[15,\"class\",\"info-header\"],[13],[1,[26,[\"attribute\"]],false],[0,\" \"],[14],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"info-data\"],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"get\"],[[28,[\"photo\"]],[28,[\"attribute\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"get\"],[[28,[\"photo\"]],[28,[\"attribute\"]]],null],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        None\\n\"]],\"locals\":[]}],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/click-to-show.hbs" } });
});
define("archive-of-unnamed-women/templates/components/lazy-background-image", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b7NmOc/7", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[6,[\"if\"],[[28,[\"errorThrown\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-error-message\"],[13],[1,[26,[\"defaultErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-placeholder\"],[13],[18,\"default\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"errorThrown\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-error-message\"],[13],[1,[26,[\"defaultErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-placeholder\"],[13],[0,\"\\n      \"],[11,\"svg\",[]],[15,\"version\",\"1.1\"],[15,\"id\",\"loader-1\"],[15,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[15,\"x\",\"0px\"],[15,\"y\",\"0px\"],[15,\"width\",\"40px\"],[15,\"height\",\"40px\"],[15,\"viewBox\",\"0 0 40 40\"],[15,\"enable-background\",\"new 0 0 40 40\"],[15,\"xml:space\",\"preserve\",\"http://www.w3.org/XML/1998/namespace\"],[13],[0,\"\\n      \"],[11,\"path\",[]],[15,\"opacity\",\"0.2\"],[15,\"fill\",\"#000\"],[15,\"d\",\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"],[13],[14],[0,\"\\n      \"],[11,\"path\",[]],[15,\"fill\",\"#000\"],[15,\"d\",\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\\n        C22.32,8.481,24.301,9.057,26.013,10.047z\"],[13],[0,\"\\n        \"],[11,\"animateTransform\",[]],[15,\"attributeType\",\"xml\"],[15,\"attributeName\",\"transform\"],[15,\"type\",\"rotate\"],[15,\"from\",\"0 20 20\"],[15,\"to\",\"360 20 20\"],[15,\"dur\",\"0.5s\"],[15,\"repeatCount\",\"indefinite\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]}],[0,\"\\n\"],[11,\"img\",[]],[15,\"style\",\"display: none\"],[16,\"src\",[26,[\"lazyUrl\"]],null],[13],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/lazy-background-image.hbs" } });
});
define("archive-of-unnamed-women/templates/components/lazy-image", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w7Or57nt", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[6,[\"if\"],[[28,[\"errorThrown\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-error-message\"],[13],[1,[26,[\"defaultErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-placeholder\"],[13],[18,\"default\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"errorThrown\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-error-message\"],[13],[1,[26,[\"defaultErrorText\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"lazy-image-placeholder\"],[13],[0,\"\\n      \"],[11,\"svg\",[]],[15,\"version\",\"1.1\"],[15,\"id\",\"loader-1\"],[15,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[15,\"x\",\"0px\"],[15,\"y\",\"0px\"],[15,\"width\",\"40px\"],[15,\"height\",\"40px\"],[15,\"viewBox\",\"0 0 40 40\"],[15,\"enable-background\",\"new 0 0 40 40\"],[15,\"xml:space\",\"preserve\",\"http://www.w3.org/XML/1998/namespace\"],[13],[0,\"\\n      \"],[11,\"path\",[]],[15,\"opacity\",\"0.2\"],[15,\"fill\",\"#000\"],[15,\"d\",\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"],[13],[14],[0,\"\\n      \"],[11,\"path\",[]],[15,\"fill\",\"#000\"],[15,\"d\",\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\\n        C22.32,8.481,24.301,9.057,26.013,10.047z\"],[13],[0,\"\\n        \"],[11,\"animateTransform\",[]],[15,\"attributeType\",\"xml\"],[15,\"attributeName\",\"transform\"],[15,\"type\",\"rotate\"],[15,\"from\",\"0 20 20\"],[15,\"to\",\"360 20 20\"],[15,\"dur\",\"0.5s\"],[15,\"repeatCount\",\"indefinite\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]}],[0,\"\\n\"],[6,[\"if\"],[[28,[\"useDimensionsAttrs\"]]],null,{\"statements\":[[0,\"  \"],[11,\"img\",[]],[16,\"class\",[34,[[33,[\"unbound\"],[[28,[\"class\"]]],null]]]],[16,\"src\",[26,[\"lazyUrl\"]],null],[16,\"alt\",[34,[[33,[\"unbound\"],[[28,[\"alt\"]]],null]]]],[16,\"height\",[26,[\"height\"]],null],[16,\"width\",[26,[\"width\"]],null],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[11,\"img\",[]],[16,\"class\",[34,[[33,[\"unbound\"],[[28,[\"class\"]]],null]]]],[16,\"src\",[26,[\"lazyUrl\"]],null],[16,\"alt\",[34,[[33,[\"unbound\"],[[28,[\"alt\"]]],null]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/lazy-image.hbs" } });
});
define("archive-of-unnamed-women/templates/components/nav-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X8ZsnV1T", "block": "{\"statements\":[[11,\"nav\",[]],[15,\"class\",\"nav\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"title\"],[13],[11,\"h1\",[]],[13],[0,\"An Archive of \"],[11,\"span\",[]],[15,\"id\",\"unknown\"],[13],[0,\"Unnamed\"],[14],[0,\" Women\"],[14],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"links\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"nav-links\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"index\"],null,{\"statements\":[[0,\"Home\"]],\"locals\":[]},null],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"archive\"],null,{\"statements\":[[0,\"All Collections\"]],\"locals\":[]},null],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/nav-bar.hbs" } });
});
define("archive-of-unnamed-women/templates/components/site-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zKknD74d", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"footer full-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col\"],[13],[11,\"h4\",[]],[13],[11,\"a\",[]],[15,\"href\",\"https://goo.gl/forms/Zq4KW83YwhcDCzrM2\"],[13],[0,\"Suggest a Quote or Photo\"],[14],[14],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col\"],[13],[11,\"h4\",[]],[13],[11,\"a\",[]],[15,\"href\",\"https://goo.gl/forms/kWLt0OecAdd4cZ1H2\"],[13],[0,\"Identify an Unnamed Woman\"],[14],[14],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col\"],[13],[11,\"h4\",[]],[13],[6,[\"link-to\"],[\"credits\"],null,{\"statements\":[[0,\"Project Credits\"]],\"locals\":[]},null],[14],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col\"],[13],[11,\"h4\",[]],[13],[11,\"a\",[]],[15,\"href\",\"http://visiblewomen.net\"],[13],[0,\"Visible Women\"],[14],[14],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/components/site-footer.hbs" } });
});
define("archive-of-unnamed-women/templates/credits", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gjnKzg8d", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"full-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container credits\"],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"xtine burrough and Sabrina Starnaman have led this project as one of their Visible Women creative/scholarly activities.\\n    Starnaman is a literary studies scholar and burrough is a socially-engaged new media artist. Together they create\\n    projects that explore how the past and the future collide in narratives of (in)visible bodies.\"],[14],[0,\"\\n    \\n    \"],[11,\"p\",[]],[13],[0,\"Alyssa Yates analyzed more than 100,000 images in the New York Public Library’s collection to hand-curate the dataset\\n    of images in our archive. With Starnaman and Beavers, Yates developed the collection of literary quotes that appear in\\n    this project. Alyssa Yates led the making of our hybrid quilt, and developed its stand and technology pockets.\"],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[0,\"Al Madireddy is a full stack web developer who made this digital archive come to life.\"],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[0,\"London Beavers is a critical media studies student at UT Dallas. Beavers also contributed to the dataset of literary\\n    quotes\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"site-footer\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/credits.hbs" } });
});
define("archive-of-unnamed-women/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g4w5NiSD", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"full-container index-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"collections\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"collection-item rural\"],[13],[0,\"\\n      \"],[11,\"h3\",[]],[13],[0,\"Rural Collection\"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"collection-item interior\"],[13],[0,\"\\n      \"],[11,\"h3\",[]],[13],[0,\"Interior Collection\"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"collection-item candid\"],[13],[0,\"\\n      \"],[11,\"h3\",[]],[13],[0,\"Candid Collection\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"index-body\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"main-logo\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"src\",\"images/logoform.png\"],[15,\"alt\",\"unnamed-women-logo\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"archive-info\"],[13],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"An Archive of Unnamed Women is a browser-based digital archive juxtaposing nineteenth-century literature about women to\\n      photographs of unnamed or unidentified American women found in the collections of the New York Public Library,\\n      including the Schomburg Center for Research in Black Culture. We continue to build a re-presented archive as a\\n      speculative feminist humanities project. In lieu of citation information, visitors who search our archive of unnamed\\n      women are presented with misinformation in the guise of description. These descriptions are drawn from a parallel\\n      collection of women’s writing about women. Joined in the database, the resulting imagined narratives relocate the women\\n      on the screen as subjects of literary examination.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Blurring the lines between art and archive, this project furthers discourse about the digital archive as an authority\\n      of knowledge curation. Visitors exploring the database encounter visible perimeters; it becomes clear that some\\n      information is erroneous or irrelevant. This reveals the arbitrary nature of information preservation and highlights\\n      the constructed nature of digitized materials. We are exploring the stakes in preparing an archive while making a space\\n      for self-generated narrative, all the while asking: What would it mean to move these unnamed women from anonymity, deep\\n      within the archive, to the center of the screen?\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[1,[26,[\"site-footer\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "archive-of-unnamed-women/templates/index.hbs" } });
});
define('archive-of-unnamed-women/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.hasClass('liquid-dialog-container'), this.use('fade', { duration: 500 }));
  };
});
define('archive-of-unnamed-women/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define('archive-of-unnamed-women/transitions/wormhole', ['exports', 'liquid-wormhole/transitions/wormhole'], function (exports, _wormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wormhole.default;
    }
  });
});


define('archive-of-unnamed-women/config/environment', ['ember'], function(Ember) {
  var prefix = 'archive-of-unnamed-women';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("archive-of-unnamed-women/app")["default"].create({"name":"archive-of-unnamed-women","version":"0.0.0+25c06136"});
}
//# sourceMappingURL=archive-of-unnamed-women.map
