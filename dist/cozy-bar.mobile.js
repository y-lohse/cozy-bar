(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bar", [], factory);
	else if(typeof exports === 'object')
		exports["bar"] = factory();
	else
		root["cozy"] = root["cozy"] || {}, root["cozy"]["bar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global __TARGET__, __VERSION__ */
	
	'use strict';
	
	var _i18n = __webpack_require__(1);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _stack = __webpack_require__(64);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _Bar = __webpack_require__(253);
	
	var _Bar2 = _interopRequireDefault(_Bar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createElement = function CozyBarCreateElement() {
	  var barNode = document.createElement('div');
	  barNode.setAttribute('id', 'coz-bar');
	  barNode.setAttribute('role', 'banner');
	  barNode.classList.add('coz-target--' + ("mobile"));
	
	  return barNode;
	};
	
	var injectDOM = function CozyBarInjectDOM(data) {
	  if (document.getElementById('coz-bar') !== null) {
	    return;
	  }
	
	  __webpack_require__(262);
	
	  var selector = '[role=application]';
	  var barNode = createElement();
	  var appNode = document.querySelector(selector);
	  if (!appNode) {
	    return console.warn('Cozy-bar is looking for a "' + selector + '" tag that contains your application and can\'t find it :\'(\u2026 The BAR is now disabled');
	  }
	
	  document.body.insertBefore(barNode, appNode);
	
	  return new _Bar2.default({
	    target: barNode,
	    data: data
	  });
	};
	
	var bindEvents = function CozyBarBindEvents() {
	  var _this = this;
	
	  this._clickOutsideListener = function () {
	    return _this.fire('clickOutside');
	  };
	  document.body.addEventListener('click', this._clickOutsideListener);
	};
	
	var unbindEvents = function CozyBarUnbindEvents() {
	  document.body.removeEventListener('click', this._clickOutsideListener);
	};
	
	var getDefaultStackURL = function GetDefaultCozyURL() {
	  return document.querySelector('[role=application]').dataset.cozyDomain;
	};
	
	var getDefaultLang = function GetDefaultLang() {
	  return document.documentElement.getAttribute('lang') || 'en';
	};
	
	var getDefaultIcon = function GetDefaultIcon() {
	  var linkNode = document.querySelector('link[rel="icon"][sizes^="32"]');
	  if (linkNode !== null) {
	    return linkNode.getAttribute('href');
	  } else {
	    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	  }
	};
	
	var init = function CozyBarInit() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$lang = _ref.lang,
	      lang = _ref$lang === undefined ? getDefaultLang() : _ref$lang,
	      appName = _ref.appName,
	      _ref$iconPath = _ref.iconPath,
	      iconPath = _ref$iconPath === undefined ? getDefaultIcon() : _ref$iconPath,
	      _ref$cozyURL = _ref.cozyURL,
	      cozyURL = _ref$cozyURL === undefined ? getDefaultStackURL() : _ref$cozyURL;
	
	  (0, _i18n2.default)(lang);
	  _stack2.default.init({ cozyURL: cozyURL });
	  var view = injectDOM({ lang: lang, appName: appName, iconPath: iconPath });
	
	  if (view) {
	    bindEvents.call(view);
	    view.on('teardown', unbindEvents.bind(view));
	  }
	};
	
	module.exports = { init: init, version: ("3.0.0-beta7") };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locale = exports.t = undefined;
	
	var _nodePolyglot = __webpack_require__(2);
	
	var _nodePolyglot2 = _interopRequireDefault(_nodePolyglot);
	
	var _en = __webpack_require__(26);
	
	var _en2 = _interopRequireDefault(_en);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var polyglot = new _nodePolyglot2.default({
	  phrases: _en2.default,
	  locale: 'en'
	});
	
	var init = function I18nInit(lang) {
	  if (lang && lang !== 'en') {
	    try {
	      var dict = __webpack_require__(27)("./" + lang);
	      polyglot.extend(dict);
	      polyglot.locale(lang);
	    } catch (e) {
	      console.warn('The dict phrases for "' + lang + '" can\'t be loaded');
	    }
	  }
	};
	
	var t = polyglot.t.bind(polyglot);
	var locale = polyglot.locale.bind(polyglot);
	
	exports.default = init;
	exports.t = t;
	exports.locale = locale;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	//     (c) 2012-2016 Airbnb, Inc.
	//
	//     polyglot.js may be freely distributed under the terms of the BSD
	//     license. For all licensing information, details, and documention:
	//     http://airbnb.github.com/polyglot.js
	//
	//
	// Polyglot.js is an I18n helper library written in JavaScript, made to
	// work both in the browser and in Node. It provides a simple solution for
	// interpolation and pluralization, based off of Airbnb's
	// experience adding I18n functionality to its Backbone.js and Node apps.
	//
	// Polylglot is agnostic to your translation backend. It doesn't perform any
	// translation; it simply gives you a way to manage translated phrases from
	// your client- or server-side JavaScript application.
	//
	
	'use strict';
	
	var forEach = __webpack_require__(3);
	var warning = __webpack_require__(5);
	var has = __webpack_require__(7);
	var trim = __webpack_require__(10);
	
	var warn = function warn(message) {
	  warning(false, message);
	};
	
	var replace = String.prototype.replace;
	var split = String.prototype.split;
	
	// #### Pluralization methods
	// The string that separates the different phrase possibilities.
	var delimeter = '||||';
	
	// Mapping from pluralization group plural logic.
	var pluralTypes = {
	  arabic: function (n) {
	    // http://www.arabeyes.org/Plural_Forms
	    if (n < 3) { return n; }
	    if (n % 100 >= 3 && n % 100 <= 10) return 3;
	    return n % 100 >= 11 ? 4 : 5;
	  },
	  chinese: function () { return 0; },
	  german: function (n) { return n !== 1 ? 1 : 0; },
	  french: function (n) { return n > 1 ? 1 : 0; },
	  russian: function (n) {
	    if (n % 10 === 1 && n % 100 !== 11) { return 0; }
	    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
	  },
	  czech: function (n) {
	    if (n === 1) { return 0; }
	    return (n >= 2 && n <= 4) ? 1 : 2;
	  },
	  polish: function (n) {
	    if (n === 1) { return 0; }
	    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
	  },
	  icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; }
	};
	
	// Mapping from pluralization group to individual locales.
	var pluralTypeToLanguages = {
	  arabic: ['ar'],
	  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
	  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
	  french: ['fr', 'tl', 'pt-br'],
	  russian: ['hr', 'ru', 'lt'],
	  czech: ['cs', 'sk'],
	  polish: ['pl'],
	  icelandic: ['is']
	};
	
	function langToTypeMap(mapping) {
	  var ret = {};
	  forEach(mapping, function (langs, type) {
	    forEach(langs, function (lang) {
	      ret[lang] = type;
	    });
	  });
	  return ret;
	}
	
	function pluralTypeName(locale) {
	  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
	  return langToPluralType[locale]
	    || langToPluralType[split.call(locale, /-/, 1)[0]]
	    || langToPluralType.en;
	}
	
	function pluralTypeIndex(locale, count) {
	  return pluralTypes[pluralTypeName(locale)](count);
	}
	
	var dollarRegex = /\$/g;
	var dollarBillsYall = '$$';
	var tokenRegex = /%\{(.*?)\}/g;
	
	// ### transformPhrase(phrase, substitutions, locale)
	//
	// Takes a phrase string and transforms it by choosing the correct
	// plural form and interpolating it.
	//
	//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
	//     // "Hello, Spike!"
	//
	// The correct plural form is selected if substitutions.smart_count
	// is set. You can pass in a number instead of an Object as `substitutions`
	// as a shortcut for `smart_count`.
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
	//     // "1 new message"
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
	//     // "2 new messages"
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
	//     // "5 new messages"
	//
	// You should pass in a third argument, the locale, to specify the correct plural type.
	// It defaults to `'en'` with 2 plural forms.
	function transformPhrase(phrase, substitutions, locale) {
	  if (typeof phrase !== 'string') {
	    throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
	  }
	
	  if (substitutions == null) {
	    return phrase;
	  }
	
	  var result = phrase;
	
	  // allow number as a pluralization shortcut
	  var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;
	
	  // Select plural form: based on a phrase text that contains `n`
	  // plural forms separated by `delimeter`, a `locale`, and a `substitutions.smart_count`,
	  // choose the correct plural form. This is only done if `count` is set.
	  if (options.smart_count != null && result) {
	    var texts = split.call(result, delimeter);
	    result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
	  }
	
	  // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
	  result = replace.call(result, tokenRegex, function (expression, argument) {
	    if (!has(options, argument) || options[argument] == null) { return expression; }
	    // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
	    return replace.call(options[argument], dollarRegex, dollarBillsYall);
	  });
	
	  return result;
	}
	
	// ### Polyglot class constructor
	function Polyglot(options) {
	  var opts = options || {};
	  this.phrases = {};
	  this.extend(opts.phrases || {});
	  this.currentLocale = opts.locale || 'en';
	  var allowMissing = opts.allowMissing ? transformPhrase : null;
	  this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
	  this.warn = opts.warn || warn;
	}
	
	// ### polyglot.locale([locale])
	//
	// Get or set locale. Internally, Polyglot only uses locale for pluralization.
	Polyglot.prototype.locale = function (newLocale) {
	  if (newLocale) this.currentLocale = newLocale;
	  return this.currentLocale;
	};
	
	// ### polyglot.extend(phrases)
	//
	// Use `extend` to tell Polyglot how to translate a given key.
	//
	//     polyglot.extend({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     });
	//
	// The key can be any string.  Feel free to call `extend` multiple times;
	// it will override any phrases with the same key, but leave existing phrases
	// untouched.
	//
	// It is also possible to pass nested phrase objects, which get flattened
	// into an object with the nested keys concatenated using dot notation.
	//
	//     polyglot.extend({
	//       "nav": {
	//         "hello": "Hello",
	//         "hello_name": "Hello, %{name}",
	//         "sidebar": {
	//           "welcome": "Welcome"
	//         }
	//       }
	//     });
	//
	//     console.log(polyglot.phrases);
	//     // {
	//     //   'nav.hello': 'Hello',
	//     //   'nav.hello_name': 'Hello, %{name}',
	//     //   'nav.sidebar.welcome': 'Welcome'
	//     // }
	//
	// `extend` accepts an optional second argument, `prefix`, which can be used
	// to prefix every key in the phrases object with some string, using dot
	// notation.
	//
	//     polyglot.extend({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     }, "nav");
	//
	//     console.log(polyglot.phrases);
	//     // {
	//     //   'nav.hello': 'Hello',
	//     //   'nav.hello_name': 'Hello, %{name}'
	//     // }
	//
	// This feature is used internally to support nested phrase objects.
	Polyglot.prototype.extend = function (morePhrases, prefix) {
	  forEach(morePhrases, function (phrase, key) {
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	    if (typeof phrase === 'object') {
	      this.extend(phrase, prefixedKey);
	    } else {
	      this.phrases[prefixedKey] = phrase;
	    }
	  }, this);
	};
	
	// ### polyglot.unset(phrases)
	// Use `unset` to selectively remove keys from a polyglot instance.
	//
	//     polyglot.unset("some_key");
	//     polyglot.unset({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     });
	//
	// The unset method can take either a string (for the key), or an object hash with
	// the keys that you would like to unset.
	Polyglot.prototype.unset = function (morePhrases, prefix) {
	  if (typeof morePhrases === 'string') {
	    delete this.phrases[morePhrases];
	  } else {
	    forEach(morePhrases, function (phrase, key) {
	      var prefixedKey = prefix ? prefix + '.' + key : key;
	      if (typeof phrase === 'object') {
	        this.unset(phrase, prefixedKey);
	      } else {
	        delete this.phrases[prefixedKey];
	      }
	    }, this);
	  }
	};
	
	// ### polyglot.clear()
	//
	// Clears all phrases. Useful for special cases, such as freeing
	// up memory if you have lots of phrases but no longer need to
	// perform any translation. Also used internally by `replace`.
	Polyglot.prototype.clear = function () {
	  this.phrases = {};
	};
	
	// ### polyglot.replace(phrases)
	//
	// Completely replace the existing phrases with a new set of phrases.
	// Normally, just use `extend` to add more phrases, but under certain
	// circumstances, you may want to make sure no old phrases are lying around.
	Polyglot.prototype.replace = function (newPhrases) {
	  this.clear();
	  this.extend(newPhrases);
	};
	
	
	// ### polyglot.t(key, options)
	//
	// The most-used method. Provide a key, and `t` will return the
	// phrase.
	//
	//     polyglot.t("hello");
	//     => "Hello"
	//
	// The phrase value is provided first by a call to `polyglot.extend()` or
	// `polyglot.replace()`.
	//
	// Pass in an object as the second argument to perform interpolation.
	//
	//     polyglot.t("hello_name", {name: "Spike"});
	//     => "Hello, Spike"
	//
	// If you like, you can provide a default value in case the phrase is missing.
	// Use the special option key "_" to specify a default.
	//
	//     polyglot.t("i_like_to_write_in_language", {
	//       _: "I like to write in %{language}.",
	//       language: "JavaScript"
	//     });
	//     => "I like to write in JavaScript."
	//
	Polyglot.prototype.t = function (key, options) {
	  var phrase, result;
	  var opts = options == null ? {} : options;
	  if (typeof this.phrases[key] === 'string') {
	    phrase = this.phrases[key];
	  } else if (typeof opts._ === 'string') {
	    phrase = opts._;
	  } else if (this.onMissingKey) {
	    var onMissingKey = this.onMissingKey;
	    result = onMissingKey(key, opts, this.currentLocale);
	  } else {
	    this.warn('Missing translation for key: "' + key + '"');
	    result = key;
	  }
	  if (typeof phrase === 'string') {
	    result = transformPhrase(phrase, opts, this.currentLocale);
	  }
	  return result;
	};
	
	
	// ### polyglot.has(key)
	//
	// Check if polyglot has a translation for given key
	Polyglot.prototype.has = function (key) {
	  return has(this.phrases, key);
	};
	
	// export transformPhrase
	Polyglot.transformPhrase = transformPhrase;
	
	module.exports = Polyglot;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(4)
	
	module.exports = forEach
	
	var toString = Object.prototype.toString
	var hasOwnProperty = Object.prototype.hasOwnProperty
	
	function forEach(list, iterator, context) {
	    if (!isFunction(iterator)) {
	        throw new TypeError('iterator must be a function')
	    }
	
	    if (arguments.length < 3) {
	        context = this
	    }
	    
	    if (toString.call(list) === '[object Array]')
	        forEachArray(list, iterator, context)
	    else if (typeof list === 'string')
	        forEachString(list, iterator, context)
	    else
	        forEachObject(list, iterator, context)
	}
	
	function forEachArray(array, iterator, context) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            iterator.call(context, array[i], i, array)
	        }
	    }
	}
	
	function forEachString(string, iterator, context) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        iterator.call(context, string.charAt(i), i, string)
	    }
	}
	
	function forEachObject(object, iterator, context) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            iterator.call(context, object[k], k, object)
	        }
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = isFunction
	
	var toString = Object.prototype.toString
	
	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(8);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(9);
	
	module.exports = Function.prototype.bind || implementation;


/***/ },
/* 9 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(8);
	var define = __webpack_require__(11);
	
	var implementation = __webpack_require__(15);
	var getPolyfill = __webpack_require__(24);
	var shim = __webpack_require__(25);
	
	var boundTrim = bind.call(Function.call, getPolyfill());
	
	define(boundTrim, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	
	module.exports = boundTrim;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(12);
	var foreach = __webpack_require__(14);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(13);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(8);
	var ES = __webpack_require__(16);
	var replace = bind.call(Function.call, String.prototype.replace);
	
	var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
	var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
	
	module.exports = function trim() {
		var S = ES.ToString(ES.CheckObjectCoercible(this));
		return replace(replace(S, leftWhitespace, ''), rightWhitespace, '');
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $isNaN = __webpack_require__(17);
	var $isFinite = __webpack_require__(18);
	
	var sign = __webpack_require__(19);
	var mod = __webpack_require__(20);
	
	var IsCallable = __webpack_require__(21);
	var toPrimitive = __webpack_require__(22);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},
	
		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		}
	};
	
	module.exports = ES5;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(23);
	
	var isCallable = __webpack_require__(21);
	
	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);
	
			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};
	
	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(15);
	
	var zeroWidthSpace = '\u200b';
	
	module.exports = function getPolyfill() {
		if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
			return String.prototype.trim;
		}
		return implementation;
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(11);
	var getPolyfill = __webpack_require__(24);
	
	module.exports = function shimStringTrim() {
		var polyfill = getPolyfill();
		define(String.prototype, { trim: polyfill }, { trim: function () { return String.prototype.trim !== polyfill; } });
		return polyfill;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./ar": 28,
		"./ar.json": 28,
		"./ca": 29,
		"./ca.json": 29,
		"./ca_ES": 30,
		"./ca_ES.json": 30,
		"./cs": 31,
		"./cs.json": 31,
		"./cs_CZ": 32,
		"./cs_CZ.json": 32,
		"./da": 33,
		"./da.json": 33,
		"./de": 34,
		"./de.json": 34,
		"./de_DE": 35,
		"./de_DE.json": 35,
		"./el": 36,
		"./el.json": 36,
		"./en": 26,
		"./en.json": 26,
		"./eo": 37,
		"./eo.json": 37,
		"./es": 38,
		"./es.json": 38,
		"./es_CO": 39,
		"./es_CO.json": 39,
		"./es_ES": 40,
		"./es_ES.json": 40,
		"./fr": 41,
		"./fr.json": 41,
		"./it": 42,
		"./it.json": 42,
		"./ja": 43,
		"./ja.json": 43,
		"./ko": 44,
		"./ko.json": 44,
		"./nl": 45,
		"./nl.json": 45,
		"./nl_NL": 46,
		"./nl_NL.json": 46,
		"./pl": 47,
		"./pl.json": 47,
		"./pt": 48,
		"./pt.json": 48,
		"./pt_BR": 49,
		"./pt_BR.json": 49,
		"./ro": 50,
		"./ro.json": 50,
		"./ro_RO": 51,
		"./ro_RO.json": 51,
		"./ru": 52,
		"./ru.json": 52,
		"./ru_RU": 53,
		"./ru_RU.json": 53,
		"./sk": 54,
		"./sk.json": 54,
		"./sk_SK": 55,
		"./sk_SK.json": 55,
		"./sq": 56,
		"./sq.json": 56,
		"./sq_AL": 57,
		"./sq_AL.json": 57,
		"./sv": 58,
		"./sv.json": 58,
		"./tr": 59,
		"./tr.json": 59,
		"./uk_UA": 60,
		"./uk_UA.json": 60,
		"./zh": 61,
		"./zh.json": 61,
		"./zh_CN": 62,
		"./zh_CN.json": 62,
		"./zh_TW": 63,
		"./zh_TW.json": 63
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 27;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Sus apps",
		"apps": "Apps",
		"settings": "Configuración",
		"menu": "Mostrar menú de bandejas",
		"storage": "Almacenamiento",
		"storage_phrase": "%{diskUsage} GO de %{totalStorage} GO usados",
		"help": "Ayuda",
		"email": "Enviar un email a asistencia",
		"logout": "Finalizar sesión",
		"error_UnavailableStack": "La pila es inaccesible ( se agotó el tiempo de la conexión )."
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Vos applications",
		"apps": "Applications",
		"settings": "Paramètres",
		"menu": "Afficher le menu latéral",
		"storage": "Espace disque",
		"storage_phrase": "%{diskUsage} GB sur %{totalStorage} GB",
		"help": "Aide",
		"email": "Envoyer un email au support",
		"logout": "Déconnexion",
		"error_UnavailableStack": "Connexion à la stack impossible (interrompue après délai)"
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "あなたのアプリ",
		"apps": "アプリ",
		"settings": "設定",
		"menu": "メニュードロワーを表示",
		"storage": "ストレージ",
		"storage_phrase": "%{diskUsage} GB / %{totalStorage} GB 使用",
		"help": "ヘルプ",
		"email": "サポートにメールを送信",
		"logout": "サインアウト",
		"error_UnavailableStack": "スタックに到達できません (接続タイムアウト)。"
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Jouw toepassingen",
		"apps": "Toepassingen",
		"settings": "Instellingen",
		"menu": "Toon menu",
		"storage": "Opslag",
		"storage_phrase": "%{diskUsage} GB van %{totalStorage} GB gebruikt",
		"help": "Hulp",
		"email": "Stuur de helpdesk een e-mail",
		"logout": "Log uit",
		"error_UnavailableStack": "De stapel is onbereikbaar (verbinding verlopen)"
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "你的应用",
		"apps": "应用",
		"settings": "设置",
		"menu": "显示菜单抽屉",
		"storage": "储存",
		"storage_phrase": "使用了 %{diskUsage} GB / %{totalStorage} GB",
		"help": "帮助",
		"email": "发送邮件到客服",
		"logout": "登出",
		"error_UnavailableStack": "此堆栈无法连接 (连接超时)"
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = {
		"drawer apps": "Your apps",
		"apps": "Apps",
		"settings": "Settings",
		"menu": "Show menu drawer",
		"storage": "Storage",
		"storage_phrase": "%{diskUsage} GB of %{totalStorage} GB used",
		"help": "Help",
		"email": "Send an email to support",
		"logout": "Sign out",
		"error_UnavailableStack": "The stack is unreachable (connection timed-out)."
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(65);
	
	__webpack_require__(106);
	
	__webpack_require__(133);
	
	__webpack_require__(134);
	
	__webpack_require__(135);
	
	__webpack_require__(136);
	
	__webpack_require__(137);
	
	__webpack_require__(138);
	
	__webpack_require__(139);
	
	__webpack_require__(140);
	
	__webpack_require__(141);
	
	__webpack_require__(149);
	
	__webpack_require__(150);
	
	__webpack_require__(154);
	
	__webpack_require__(155);
	
	__webpack_require__(156);
	
	__webpack_require__(159);
	
	__webpack_require__(160);
	
	__webpack_require__(161);
	
	__webpack_require__(162);
	
	__webpack_require__(163);
	
	__webpack_require__(164);
	
	__webpack_require__(165);
	
	__webpack_require__(166);
	
	__webpack_require__(168);
	
	__webpack_require__(169);
	
	__webpack_require__(170);
	
	__webpack_require__(171);
	
	__webpack_require__(174);
	
	__webpack_require__(180);
	
	__webpack_require__(181);
	
	__webpack_require__(182);
	
	__webpack_require__(183);
	
	__webpack_require__(184);
	
	__webpack_require__(185);
	
	__webpack_require__(186);
	
	__webpack_require__(188);
	
	__webpack_require__(190);
	
	__webpack_require__(194);
	
	__webpack_require__(195);
	
	__webpack_require__(196);
	
	__webpack_require__(198);
	
	__webpack_require__(200);
	
	__webpack_require__(201);
	
	__webpack_require__(202);
	
	__webpack_require__(203);
	
	__webpack_require__(205);
	
	__webpack_require__(206);
	
	__webpack_require__(207);
	
	__webpack_require__(208);
	
	__webpack_require__(209);
	
	__webpack_require__(123);
	
	__webpack_require__(210);
	
	__webpack_require__(211);
	
	__webpack_require__(213);
	
	__webpack_require__(214);
	
	__webpack_require__(215);
	
	__webpack_require__(216);
	
	__webpack_require__(217);
	
	__webpack_require__(218);
	
	__webpack_require__(220);
	
	__webpack_require__(221);
	
	__webpack_require__(222);
	
	__webpack_require__(224);
	
	__webpack_require__(225);
	
	__webpack_require__(226);
	
	__webpack_require__(228);
	
	__webpack_require__(229);
	
	__webpack_require__(230);
	
	__webpack_require__(231);
	
	__webpack_require__(232);
	
	__webpack_require__(233);
	
	__webpack_require__(234);
	
	__webpack_require__(235);
	
	__webpack_require__(236);
	
	__webpack_require__(237);
	
	__webpack_require__(238);
	
	__webpack_require__(239);
	
	__webpack_require__(241);
	
	__webpack_require__(242);
	
	__webpack_require__(243);
	
	__webpack_require__(245);
	
	__webpack_require__(246);
	
	__webpack_require__(249);
	
	__webpack_require__(250);
	
	__webpack_require__(251);
	
	var _exceptions = __webpack_require__(252);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-env browser */
	/* global __SERVER__ */
	
	// the option credentials:include tells fetch to include the cookies in the
	// request even for cross-origin requests
	var fetchOptions = {
	  credentials: 'include'
	};
	
	var COZY_URL = ("http://cozy.local:8080");
	
	module.exports = {
	  init: function init(_ref) {
	    var cozyURL = _ref.cozyURL;
	
	    COZY_URL = '//' + cozyURL;
	  },
	
	  get: {
	    cozyURL: function cozyURL() {
	      return COZY_URL;
	    },
	    apps: function () {
	      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var response, data;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return fetch(COZY_URL + '/apps/', fetchOptions);
	
	              case 3:
	                response = _context.sent;
	                _context.next = 6;
	                return response.json();
	
	              case 6:
	                data = _context.sent;
	                return _context.abrupt('return', data.data);
	
	              case 10:
	                _context.prev = 10;
	                _context.t0 = _context['catch'](0);
	                throw new _exceptions.UnavailableStackException();
	
	              case 13:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 10]]);
	      }));
	
	      function apps() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return apps;
	    }(),
	    diskUsage: function () {
	      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	        var response, data;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.prev = 0;
	                _context2.next = 3;
	                return fetch(COZY_URL + '/settings/disk-usage', fetchOptions);
	
	              case 3:
	                response = _context2.sent;
	                _context2.next = 6;
	                return response.json();
	
	              case 6:
	                data = _context2.sent;
	                return _context2.abrupt('return', data.data);
	
	              case 10:
	                _context2.prev = 10;
	                _context2.t0 = _context2['catch'](0);
	                throw new _exceptions.UnavailableStackException();
	
	              case 13:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[0, 10]]);
	      }));
	
	      function diskUsage() {
	        return _ref3.apply(this, arguments);
	      }
	
	      return diskUsage;
	    }()
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(66);
	$export($export.G + $export.W + $export.F * !__webpack_require__(84).ABV, {
	  DataView: __webpack_require__(85).DataView
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(67)
	  , core      = __webpack_require__(68)
	  , hide      = __webpack_require__(69)
	  , redefine  = __webpack_require__(79)
	  , ctx       = __webpack_require__(82)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 67 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 68 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(70)
	  , createDesc = __webpack_require__(78);
	module.exports = __webpack_require__(74) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(71)
	  , IE8_DOM_DEFINE = __webpack_require__(73)
	  , toPrimitive    = __webpack_require__(77)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(74) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(72);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(74) && !__webpack_require__(75)(function(){
	  return Object.defineProperty(__webpack_require__(76)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(75)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(72)
	  , document = __webpack_require__(67).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(72);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(67)
	  , hide      = __webpack_require__(69)
	  , has       = __webpack_require__(80)
	  , SRC       = __webpack_require__(81)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(68).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 80 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(83);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(67)
	  , hide   = __webpack_require__(69)
	  , uid    = __webpack_require__(81)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(67)
	  , DESCRIPTORS    = __webpack_require__(74)
	  , LIBRARY        = __webpack_require__(86)
	  , $typed         = __webpack_require__(84)
	  , hide           = __webpack_require__(69)
	  , redefineAll    = __webpack_require__(87)
	  , fails          = __webpack_require__(75)
	  , anInstance     = __webpack_require__(88)
	  , toInteger      = __webpack_require__(89)
	  , toLength       = __webpack_require__(90)
	  , gOPN           = __webpack_require__(91).f
	  , dP             = __webpack_require__(70).f
	  , arrayFill      = __webpack_require__(102)
	  , setToStringTag = __webpack_require__(104)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(79);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(89)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(92)
	  , hiddenKeys = __webpack_require__(101).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(80)
	  , toIObject    = __webpack_require__(93)
	  , arrayIndexOf = __webpack_require__(97)(false)
	  , IE_PROTO     = __webpack_require__(99)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(94)
	  , defined = __webpack_require__(96);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(95);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(93)
	  , toLength  = __webpack_require__(90)
	  , toIndex   = __webpack_require__(98);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(89)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(100)('keys')
	  , uid    = __webpack_require__(81);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(67)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(103)
	  , toIndex  = __webpack_require__(98)
	  , toLength = __webpack_require__(90);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(96);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(70).f
	  , has = __webpack_require__(80)
	  , TAG = __webpack_require__(105)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(100)('wks')
	  , uid        = __webpack_require__(81)
	  , Symbol     = __webpack_require__(67).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(74)){
	  var LIBRARY             = __webpack_require__(86)
	    , global              = __webpack_require__(67)
	    , fails               = __webpack_require__(75)
	    , $export             = __webpack_require__(66)
	    , $typed              = __webpack_require__(84)
	    , $buffer             = __webpack_require__(85)
	    , ctx                 = __webpack_require__(82)
	    , anInstance          = __webpack_require__(88)
	    , propertyDesc        = __webpack_require__(78)
	    , hide                = __webpack_require__(69)
	    , redefineAll         = __webpack_require__(87)
	    , toInteger           = __webpack_require__(89)
	    , toLength            = __webpack_require__(90)
	    , toIndex             = __webpack_require__(98)
	    , toPrimitive         = __webpack_require__(77)
	    , has                 = __webpack_require__(80)
	    , same                = __webpack_require__(108)
	    , classof             = __webpack_require__(109)
	    , isObject            = __webpack_require__(72)
	    , toObject            = __webpack_require__(103)
	    , isArrayIter         = __webpack_require__(110)
	    , create              = __webpack_require__(112)
	    , getPrototypeOf      = __webpack_require__(116)
	    , gOPN                = __webpack_require__(91).f
	    , getIterFn           = __webpack_require__(117)
	    , uid                 = __webpack_require__(81)
	    , wks                 = __webpack_require__(105)
	    , createArrayMethod   = __webpack_require__(118)
	    , createArrayIncludes = __webpack_require__(97)
	    , speciesConstructor  = __webpack_require__(122)
	    , ArrayIterators      = __webpack_require__(123)
	    , Iterators           = __webpack_require__(111)
	    , $iterDetect         = __webpack_require__(128)
	    , setSpecies          = __webpack_require__(129)
	    , arrayFill           = __webpack_require__(102)
	    , arrayCopyWithin     = __webpack_require__(130)
	    , $DP                 = __webpack_require__(70)
	    , $GOPD               = __webpack_require__(131)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(95)
	  , TAG = __webpack_require__(105)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(111)
	  , ITERATOR   = __webpack_require__(105)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(71)
	  , dPs         = __webpack_require__(113)
	  , enumBugKeys = __webpack_require__(101)
	  , IE_PROTO    = __webpack_require__(99)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(76)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(115).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(70)
	  , anObject = __webpack_require__(71)
	  , getKeys  = __webpack_require__(114);
	
	module.exports = __webpack_require__(74) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(92)
	  , enumBugKeys = __webpack_require__(101);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67).document && document.documentElement;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(80)
	  , toObject    = __webpack_require__(103)
	  , IE_PROTO    = __webpack_require__(99)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(109)
	  , ITERATOR  = __webpack_require__(105)('iterator')
	  , Iterators = __webpack_require__(111);
	module.exports = __webpack_require__(68).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(82)
	  , IObject  = __webpack_require__(94)
	  , toObject = __webpack_require__(103)
	  , toLength = __webpack_require__(90)
	  , asc      = __webpack_require__(119);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(120);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(72)
	  , isArray  = __webpack_require__(121)
	  , SPECIES  = __webpack_require__(105)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(95);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(71)
	  , aFunction = __webpack_require__(83)
	  , SPECIES   = __webpack_require__(105)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(124)
	  , step             = __webpack_require__(125)
	  , Iterators        = __webpack_require__(111)
	  , toIObject        = __webpack_require__(93);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(126)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(105)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(69)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(86)
	  , $export        = __webpack_require__(66)
	  , redefine       = __webpack_require__(79)
	  , hide           = __webpack_require__(69)
	  , has            = __webpack_require__(80)
	  , Iterators      = __webpack_require__(111)
	  , $iterCreate    = __webpack_require__(127)
	  , setToStringTag = __webpack_require__(104)
	  , getPrototypeOf = __webpack_require__(116)
	  , ITERATOR       = __webpack_require__(105)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(112)
	  , descriptor     = __webpack_require__(78)
	  , setToStringTag = __webpack_require__(104)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(69)(IteratorPrototype, __webpack_require__(105)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(105)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(67)
	  , dP          = __webpack_require__(70)
	  , DESCRIPTORS = __webpack_require__(74)
	  , SPECIES     = __webpack_require__(105)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(103)
	  , toIndex  = __webpack_require__(98)
	  , toLength = __webpack_require__(90);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(132)
	  , createDesc     = __webpack_require__(78)
	  , toIObject      = __webpack_require__(93)
	  , toPrimitive    = __webpack_require__(77)
	  , has            = __webpack_require__(80)
	  , IE8_DOM_DEFINE = __webpack_require__(73)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(74) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(142);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(146)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(70).f
	  , create      = __webpack_require__(112)
	  , redefineAll = __webpack_require__(87)
	  , ctx         = __webpack_require__(82)
	  , anInstance  = __webpack_require__(88)
	  , defined     = __webpack_require__(96)
	  , forOf       = __webpack_require__(143)
	  , $iterDefine = __webpack_require__(126)
	  , step        = __webpack_require__(125)
	  , setSpecies  = __webpack_require__(129)
	  , DESCRIPTORS = __webpack_require__(74)
	  , fastKey     = __webpack_require__(145).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(82)
	  , call        = __webpack_require__(144)
	  , isArrayIter = __webpack_require__(110)
	  , anObject    = __webpack_require__(71)
	  , toLength    = __webpack_require__(90)
	  , getIterFn   = __webpack_require__(117)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(71);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(81)('meta')
	  , isObject = __webpack_require__(72)
	  , has      = __webpack_require__(80)
	  , setDesc  = __webpack_require__(70).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(75)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(67)
	  , $export           = __webpack_require__(66)
	  , redefine          = __webpack_require__(79)
	  , redefineAll       = __webpack_require__(87)
	  , meta              = __webpack_require__(145)
	  , forOf             = __webpack_require__(143)
	  , anInstance        = __webpack_require__(88)
	  , isObject          = __webpack_require__(72)
	  , fails             = __webpack_require__(75)
	  , $iterDetect       = __webpack_require__(128)
	  , setToStringTag    = __webpack_require__(104)
	  , inheritIfRequired = __webpack_require__(147);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(72)
	  , setPrototypeOf = __webpack_require__(148).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(72)
	  , anObject = __webpack_require__(71);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(82)(Function.call, __webpack_require__(131).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(142);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(146)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(118)(0)
	  , redefine     = __webpack_require__(79)
	  , meta         = __webpack_require__(145)
	  , assign       = __webpack_require__(151)
	  , weak         = __webpack_require__(153)
	  , isObject     = __webpack_require__(72)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(146)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(114)
	  , gOPS     = __webpack_require__(152)
	  , pIE      = __webpack_require__(132)
	  , toObject = __webpack_require__(103)
	  , IObject  = __webpack_require__(94)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(75)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 152 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(87)
	  , getWeak           = __webpack_require__(145).getWeak
	  , anObject          = __webpack_require__(71)
	  , isObject          = __webpack_require__(72)
	  , anInstance        = __webpack_require__(88)
	  , forOf             = __webpack_require__(143)
	  , createArrayMethod = __webpack_require__(118)
	  , $has              = __webpack_require__(80)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(153);
	
	// 23.4 WeakSet Objects
	__webpack_require__(146)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(66)
	  , aFunction = __webpack_require__(83)
	  , anObject  = __webpack_require__(71)
	  , rApply    = (__webpack_require__(67).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(75)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(66)
	  , create     = __webpack_require__(112)
	  , aFunction  = __webpack_require__(83)
	  , anObject   = __webpack_require__(71)
	  , isObject   = __webpack_require__(72)
	  , fails      = __webpack_require__(75)
	  , bind       = __webpack_require__(157)
	  , rConstruct = (__webpack_require__(67).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(83)
	  , isObject   = __webpack_require__(72)
	  , invoke     = __webpack_require__(158)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(70)
	  , $export     = __webpack_require__(66)
	  , anObject    = __webpack_require__(71)
	  , toPrimitive = __webpack_require__(77);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(75)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(66)
	  , gOPD     = __webpack_require__(131).f
	  , anObject = __webpack_require__(71);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(131)
	  , getPrototypeOf = __webpack_require__(116)
	  , has            = __webpack_require__(80)
	  , $export        = __webpack_require__(66)
	  , isObject       = __webpack_require__(72)
	  , anObject       = __webpack_require__(71);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(131)
	  , $export  = __webpack_require__(66)
	  , anObject = __webpack_require__(71);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(66)
	  , getProto = __webpack_require__(116)
	  , anObject = __webpack_require__(71);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(66)
	  , anObject      = __webpack_require__(71)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(167)});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(91)
	  , gOPS     = __webpack_require__(152)
	  , anObject = __webpack_require__(71)
	  , Reflect  = __webpack_require__(67).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(66)
	  , anObject           = __webpack_require__(71)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(70)
	  , gOPD           = __webpack_require__(131)
	  , getPrototypeOf = __webpack_require__(116)
	  , has            = __webpack_require__(80)
	  , $export        = __webpack_require__(66)
	  , createDesc     = __webpack_require__(78)
	  , anObject       = __webpack_require__(71)
	  , isObject       = __webpack_require__(72);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(66)
	  , setProto = __webpack_require__(148);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(86)
	  , global             = __webpack_require__(67)
	  , ctx                = __webpack_require__(82)
	  , classof            = __webpack_require__(109)
	  , $export            = __webpack_require__(66)
	  , isObject           = __webpack_require__(72)
	  , aFunction          = __webpack_require__(83)
	  , anInstance         = __webpack_require__(88)
	  , forOf              = __webpack_require__(143)
	  , speciesConstructor = __webpack_require__(122)
	  , task               = __webpack_require__(172).set
	  , microtask          = __webpack_require__(173)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(105)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(87)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(104)($Promise, PROMISE);
	__webpack_require__(129)(PROMISE);
	Wrapper = __webpack_require__(68)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(128)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(82)
	  , invoke             = __webpack_require__(158)
	  , html               = __webpack_require__(115)
	  , cel                = __webpack_require__(76)
	  , global             = __webpack_require__(67)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(95)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(67)
	  , macrotask = __webpack_require__(172).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(95)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(67)
	  , has            = __webpack_require__(80)
	  , DESCRIPTORS    = __webpack_require__(74)
	  , $export        = __webpack_require__(66)
	  , redefine       = __webpack_require__(79)
	  , META           = __webpack_require__(145).KEY
	  , $fails         = __webpack_require__(75)
	  , shared         = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(104)
	  , uid            = __webpack_require__(81)
	  , wks            = __webpack_require__(105)
	  , wksExt         = __webpack_require__(175)
	  , wksDefine      = __webpack_require__(176)
	  , keyOf          = __webpack_require__(177)
	  , enumKeys       = __webpack_require__(178)
	  , isArray        = __webpack_require__(121)
	  , anObject       = __webpack_require__(71)
	  , toIObject      = __webpack_require__(93)
	  , toPrimitive    = __webpack_require__(77)
	  , createDesc     = __webpack_require__(78)
	  , _create        = __webpack_require__(112)
	  , gOPNExt        = __webpack_require__(179)
	  , $GOPD          = __webpack_require__(131)
	  , $DP            = __webpack_require__(70)
	  , $keys          = __webpack_require__(114)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(91).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(132).f  = $propertyIsEnumerable;
	  __webpack_require__(152).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(86)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(69)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(105);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(67)
	  , core           = __webpack_require__(68)
	  , LIBRARY        = __webpack_require__(86)
	  , wksExt         = __webpack_require__(175)
	  , defineProperty = __webpack_require__(70).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(114)
	  , toIObject = __webpack_require__(93);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(114)
	  , gOPS    = __webpack_require__(152)
	  , pIE     = __webpack_require__(132);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(93)
	  , gOPN      = __webpack_require__(91).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(66);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(151)});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(66);
	$export($export.S, 'Object', {is: __webpack_require__(108)});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(66);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(148).set});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(70).f
	  , createDesc = __webpack_require__(78)
	  , has        = __webpack_require__(80)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(74) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(66)
	  , toIObject = __webpack_require__(93)
	  , toLength  = __webpack_require__(90);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(66)
	  , toIndex        = __webpack_require__(98)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(66)
	  , $at     = __webpack_require__(187)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(89)
	  , defined   = __webpack_require__(96);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(66);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(189)
	});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(89)
	  , defined   = __webpack_require__(96);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(66)
	  , toLength    = __webpack_require__(90)
	  , context     = __webpack_require__(191)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(193)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(192)
	  , defined  = __webpack_require__(96);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(72)
	  , cof      = __webpack_require__(95)
	  , MATCH    = __webpack_require__(105)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(105)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(66)
	  , toLength  = __webpack_require__(90)
	  , context   = __webpack_require__(191)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(193)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(66)
	  , context  = __webpack_require__(191)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(193)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(74) && /./g.flags != 'g')__webpack_require__(70).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(71);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(199)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(69)
	  , redefine = __webpack_require__(79)
	  , fails    = __webpack_require__(75)
	  , defined  = __webpack_require__(96)
	  , wks      = __webpack_require__(105);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(199)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(199)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(192)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(199)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(82)
	  , $export        = __webpack_require__(66)
	  , toObject       = __webpack_require__(103)
	  , call           = __webpack_require__(144)
	  , isArrayIter    = __webpack_require__(110)
	  , toLength       = __webpack_require__(90)
	  , createProperty = __webpack_require__(204)
	  , getIterFn      = __webpack_require__(117);
	
	$export($export.S + $export.F * !__webpack_require__(128)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(70)
	  , createDesc      = __webpack_require__(78);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(66)
	  , createProperty = __webpack_require__(204);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(75)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(66);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(130)});
	
	__webpack_require__(124)('copyWithin');

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(66)
	  , $find   = __webpack_require__(118)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(124)(KEY);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(66)
	  , $find   = __webpack_require__(118)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(124)(KEY);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(66);
	
	$export($export.P, 'Array', {fill: __webpack_require__(102)});
	
	__webpack_require__(124)('fill');

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(66)
	  , _isFinite = __webpack_require__(67).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(212)});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(72)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(66)
	  , isInteger = __webpack_require__(212)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(66)
	  , log1p   = __webpack_require__(219)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 219 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(66)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(66)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(66)
	  , sign    = __webpack_require__(223);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 223 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(66)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(66)
	  , $expm1  = __webpack_require__(227);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 227 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(66)
	  , sign      = __webpack_require__(223)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(66)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(66)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(75)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(219)});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {sign: __webpack_require__(223)});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(66)
	  , expm1   = __webpack_require__(227)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(75)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(66)
	  , expm1   = __webpack_require__(227)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(66);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(66)
	  , $includes = __webpack_require__(97)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(124)('includes');

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(66)
	  , $values = __webpack_require__(240)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(114)
	  , toIObject = __webpack_require__(93)
	  , isEnum    = __webpack_require__(132).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(66)
	  , $entries = __webpack_require__(240)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(66)
	  , ownKeys        = __webpack_require__(167)
	  , toIObject      = __webpack_require__(93)
	  , gOPD           = __webpack_require__(131)
	  , createProperty = __webpack_require__(204);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(66)
	  , $pad    = __webpack_require__(244);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(90)
	  , repeat   = __webpack_require__(189)
	  , defined  = __webpack_require__(96);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(66)
	  , $pad    = __webpack_require__(244);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(67)
	  , $export    = __webpack_require__(66)
	  , invoke     = __webpack_require__(158)
	  , partial    = __webpack_require__(247)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(248)
	  , invoke    = __webpack_require__(158)
	  , aFunction = __webpack_require__(83);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67);

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(66)
	  , $task   = __webpack_require__(172);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(123)
	  , redefine      = __webpack_require__(79)
	  , global        = __webpack_require__(67)
	  , hide          = __webpack_require__(69)
	  , Iterators     = __webpack_require__(111)
	  , wks           = __webpack_require__(105)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 252 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UnavailableStackException = function (_Error) {
	  _inherits(UnavailableStackException, _Error);
	
	  function UnavailableStackException(message) {
	    _classCallCheck(this, UnavailableStackException);
	
	    var _this = _possibleConstructorReturn(this, (UnavailableStackException.__proto__ || Object.getPrototypeOf(UnavailableStackException)).call(this));
	
	    _this.name = 'UnavailableStack';
	    _this.message = message || 'The stack is temporarily unavailable';
	    _this.stack = new Error().stack;
	    return _this;
	  }
	
	  return UnavailableStackException;
	}(Error);
	
	exports.UnavailableStackException = UnavailableStackException;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _i18n = __webpack_require__(1);
	
	var _stack = __webpack_require__(64);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _Navigation = __webpack_require__(254);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _Drawer = __webpack_require__(260);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	var _menu = __webpack_require__(261);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function applyComputations(state, newState, oldState) {
		if ('config' in newState && _typeof(state.config) === 'object' || state.config !== oldState.config) {
			state.sections = newState.sections = template.computed.sections(state.config);
		}
	}
	
	var template = function () {
		var updateAppsItems = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var apps;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								apps = void 0;
								_context.prev = 1;
								_context.next = 4;
								return _stack2.default.get.apps();
	
							case 4:
								_context.t0 = function (app) {
									return !EXCLUDES.includes(app.attributes.slug);
								};
	
								_context.t1 = function (app) {
									return {
										label: app.attributes.name,
										l10n: false,
										href: app.links.related,
										icon: app.links.icon
									};
								};
	
								_context.t2 = _context.sent.filter(_context.t0).map(_context.t1);
								apps = [_context.t2];
								_context.next = 14;
								break;
	
							case 10:
								_context.prev = 10;
								_context.t3 = _context['catch'](1);
	
								console.error(_context.t3.message);
								apps = { error: _context.t3 };
	
							case 14:
	
								this.set({ config: Object.assign({}, this.get('config'), { apps: apps }) });
	
							case 15:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[1, 10]]);
			}));
	
			return function updateAppsItems() {
				return _ref.apply(this, arguments);
			};
		}();
	
		var updateDiskUsage = function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
				var currentDiskUsage, settings;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								currentDiskUsage = void 0;
								_context2.prev = 1;
								_context2.next = 4;
								return _stack2.default.get.diskUsage();
	
							case 4:
								currentDiskUsage = +_context2.sent.attributes.used;
								_context2.next = 11;
								break;
	
							case 7:
								_context2.prev = 7;
								_context2.t0 = _context2['catch'](1);
	
								console.error(_context2.t0.message);
								currentDiskUsage = { error: _context2.t0.name };
	
							case 11:
	
								// copy settings section to update storage item
								settings = this.get('config').settings.slice();
	
								settings.forEach(function (section) {
									var storageItem = section.find(function (item) {
										return item.label === 'storage';
									});
									if (storageItem) {
										storageItem.currentDiskUsage = currentDiskUsage;
									}
								});
								this.set({ config: Object.assign({}, this.get('config'), { settings: settings }) });
	
							case 14:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[1, 7]]);
			}));
	
			return function updateDiskUsage() {
				return _ref2.apply(this, arguments);
			};
		}();
	
		var EXCLUDES = ['settings'];
	
		return {
			data: function data() {
				return {
					target: ("mobile"),
					config: _menu2.default
				};
			},
	
	
			computed: {
				sections: function sections(config) {
					return [{
						label: 'apps',
						icon: 'icon-cube',
						async: true,
						items: config.apps
					}, {
						label: 'settings',
						icon: 'icon-cog',
						items: config.settings
					}];
				}
			},
	
			components: {
				Navigation: _Navigation2.default,
				Drawer: _Drawer2.default
			},
	
			helpers: { t: _i18n.t },
	
			methods: {
				toggleDrawer: function toggleDrawer() {
					this.refs.drawer.set({ folded: false });
					updateAppsItems.call(this);
				},
				onPopOpen: function onPopOpen(panel) {
					if (panel === 'apps') {
						updateAppsItems.call(this);
					} else if (panel === 'settings') {
						updateDiskUsage.call(this);
					}
				}
			}
		};
	}();
	
	function renderMainFragment(root, component) {
		var ifBlock_anchor = createComment("#if target !== 'mobile'");
	
		function getBlock(root) {
			if (root.target !== 'mobile') return renderIfBlock_0;
			return null;
		}
	
		var currentBlock = getBlock(root);
		var ifBlock = currentBlock && currentBlock(root, component);
	
		var text = createText("\n\n");
	
		var h1 = createElement('h1');
		h1.className = "coz-bar-title";
	
		var img = createElement('img');
		img.className = "coz-bar-hide-sm";
		img.src = root.iconPath;
		img.width = "32";
	
		appendNode(img, h1);
		appendNode(createText("\n  "), h1);
	
		var span = createElement('span');
		span.className = "coz-bar-hide-sm";
	
		appendNode(span, h1);
		appendNode(createText("cozy"), span);
	
		var strong = createElement('strong');
	
		appendNode(strong, h1);
		var text3 = createText(root.appName);
		appendNode(text3, strong);
		var text4 = createText("\n\n");
	
		var hr = createElement('hr');
		hr.className = "coz-sep-flex";
	
		var text5 = createText("\n\n");
	
		var navigation_initialData = {
			sections: root.sections
		};
		var navigation = new template.components.Navigation({
			target: null,
			_root: component._root || component,
			data: navigation_initialData
		});
	
		navigation.on('open', function (event) {
			component.onPopOpen(event.panel);
		});
	
		var text6 = createText("\n\n");
		var ifBlock1_anchor = createComment("#if target !== 'mobile'");
	
		function getBlock1(root) {
			if (root.target !== 'mobile') return renderIfBlock1_0;
			return null;
		}
	
		var currentBlock1 = getBlock1(root);
		var ifBlock1 = currentBlock1 && currentBlock1(root, component);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(ifBlock_anchor, target, anchor);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				insertNode(text, target, anchor);
				insertNode(h1, target, anchor);
				insertNode(text4, target, anchor);
				insertNode(hr, target, anchor);
				insertNode(text5, target, anchor);
				navigation._fragment.mount(target, anchor);
				insertNode(text6, target, anchor);
				insertNode(ifBlock1_anchor, target, anchor);
				if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
			},
	
			update: function update(changed, root) {
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
	
				img.src = root.iconPath;
	
				text3.data = root.appName;
	
				var navigation_changes = {};
	
				if ('sections' in changed) navigation_changes.sections = root.sections;
	
				if (Object.keys(navigation_changes).length) navigation.set(navigation_changes);
	
				var _currentBlock1 = currentBlock1;
				currentBlock1 = getBlock1(root);
				if (_currentBlock1 === currentBlock1 && ifBlock1) {
					ifBlock1.update(changed, root);
				} else {
					if (ifBlock1) ifBlock1.teardown(true);
					ifBlock1 = currentBlock1 && currentBlock1(root, component);
					if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
				}
			},
	
			teardown: function teardown(detach) {
				if (ifBlock) ifBlock.teardown(detach);
				navigation.teardown(detach);
				if (ifBlock1) ifBlock1.teardown(detach);
	
				if (detach) {
					detachNode(ifBlock_anchor);
					detachNode(text);
					detachNode(h1);
					detachNode(text4);
					detachNode(hr);
					detachNode(text5);
					detachNode(text6);
					detachNode(ifBlock1_anchor);
				}
			}
		};
	}
	
	function renderIfBlock1_0(root, component) {
		var drawer_initialData = {
			content: root.config.apps.length ? root.config.apps[0] : false,
			footer: root.sections[1].items
		};
		var drawer = new template.components.Drawer({
			target: null,
			_root: component._root || component,
			data: drawer_initialData
		});
	
		component.refs.drawer = drawer;
	
		return {
			mount: function mount(target, anchor) {
				drawer._fragment.mount(target, anchor);
			},
	
			update: function update(changed, root) {
				var drawer_changes = {};
	
				if ('config' in changed || 'config' in changed) drawer_changes.content = root.config.apps.length ? root.config.apps[0] : false;
				if ('sections' in changed) drawer_changes.footer = root.sections[1].items;
	
				if (Object.keys(drawer_changes).length) drawer.set(drawer_changes);
			},
	
			teardown: function teardown(detach) {
				if (component.refs.drawer === drawer) component.refs.drawer = null;
				drawer.teardown(detach);
			}
		};
	}
	
	function renderIfBlock_0(root, component) {
		var button = createElement('button');
		button.className = "coz-bar-burger";
	
		function clickHandler(event) {
			component.toggleDrawer();
		}
	
		addEventListener(button, 'click', clickHandler);
	
		setAttribute(button, 'data-icon', "icon-hamburger");
	
		var text = createText(template.helpers.t('menu'));
		appendNode(text, button);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(button, target, anchor);
			},
	
			update: function update(changed, root) {
				text.data = template.helpers.t('menu');
			},

			teardown: function teardown(detach) {
				removeEventListener(button, 'click', clickHandler);

				if (detach) {
					detachNode(button);
				}
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this.refs = {};
		this._state = Object.assign(template.data(), options.data);
		applyComputations(this._state, this._state, {});

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	}

	SvelteComponent.prototype = template.methods;

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);
		applyComputations(this._state, newState, oldState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function addEventListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeEventListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	exports.default = SvelteComponent;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _NavigationSection = __webpack_require__(255);
	
	var _NavigationSection2 = _interopRequireDefault(_NavigationSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = function () {
		return {
			components: {
				NavigationSection: _NavigationSection2.default
			}
		};
	}();
	
	function renderMainFragment(root, component) {
		var nav = createElement('nav');
		nav.className = "coz-nav";
	
		var ul = createElement('ul');
	
		appendNode(ul, nav);
		var eachBlock_anchor = createComment("#each sections");
		appendNode(eachBlock_anchor, ul);
		var eachBlock_value = root.sections;
		var eachBlock_iterations = [];
	
		for (var i = 0; i < eachBlock_value.length; i += 1) {
			eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
			eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
		}
	
		return {
			mount: function mount(target, anchor) {
				insertNode(nav, target, anchor);
			},
	
			update: function update(changed, root) {
				var eachBlock_value = root.sections;
	
				for (var i = 0; i < eachBlock_value.length; i += 1) {
					if (!eachBlock_iterations[i]) {
						eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
						eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
					} else {
						eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
					}
				}
	
				teardownEach(eachBlock_iterations, true, eachBlock_value.length);
	
				eachBlock_iterations.length = eachBlock_value.length;
			},
	
			teardown: function teardown(detach) {
				teardownEach(eachBlock_iterations, false);
	
				if (detach) {
					detachNode(nav);
				}
			}
		};
	}
	
	function renderEachBlock(root, eachBlock_value, section, section__index, component) {
		var navigationSection_initialData = {
			standalone: "false",
			label: section.label,
			icon: section.icon,
			items: section.items,
			async: section.async
		};
		var navigationSection = new template.components.NavigationSection({
			target: null,
			_root: component._root || component,
			data: navigationSection_initialData
		});
	
		navigationSection.on('open', function (event) {
			component.fire("open", { panel: event.panel });
		});

		return {
			mount: function mount(target, anchor) {
				navigationSection._fragment.mount(target, anchor);
			},

			update: function update(changed, root, eachBlock_value, section, section__index) {
				var navigationSection_changes = {};

				if ('sections' in changed) navigationSection_changes.label = section.label;
				if ('sections' in changed) navigationSection_changes.icon = section.icon;
				if ('sections' in changed) navigationSection_changes.items = section.items;
				if ('sections' in changed) navigationSection_changes.async = section.async;

				if (Object.keys(navigationSection_changes).length) navigationSection.set(navigationSection_changes);
			},

			teardown: function teardown(detach) {
				navigationSection.teardown(detach);
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this._state = options.data || {};

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	}

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	function teardownEach(iterations, detach, start) {
		for (var i = start || 0; i < iterations.length; i += 1) {
			iterations[i].teardown(detach);
		}
	}

	exports.default = SvelteComponent;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _i18n = __webpack_require__(1);
	
	var _NavigationGroup = __webpack_require__(256);
	
	var _NavigationGroup2 = _interopRequireDefault(_NavigationGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function applyComputations(state, newState, oldState) {
		if ('label' in newState && _typeof(state.label) === 'object' || state.label !== oldState.label) {
			state.hash = newState.hash = template.computed.hash(state.label);
		}
	}
	
	var template = function () {
		var BUSY_DELAY = 450;
	
		function open() {
			var _this = this;
	
			var valveObserver = void 0,
			    busyTimer = void 0;
	
			var show = function show() {
				clearTimeout(busyTimer);
				_this.set({ closed: false, busy: false });
				if (valveObserver) {
					valveObserver.cancel();
				}
			};
	
			busyTimer = setTimeout(function () {
				_this.set({ busy: true });
			}, BUSY_DELAY);
	
			this.fire('open', { panel: this.get('label') });
	
			if (this.get('async')) {
				this.set({ valve: true });
				valveObserver = this.observe('valve', function (valve) {
					if (!valve) {
						setTimeout(function () {
							show();
						}, 0);
					}
				});
			} else {
				show();
			}
		}
	
		function close() {
			this.set({ closed: true });
		}
	
		function _toggle() {
			var closed = this.get('closed');
			if (closed) {
				open.call(this);
			} else {
				close.call(this);
			}
		}
	
		return {
			data: function data() {
				return {
					busy: false,
					closed: true,
					valve: false
				};
			},
	
			computed: {
				hash: function hash(label) {
					return Math.abs([].reduce.call(label, function (hash, char) {
						return char.charCodeAt(0) + (hash << 5) + (hash << 16) - hash;
					}, 0));
				}
			},
	
			onrender: function onrender() {
				var _this2 = this;
	
				this.clickOutsideListener = this._root.on('clickOutside', function (event) {
					if (!event || event.source != _this2) {
						_this2.set({ closed: true });
					}
				});
	
				if (this.get('async')) {
					this.asyncObserver = this.observe('items', function (items) {
						_this2.set({ valve: false });
					});
				}
			},
			onteardown: function onteardown() {
				this.clickOutsideListener.cancel();
				this.asyncObserver.cancel();
			},
	
	
			components: {
				NavigationGroup: _NavigationGroup2.default
			},
	
			helpers: { t: _i18n.t },
	
			methods: {
				toggle: function toggle() {
					_toggle.call(this);
				},
				dispatch: function dispatch(event) {
					event.stopPropagation();
					this._root.fire('clickOutside', { source: this });
				}
			}
		};
	}();
	
	function renderMainFragment(root, component) {
		var li = createElement('li');
		li.className = "coz-nav-section";
	
		function clickHandler(event) {
			component.dispatch(event);
		}
	
		addEventListener(li, 'click', clickHandler);
	
		var a = createElement('a');
	
		function clickHandler1(event) {
			component.toggle();
		}
	
		addEventListener(a, 'click', clickHandler1);
	
		setAttribute(a, 'aria-controls', 'coz-nav-pop--' + root.hash);
		setAttribute(a, 'aria-busy', root.busy);
		setAttribute(a, 'data-icon', root.icon);
	
		appendNode(a, li);
		var text = createText(template.helpers.t(root.label));
		appendNode(text, a);
		appendNode(createText("\n  "), li);
		var ifBlock_anchor = createComment("#if items");
		appendNode(ifBlock_anchor, li);
	
		function getBlock(root) {
			if (root.items) return renderIfBlock_0;
			return null;
		}
	
		var currentBlock = getBlock(root);
		var ifBlock = currentBlock && currentBlock(root, component);
	
		if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(li, target, anchor);
			},
	
			update: function update(changed, root) {
				setAttribute(a, 'aria-controls', 'coz-nav-pop--' + root.hash);
				setAttribute(a, 'aria-busy', root.busy);
				setAttribute(a, 'data-icon', root.icon);
	
				text.data = template.helpers.t(root.label);
	
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
			},
	
			teardown: function teardown(detach) {
				removeEventListener(li, 'click', clickHandler);
				removeEventListener(a, 'click', clickHandler1);
				if (ifBlock) ifBlock.teardown(false);
	
				if (detach) {
					detachNode(li);
				}
			}
		};
	}
	
	function renderIfBlock_0(root, component) {
		var div = createElement('div');
		div.className = 'coz-nav-pop coz-nav-pop--' + root.hash;
		div.id = 'coz-nav-pop--' + root.hash;
		setAttribute(div, 'aria-hidden', root.closed);
	
		var ifBlock1_anchor = createComment("#if items.error");
		appendNode(ifBlock1_anchor, div);
	
		function getBlock1(root) {
			if (root.items.error) return renderIfBlock1_0;
			if (root.items.length) return renderIfBlock1_1;
			return null;
		}
	
		var currentBlock1 = getBlock1(root);
		var ifBlock1 = currentBlock1 && currentBlock1(root, component);
	
		if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(div, target, anchor);
			},
	
			update: function update(changed, root) {
				div.className = 'coz-nav-pop coz-nav-pop--' + root.hash;
				div.id = 'coz-nav-pop--' + root.hash;
				setAttribute(div, 'aria-hidden', root.closed);
	
				var _currentBlock1 = currentBlock1;
				currentBlock1 = getBlock1(root);
				if (_currentBlock1 === currentBlock1 && ifBlock1) {
					ifBlock1.update(changed, root);
				} else {
					if (ifBlock1) ifBlock1.teardown(true);
					ifBlock1 = currentBlock1 && currentBlock1(root, component);
					if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
				}
			},
	
			teardown: function teardown(detach) {
				if (ifBlock1) ifBlock1.teardown(false);
	
				if (detach) {
					detachNode(div);
				}
			}
		};
	}
	
	function renderIfBlock1_1(root, component) {
		var eachBlock_anchor = createComment("#each items");
		var eachBlock_value = root.items;
		var eachBlock_iterations = [];
	
		for (var i = 0; i < eachBlock_value.length; i += 1) {
			eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
		}
	
		return {
			mount: function mount(target, anchor) {
				insertNode(eachBlock_anchor, target, anchor);
	
				for (var i = 0; i < eachBlock_iterations.length; i += 1) {
					eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
				}
			},
	
			update: function update(changed, root) {
				var eachBlock_value = root.items;
	
				for (var i = 0; i < eachBlock_value.length; i += 1) {
					if (!eachBlock_iterations[i]) {
						eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
						eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
					} else {
						eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
					}
				}
	
				teardownEach(eachBlock_iterations, true, eachBlock_value.length);
	
				eachBlock_iterations.length = eachBlock_value.length;
			},
	
			teardown: function teardown(detach) {
				teardownEach(eachBlock_iterations, detach);
	
				if (detach) {
					detachNode(eachBlock_anchor);
				}
			}
		};
	}
	
	function renderEachBlock(root, eachBlock_value, group, group__index, component) {
		var navigationGroup_initialData = {
			separator: "bottom",
			group: group
		};
		var navigationGroup = new template.components.NavigationGroup({
			target: null,
			_root: component._root || component,
			data: navigationGroup_initialData
		});
	
		return {
			mount: function mount(target, anchor) {
				navigationGroup._fragment.mount(target, anchor);
			},
	
			update: function update(changed, root, eachBlock_value, group, group__index) {
				var navigationGroup_changes = {};
	
				if ('items' in changed) navigationGroup_changes.group = group;
	
				if (Object.keys(navigationGroup_changes).length) navigationGroup.set(navigationGroup_changes);
			},
	
			teardown: function teardown(detach) {
				navigationGroup.teardown(detach);
			}
		};
	}
	
	function renderIfBlock1_0(root, component) {
		var p = createElement('p');
		p.className = "coz-nav--error coz-nav-group";
	
		var text = createText(template.helpers.t('error_' + root.items.error.name));
		appendNode(text, p);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(p, target, anchor);
			},
	
			update: function update(changed, root) {
				text.data = template.helpers.t('error_' + root.items.error.name);
			},

			teardown: function teardown(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this._state = Object.assign(template.data(), options.data);
		applyComputations(this._state, this._state, {});

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}

		if (options._root) {
			options._root._renderHooks.push({ fn: template.onrender, context: this });
		} else {
			template.onrender.call(this);
		}
	}

	SvelteComponent.prototype = template.methods;

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);
		applyComputations(this._state, newState, oldState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');
		template.onteardown.call(this);

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function addEventListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeEventListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	function teardownEach(iterations, detach, start) {
		for (var i = start || 0; i < iterations.length; i += 1) {
			iterations[i].teardown(detach);
		}
	}

	exports.default = SvelteComponent;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _NavigationItem = __webpack_require__(257);
	
	var _NavigationItem2 = _interopRequireDefault(_NavigationItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = function () {
		return {
			components: {
				NavigationItem: _NavigationItem2.default
			}
		};
	}();
	
	function renderMainFragment(root, component) {
		var ifBlock_anchor = createComment("#if separator == 'top'");
	
		function getBlock(root) {
			if (root.separator == 'top') return renderIfBlock_0;
			return null;
		}
	
		var currentBlock = getBlock(root);
		var ifBlock = currentBlock && currentBlock(root, component);
	
		var text = createText("\n");
	
		var ul = createElement('ul');
		ul.className = "coz-nav-group";
	
		var eachBlock_anchor = createComment("#each group");
		appendNode(eachBlock_anchor, ul);
		var eachBlock_value = root.group;
		var eachBlock_iterations = [];
	
		for (var i = 0; i < eachBlock_value.length; i += 1) {
			eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
			eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
		}
	
		var text1 = createText("\n");
		var ifBlock1_anchor = createComment("#if separator == 'bottom'");
	
		function getBlock1(root) {
			if (root.separator == 'bottom') return renderIfBlock1_0;
			return null;
		}
	
		var currentBlock1 = getBlock1(root);
		var ifBlock1 = currentBlock1 && currentBlock1(root, component);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(ifBlock_anchor, target, anchor);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				insertNode(text, target, anchor);
				insertNode(ul, target, anchor);
				insertNode(text1, target, anchor);
				insertNode(ifBlock1_anchor, target, anchor);
				if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
			},
	
			update: function update(changed, root) {
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
	
				var eachBlock_value = root.group;
	
				for (var i = 0; i < eachBlock_value.length; i += 1) {
					if (!eachBlock_iterations[i]) {
						eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
						eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
					} else {
						eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
					}
				}

				teardownEach(eachBlock_iterations, true, eachBlock_value.length);

				eachBlock_iterations.length = eachBlock_value.length;

				var _currentBlock1 = currentBlock1;
				currentBlock1 = getBlock1(root);
				if (_currentBlock1 === currentBlock1 && ifBlock1) {
					ifBlock1.update(changed, root);
				} else {
					if (ifBlock1) ifBlock1.teardown(true);
					ifBlock1 = currentBlock1 && currentBlock1(root, component);
					if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
				}
			},

			teardown: function teardown(detach) {
				if (ifBlock) ifBlock.teardown(detach);

				teardownEach(eachBlock_iterations, false);

				if (ifBlock1) ifBlock1.teardown(detach);

				if (detach) {
					detachNode(ifBlock_anchor);
					detachNode(text);
					detachNode(ul);
					detachNode(text1);
					detachNode(ifBlock1_anchor);
				}
			}
		};
	}

	function renderIfBlock1_0(root, component) {
		var hr = createElement('hr');

		return {
			mount: function mount(target, anchor) {
				insertNode(hr, target, anchor);
			},

			update: noop,

			teardown: function teardown(detach) {
				if (detach) {
					detachNode(hr);
				}
			}
		};
	}

	function renderEachBlock(root, eachBlock_value, item, item__index, component) {
		var navigationItem_initialData = {
			item: item
		};
		var navigationItem = new template.components.NavigationItem({
			target: null,
			_root: component._root || component,
			data: navigationItem_initialData
		});

		return {
			mount: function mount(target, anchor) {
				navigationItem._fragment.mount(target, anchor);
			},

			update: function update(changed, root, eachBlock_value, item, item__index) {
				var navigationItem_changes = {};

				if ('group' in changed) navigationItem_changes.item = item;

				if (Object.keys(navigationItem_changes).length) navigationItem.set(navigationItem_changes);
			},

			teardown: function teardown(detach) {
				navigationItem.teardown(detach);
			}
		};
	}

	function renderIfBlock_0(root, component) {
		var hr = createElement('hr');

		return {
			mount: function mount(target, anchor) {
				insertNode(hr, target, anchor);
			},

			update: noop,

			teardown: function teardown(detach) {
				if (detach) {
					detachNode(hr);
				}
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this._state = options.data || {};

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	}

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function noop() {}

	function createComment(data) {
		return document.createComment(data);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function teardownEach(iterations, detach, start) {
		for (var i = start || 0; i < iterations.length; i += 1) {
			iterations[i].teardown(detach);
		}
	}

	exports.default = SvelteComponent;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _i18n = __webpack_require__(1);
	
	var _stack = __webpack_require__(64);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _Storage = __webpack_require__(258);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function applyComputations(state, newState, oldState) {
		if ('item' in newState && _typeof(state.item) === 'object' || state.item !== oldState.item) {
			state.isBusy = newState.isBusy = template.computed.isBusy(state.item);
		}
	
		if ('item' in newState && _typeof(state.item) === 'object' || state.item !== oldState.item) {
			state.fileIcon = newState.fileIcon = template.computed.fileIcon(state.item);
		}
	
		if ('item' in newState && _typeof(state.item) === 'object' || state.item !== oldState.item) {
			state.dataIcon = newState.dataIcon = template.computed.dataIcon(state.item);
		}
	
		if ('item' in newState && _typeof(state.item) === 'object' || state.item !== oldState.item) {
			state.label = newState.label = template.computed.label(state.item);
		}
	}
	
	var template = function () {
		return {
			computed: {
				isBusy: function isBusy(item) {
					if (!item.component) {
						return false;
					}
	
					if (item.component === 'storage') {
						item.currentDiskUsage !== null;
					}
				},
				fileIcon: function fileIcon(item) {
					if (!item.icon) {
						return false;
					}
	
					if (item.icon.cached) {
						return {
							src: item.icon.src
						};
					} else {
						return {
							src: __webpack_require__(259),
							class: 'blurry'
						};
					}
				},
				dataIcon: function dataIcon(item) {
					if (!item.icon) {
						return 'icon-' + item.label;
					}
				},
				label: function label(item) {
					if (item.l10n == null || item.l10n) {
						return (0, _i18n.t)(item.label);
					} else {
						return item.label;
					}
				}
			},
	
			onrender: function onrender() {
				var _this = this;
	
				this.lazyloader = this.observe('item', function (item) {
					if (!item.icon || item.icon.onload || item.icon.cached) {
						return;
					}
	
					var uri = '' + _stack2.default.get.cozyURL() + item.icon;
	
					item = Object.assign({}, item, { icon: {
							src: uri,
							cached: false,
							onload: true
						} });
	
					_this.set({ item: item });
	
					var loader = new Image();
					loader.onload = function () {
						item.icon.cached = true;
						item.icon.onload = false;
						_this.set({ item: item });
					};
	
					loader.src = uri;
				});
			},
			onteardown: function onteardown() {
				this.lazyloader.cancel();
			},
	
	
			components: {
				Storage: _Storage2.default
			},
	
			helpers: { t: _i18n.t }
		};
	}();
	
	function renderMainFragment(root, component) {
		var li = createElement('li');
		li.className = "coz-nav-item";
	
		var ifBlock_anchor = createComment("#if item.component");
		appendNode(ifBlock_anchor, li);
	
		function getBlock(root) {
			if (root.item.component) return renderIfBlock_0;
			return renderIfBlock_1;
		}
	
		var currentBlock = getBlock(root);
		var ifBlock = currentBlock && currentBlock(root, component);
	
		if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(li, target, anchor);
			},
	
			update: function update(changed, root) {
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
			},
	
			teardown: function teardown(detach) {
				if (ifBlock) ifBlock.teardown(false);
	
				if (detach) {
					detachNode(li);
				}
			}
		};
	}
	
	function renderIfBlock_1(root, component) {
		var a = createElement('a');
		setAttribute(a, 'role', "menuitem");
		a.href = root.item.href;
		a.target = root.item.external ? "_blank" : "_self";
		setAttribute(a, 'data-icon', root.dataIcon ? root.dataIcon : "");
	
		var ifBlock2_anchor = createComment("#if fileIcon");
		appendNode(ifBlock2_anchor, a);
	
		function getBlock2(root) {
			if (root.fileIcon) return renderIfBlock2_0;
			return null;
		}
	
		var currentBlock2 = getBlock2(root);
		var ifBlock2 = currentBlock2 && currentBlock2(root, component);
	
		if (ifBlock2) ifBlock2.mount(ifBlock2_anchor.parentNode, ifBlock2_anchor);
		appendNode(createText("\n    "), a);
		var text1 = createText(root.label);
		appendNode(text1, a);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(a, target, anchor);
			},
	
			update: function update(changed, root) {
				a.href = root.item.href;
				a.target = root.item.external ? "_blank" : "_self";
				setAttribute(a, 'data-icon', root.dataIcon ? root.dataIcon : "");
	
				var _currentBlock2 = currentBlock2;
				currentBlock2 = getBlock2(root);
				if (_currentBlock2 === currentBlock2 && ifBlock2) {
					ifBlock2.update(changed, root);
				} else {
					if (ifBlock2) ifBlock2.teardown(true);
					ifBlock2 = currentBlock2 && currentBlock2(root, component);
					if (ifBlock2) ifBlock2.mount(ifBlock2_anchor.parentNode, ifBlock2_anchor);
				}
	
				text1.data = root.label;
			},
	
			teardown: function teardown(detach) {
				if (ifBlock2) ifBlock2.teardown(false);
	
				if (detach) {
					detachNode(a);
				}
			}
		};
	}
	
	function renderIfBlock2_0(root, component) {
		var img = createElement('img');
		img.src = root.fileIcon.src;
		img.alt = '';
		img.width = "64";
		img.height = "64";
		img.className = root.fileIcon.class ? root.fileIcon.class : '';
	
		return {
			mount: function mount(target, anchor) {
				insertNode(img, target, anchor);
			},
	
			update: function update(changed, root) {
				img.src = root.fileIcon.src;
				img.className = root.fileIcon.class ? root.fileIcon.class : '';
			},
	
			teardown: function teardown(detach) {
				if (detach) {
					detachNode(img);
				}
			}
		};
	}
	
	function renderIfBlock_0(root, component) {
		var div = createElement('div');
		setAttribute(div, 'role', "menuitem");
		setAttribute(div, 'data-icon', root.dataIcon ? root.dataIcon : "");
		setAttribute(div, 'aria-busy', root.isBusy);
	
		var text = createText(root.label);
		appendNode(text, div);
		appendNode(createText("\n    "), div);
		var ifBlock1_anchor = createComment("#if item.component === 'storage'");
		appendNode(ifBlock1_anchor, div);
	
		function getBlock1(root) {
			if (root.item.component === 'storage') return renderIfBlock1_0;
			return null;
		}
	
		var currentBlock1 = getBlock1(root);
		var ifBlock1 = currentBlock1 && currentBlock1(root, component);
	
		if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(div, target, anchor);
			},
	
			update: function update(changed, root) {
				setAttribute(div, 'data-icon', root.dataIcon ? root.dataIcon : "");
				setAttribute(div, 'aria-busy', root.isBusy);
	
				text.data = root.label;
	
				var _currentBlock1 = currentBlock1;
				currentBlock1 = getBlock1(root);
				if (_currentBlock1 === currentBlock1 && ifBlock1) {
					ifBlock1.update(changed, root);
				} else {
					if (ifBlock1) ifBlock1.teardown(true);
					ifBlock1 = currentBlock1 && currentBlock1(root, component);
					if (ifBlock1) ifBlock1.mount(ifBlock1_anchor.parentNode, ifBlock1_anchor);
				}
			},

			teardown: function teardown(detach) {
				if (ifBlock1) ifBlock1.teardown(false);

				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	function renderIfBlock1_0(root, component) {
		var storage_initialData = {
			diskUsageFromStack: root.item.currentDiskUsage
		};
		var storage = new template.components.Storage({
			target: null,
			_root: component._root || component,
			data: storage_initialData
		});

		return {
			mount: function mount(target, anchor) {
				storage._fragment.mount(target, anchor);
			},

			update: function update(changed, root) {
				var storage_changes = {};

				if ('item' in changed) storage_changes.diskUsageFromStack = root.item.currentDiskUsage;

				if (Object.keys(storage_changes).length) storage.set(storage_changes);
			},

			teardown: function teardown(detach) {
				storage.teardown(detach);
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this._state = options.data || {};
		applyComputations(this._state, this._state, {});

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}

		if (options._root) {
			options._root._renderHooks.push({ fn: template.onrender, context: this });
		} else {
			template.onrender.call(this);
		}
	}

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);
		applyComputations(this._state, newState, oldState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');
		template.onteardown.call(this);

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	exports.default = SvelteComponent;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _i18n = __webpack_require__(1);
	
	function applyComputations(state, newState, oldState) {
		if ('diskUsageFromStack' in newState && _typeof(state.diskUsageFromStack) === 'object' || state.diskUsageFromStack !== oldState.diskUsageFromStack) {
			state.diskUsage = newState.diskUsage = template.computed.diskUsage(state.diskUsageFromStack);
		}
	}
	
	var template = function () {
		return {
			data: function data() {
				return {
					totalStorage: 60 // TODO grab it from the cozy stack
				};
			},
	
	
			computed: {
				diskUsage: function diskUsage(diskUsageFromStack) {
					if (Number.isInteger(diskUsageFromStack)) {
						return (diskUsageFromStack / 1000000000).toFixed(2);
					}
					return diskUsageFromStack;
				}
			},
	
			helpers: { t: _i18n.t }
		};
	}();
	
	function renderMainFragment(root, component) {
		var div = createElement('div');
		div.className = "coz-nav-storage";
	
		var ifBlock_anchor = createComment("#if diskUsage && !diskUsage.error");
		appendNode(ifBlock_anchor, div);
	
		function getBlock(root) {
			if (root.diskUsage && !root.diskUsage.error) return renderIfBlock_0;
			if (root.diskUsage && root.diskUsage.error) return renderIfBlock_1;
			return null;
		}
	
		var currentBlock = getBlock(root);
		var ifBlock = currentBlock && currentBlock(root, component);
	
		if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(div, target, anchor);
			},
	
			update: function update(changed, root) {
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
			},
	
			teardown: function teardown(detach) {
				if (ifBlock) ifBlock.teardown(false);
	
				if (detach) {
					detachNode(div);
				}
			}
		};
	}
	
	function renderIfBlock_1(root, component) {
		var p = createElement('p');
		p.className = "coz-nav--error";
	
		var text = createText(template.helpers.t('error_' + root.diskUsage.error));
		appendNode(text, p);
	
		return {
			mount: function mount(target, anchor) {
				insertNode(p, target, anchor);
			},
	
			update: function update(changed, root) {
				text.data = template.helpers.t('error_' + root.diskUsage.error);
			},
	
			teardown: function teardown(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}
	
	function renderIfBlock_0(root, component) {
		var p = createElement('p');
		p.className = "coz-nav-storage-text";
	
		var text = createText(template.helpers.t('storage_phrase', {
			diskUsage: root.diskUsage,
			totalStorage: root.totalStorage
		}));
		appendNode(text, p);
		var text1 = createText("\n  ");
	
		var progress = createElement('progress');
		progress.className = "cozy-nav-storage-bar";
		progress.value = root.diskUsage;
		progress.max = root.totalStorage;
		setAttribute(progress, 'min', "0");
	
		return {
			mount: function mount(target, anchor) {
				insertNode(p, target, anchor);
				insertNode(text1, target, anchor);
				insertNode(progress, target, anchor);
			},
	
			update: function update(changed, root) {
				text.data = template.helpers.t('storage_phrase', {
					diskUsage: root.diskUsage,
					totalStorage: root.totalStorage
				});
	
				progress.value = root.diskUsage;
				progress.max = root.totalStorage;
			},

			teardown: function teardown(detach) {
				if (detach) {
					detachNode(p);
					detachNode(text1);
					detachNode(progress);
				}
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this._state = Object.assign(template.data(), options.data);
		applyComputations(this._state, this._state, {});

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);
	}

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);
		applyComputations(this._state, newState, oldState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	exports.default = SvelteComponent;

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBmaWxsPSIjOTU5OTlEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODggLTMyKSI+CiAgICA8cGF0aCBkPSJNMjg5LDQzLjAwODYyOTYgQzI4OSw0My41NTg2NzMyIDI4OS4zOTY0MDcsNDQuMjMxMDg5OSAyODkuODcyNDAxLDQ0LjUwMzA4NjggTDI5NS4xMjc1OTksNDcuNTA2MDU2NiBDMjk1LjYwOTQxMyw0Ny43ODEzNzg5IDI5Niw0Ny41NTc4NzMgMjk2LDQ3LjAwODYyOTYgTDI5Niw0MS41MDA1MTM4IEMyOTYsNDAuOTUwNDcwMiAyOTUuNjAzNTkzLDQwLjI3ODA1MzUgMjk1LjEyNzU5OSw0MC4wMDYwNTY2IEwyODkuODcyNDAxLDM3LjAwMzA4NjggQzI4OS4zOTA1ODcsMzYuNzI3NzY0NSAyODksMzYuOTUxMjcwNCAyODksMzcuNTAwNTEzOCBMMjg5LDQzLjAwODYyOTYgWiBNMzA0LDQzLjAwODYyOTYgQzMwNCw0My41NTg2NzMyIDMwMy42MDM1OTMsNDQuMjMxMDg5OSAzMDMuMTI3NTk5LDQ0LjUwMzA4NjggTDI5Ny44NzI0MDEsNDcuNTA2MDU2NiBDMjk3LjM5MDU4Nyw0Ny43ODEzNzg5IDI5Nyw0Ny41NTc4NzMgMjk3LDQ3LjAwODYyOTYgTDI5Nyw0MS41MDA1MTM4IEMyOTcsNDAuOTUwNDcwMiAyOTcuMzk2NDA3LDQwLjI3ODA1MzUgMjk3Ljg3MjQwMSw0MC4wMDYwNTY2IEwzMDMuMTI3NTk5LDM3LjAwMzA4NjggQzMwMy42MDk0MTMsMzYuNzI3NzY0NSAzMDQsMzYuOTUxMjcwNCAzMDQsMzcuNTAwNTEzOCBMMzA0LDQzLjAwODYyOTYgWiBNMjk3LjM0OTc2MSwzOC45ODE2NDE2IEMyOTYuODgwNDUxLDM5LjI3MDQ0NzkgMjk2LjExMjg2MSwzOS4yNjYzMzI0IDI5NS42NTAyMzksMzguOTgxNjQxNiBMMjkwLjg0OTc2MSwzNi4wMjc1MDE4IEMyOTAuMzgwNDUxLDM1LjczODY5NTUgMjkwLjM4NzEzOSwzNS4yOTYxMTIzIDI5MC44NzY2MTksMzUuMDMyNTQ2MSBMMjk1LjYyMzM4MSwzMi40NzY1OTczIEMyOTYuMTA3NTI0LDMyLjIxNTkwNDggMjk2Ljg4NzEzOSwzMi4yMTMwMzExIDI5Ny4zNzY2MTksMzIuNDc2NTk3MyBMMzAyLjEyMzM4MSwzNS4wMzI1NDYxIEMzMDIuNjA3NTI0LDM1LjI5MzIzODcgMzAyLjYxMjg2MSwzNS43NDI4MTEgMzAyLjE1MDIzOSwzNi4wMjc1MDE4IEwyOTcuMzQ5NzYxLDM4Ljk4MTY0MTYgWiIvPgogICAgPHBhdGggZD0iTTI4OSw0My4wMDg2Mjk2IEMyODksNDMuNTU4NjczMiAyODkuMzk2NDA3LDQ0LjIzMTA4OTkgMjg5Ljg3MjQwMSw0NC41MDMwODY4IEwyOTUuMTI3NTk5LDQ3LjUwNjA1NjYgQzI5NS42MDk0MTMsNDcuNzgxMzc4OSAyOTYsNDcuNTU3ODczIDI5Niw0Ny4wMDg2Mjk2IEwyOTYsNDEuNTAwNTEzOCBDMjk2LDQwLjk1MDQ3MDIgMjk1LjYwMzU5Myw0MC4yNzgwNTM1IDI5NS4xMjc1OTksNDAuMDA2MDU2NiBMMjg5Ljg3MjQwMSwzNy4wMDMwODY4IEMyODkuMzkwNTg3LDM2LjcyNzc2NDUgMjg5LDM2Ljk1MTI3MDQgMjg5LDM3LjUwMDUxMzggTDI4OSw0My4wMDg2Mjk2IFogTTMwNCw0My4wMDg2Mjk2IEMzMDQsNDMuNTU4NjczMiAzMDMuNjAzNTkzLDQ0LjIzMTA4OTkgMzAzLjEyNzU5OSw0NC41MDMwODY4IEwyOTcuODcyNDAxLDQ3LjUwNjA1NjYgQzI5Ny4zOTA1ODcsNDcuNzgxMzc4OSAyOTcsNDcuNTU3ODczIDI5Nyw0Ny4wMDg2Mjk2IEwyOTcsNDEuNTAwNTEzOCBDMjk3LDQwLjk1MDQ3MDIgMjk3LjM5NjQwNyw0MC4yNzgwNTM1IDI5Ny44NzI0MDEsNDAuMDA2MDU2NiBMMzAzLjEyNzU5OSwzNy4wMDMwODY4IEMzMDMuNjA5NDEzLDM2LjcyNzc2NDUgMzA0LDM2Ljk1MTI3MDQgMzA0LDM3LjUwMDUxMzggTDMwNCw0My4wMDg2Mjk2IFogTTI5Ny4zNDk3NjEsMzguOTgxNjQxNiBDMjk2Ljg4MDQ1MSwzOS4yNzA0NDc5IDI5Ni4xMTI4NjEsMzkuMjY2MzMyNCAyOTUuNjUwMjM5LDM4Ljk4MTY0MTYgTDI5MC44NDk3NjEsMzYuMDI3NTAxOCBDMjkwLjM4MDQ1MSwzNS43Mzg2OTU1IDI5MC4zODcxMzksMzUuMjk2MTEyMyAyOTAuODc2NjE5LDM1LjAzMjU0NjEgTDI5NS42MjMzODEsMzIuNDc2NTk3MyBDMjk2LjEwNzUyNCwzMi4yMTU5MDQ4IDI5Ni44ODcxMzksMzIuMjEzMDMxMSAyOTcuMzc2NjE5LDMyLjQ3NjU5NzMgTDMwMi4xMjMzODEsMzUuMDMyNTQ2MSBDMzAyLjYwNzUyNCwzNS4yOTMyMzg3IDMwMi42MTI4NjEsMzUuNzQyODExIDMwMi4xNTAyMzksMzYuMDI3NTAxOCBMMjk3LjM0OTc2MSwzOC45ODE2NDE2IFoiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _i18n = __webpack_require__(1);
	
	var _NavigationGroup = __webpack_require__(256);
	
	var _NavigationGroup2 = _interopRequireDefault(_NavigationGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = function () {
		var toggleDrawerObserver = void 0;
	
		return {
			data: function data() {
				return {
					folded: true
				};
			},
			onrender: function onrender() {
				var _this = this;
	
				toggleDrawerObserver = this.observe('folded', function (folded) {
					if (folded) {
						_this.refs.wrapper.classList.toggle('visible', false);
						setTimeout(function () {
							_this.refs.wrapper.setAttribute('aria-hidden', true);
						}, 530);
					} else {
						_this.refs.wrapper.setAttribute('aria-hidden', 'false');
						setTimeout(function () {
							_this.refs.wrapper.classList.toggle('visible', true);
						}, 30);
					}
				});
			},
			onteardown: function onteardown() {
				toggleDrawerObserver.cancel();
			},
	
	
			components: {
				NavigationGroup: _NavigationGroup2.default
			},
	
			helpers: { t: _i18n.t }
		};
	}();
	
	function renderMainFragment(root, component) {
		var div = createElement('div');
		component.refs.wrapper = div;
		div.className = "coz-drawer-wrapper";
	
		function clickHandler(event) {
			component.set({ folded: true });
		}
	
		addEventListener(div, 'click', clickHandler);
	
		var aside = createElement('aside');
	
		function clickHandler1(event) {
			event.stopPropagation();
		}
	
		addEventListener(aside, 'click', clickHandler1);
	
		appendNode(aside, div);
	
		var nav = createElement('nav');
		nav.className = "coz-drawer--apps";
	
		appendNode(nav, aside);
	
		var h1 = createElement('h1');
	
		appendNode(h1, nav);
		var text = createText(template.helpers.t('drawer apps'));
		appendNode(text, h1);
		appendNode(createText("\n      "), nav);
	
		var navigationGroup_initialData = {
			group: root.content || []
		};
		var navigationGroup = new template.components.NavigationGroup({
			target: nav,
			_root: component._root || component,
			data: navigationGroup_initialData
		});
	
		appendNode(createText("\n    "), aside);
	
		var hr = createElement('hr');
		hr.className = "coz-sep-flex";
	
		appendNode(hr, aside);
		appendNode(createText("\n    "), aside);
	
		var nav1 = createElement('nav');
	
		appendNode(nav1, aside);
		var eachBlock_anchor = createComment("#each footer");
		appendNode(eachBlock_anchor, nav1);
		var eachBlock_value = root.footer;
		var eachBlock_iterations = [];
	
		for (var i = 0; i < eachBlock_value.length; i += 1) {
			eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
			eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
		}
	
		return {
			mount: function mount(target, anchor) {
				insertNode(div, target, anchor);
			},
	
			update: function update(changed, root) {
				text.data = template.helpers.t('drawer apps');
	
				var navigationGroup_changes = {};
	
				if ('content' in changed) navigationGroup_changes.group = root.content || [];
	
				if (Object.keys(navigationGroup_changes).length) navigationGroup.set(navigationGroup_changes);
	
				var eachBlock_value = root.footer;
	
				for (var i = 0; i < eachBlock_value.length; i += 1) {
					if (!eachBlock_iterations[i]) {
						eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
						eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
					} else {
						eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
					}
				}
	
				teardownEach(eachBlock_iterations, true, eachBlock_value.length);
	
				eachBlock_iterations.length = eachBlock_value.length;
			},
	
			teardown: function teardown(detach) {
				if (component.refs.wrapper === div) component.refs.wrapper = null;
				removeEventListener(div, 'click', clickHandler);
				removeEventListener(aside, 'click', clickHandler1);
				navigationGroup.teardown(false);
	
				teardownEach(eachBlock_iterations, false);
	
				if (detach) {
					detachNode(div);
				}
			}
		};
	}
	
	function renderEachBlock(root, eachBlock_value, group, group__index, component) {
		var ifBlock_anchor = createComment("#if group[0].label !== 'storage'");
	
		function getBlock(root, eachBlock_value, group, group__index) {
			if (group[0].label !== 'storage') return renderIfBlock_0;
			return null;
		}

		var currentBlock = getBlock(root, eachBlock_value, group, group__index);
		var ifBlock = currentBlock && currentBlock(root, eachBlock_value, group, group__index, component);

		return {
			mount: function mount(target, anchor) {
				insertNode(ifBlock_anchor, target, anchor);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
			},

			update: function update(changed, root, eachBlock_value, group, group__index) {
				var _currentBlock = currentBlock;
				currentBlock = getBlock(root, eachBlock_value, group, group__index);
				if (_currentBlock === currentBlock && ifBlock) {
					ifBlock.update(changed, root, eachBlock_value, group, group__index);
				} else {
					if (ifBlock) ifBlock.teardown(true);
					ifBlock = currentBlock && currentBlock(root, eachBlock_value, group, group__index, component);
					if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
				}
			},

			teardown: function teardown(detach) {
				if (ifBlock) ifBlock.teardown(detach);

				if (detach) {
					detachNode(ifBlock_anchor);
				}
			}
		};
	}

	function renderIfBlock_0(root, eachBlock_value, group, group__index, component) {
		var navigationGroup_initialData = {
			separator: "top",
			group: group
		};
		var navigationGroup = new template.components.NavigationGroup({
			target: null,
			_root: component._root || component,
			data: navigationGroup_initialData
		});

		return {
			mount: function mount(target, anchor) {
				navigationGroup._fragment.mount(target, anchor);
			},

			update: function update(changed, root, eachBlock_value, group, group__index) {
				var navigationGroup_changes = {};

				if ('footer' in changed) navigationGroup_changes.group = group;

				if (Object.keys(navigationGroup_changes).length) navigationGroup.set(navigationGroup_changes);
			},

			teardown: function teardown(detach) {
				navigationGroup.teardown(detach);
			}
		};
	}

	function SvelteComponent(options) {
		options = options || {};

		this.refs = {};
		this._state = Object.assign(template.data(), options.data);

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root;
		this._yield = options._yield;

		this._renderHooks = [];

		this._fragment = renderMainFragment(this._state, this);
		if (options.target) this._fragment.mount(options.target, null);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}

		if (options._root) {
			options._root._renderHooks.push({ fn: template.onrender, context: this });
		} else {
			template.onrender.call(this);
		}
	}

	SvelteComponent.prototype.get = function get(key) {
		return key ? this._state[key] : this._state;
	};

	SvelteComponent.prototype.fire = function fire(eventName, data) {
		var handlers = eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			handlers[i].call(this, data);
		}
	};

	SvelteComponent.prototype.observe = function observe(key, callback, options) {
		var group = options && options.defer ? this._observers.pre : this._observers.post;

		(group[key] || (group[key] = [])).push(callback);

		if (!options || options.init !== false) {
			callback.__calling = true;
			callback.call(this, this._state[key]);
			callback.__calling = false;
		}

		return {
			cancel: function cancel() {
				var index = group[key].indexOf(callback);
				if (~index) group[key].splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.on = function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function cancel() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	};

	SvelteComponent.prototype.set = function set(newState) {
		var oldState = this._state;
		this._state = Object.assign({}, oldState, newState);

		dispatchObservers(this, this._observers.pre, newState, oldState);
		if (this._fragment) this._fragment.update(newState, this._state);
		dispatchObservers(this, this._observers.post, newState, oldState);

		while (this._renderHooks.length) {
			var hook = this._renderHooks.pop();
			hook.fn.call(hook.context);
		}
	};

	SvelteComponent.prototype.teardown = function teardown(detach) {
		this.fire('teardown');
		template.onteardown.call(this);

		this._fragment.teardown(detach !== false);
		this._fragment = null;

		this._state = {};
	};

	function dispatchObservers(component, group, newState, oldState) {
		for (var key in group) {
			if (!(key in newState)) continue;

			var newValue = newState[key];
			var oldValue = oldState[key];

			if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}

	function addEventListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeEventListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment(data) {
		return document.createComment(data);
	}

	function teardownEach(iterations, detach, start) {
		for (var i = start || 0; i < iterations.length; i += 1) {
			iterations[i].teardown(detach);
		}
	}

	exports.default = SvelteComponent;

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = {
		"settings": [
			[
				{
					"label": "storage",
					"component": "storage",
					"currentDiskUsage": null
				}
			],
			[
				{
					"label": "help",
					"external": true,
					"href": "https://docs.cozy.io/"
				},
				{
					"label": "email",
					"href": "mailto:contact@cozycloud.cc"
				}
			],
			[
				{
					"label": "logout",
					"href": "/logout"
				}
			]
		],
		"apps": false
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(263);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(264)();
	// imports
	
	
	// module
	exports.push([module.id, "body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;width:100vw;height:100vh;overflow:hidden}[role=application]{height:inherit;-ms-flex:1 100vh;flex:1 100vh;overflow-y:auto}[role=banner] .coz-sep-flex{margin:0;border:none;-ms-flex:1 0;flex:1 0}[role=banner] [data-icon]{background-repeat:no-repeat;background-position:0 50%;padding-left:calc(16px + .5em)}[role=banner] [data-icon=icon-help]{background-image:url(" + __webpack_require__(265) + ")}[role=banner] [data-icon=icon-logout]{background-image:url(" + __webpack_require__(266) + ")}[role=banner] [data-icon=icon-email]{background-image:url(" + __webpack_require__(267) + ")}[role=banner] [data-icon=icon-storage]{background-image:url(" + __webpack_require__(268) + ")}[role=banner] [data-icon=icon-cog]{background-image:url(" + __webpack_require__(269) + ")}[role=banner] [data-icon=icon-hamburger]{background-image:url(" + __webpack_require__(270) + ")}[role=banner] [data-icon=icon-cube]{background-image:url(" + __webpack_require__(259) + ")}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}[role=banner] [aria-busy=true]{position:relative}[role=banner] [aria-busy=true]:after{content:\"\";position:absolute;right:0;top:0;display:block;width:1em;height:1em;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(" + __webpack_require__(271) + ");animation:1s linear infinite spin}[role=banner] progress[value]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#f5f6f7;border:solid 1px #d6d8da;border-radius:2px;color:#297ef2}[role=banner] progress[value]::-webkit-progress-bar{background:#f5f6f7;border-radius:2px}[role=banner] progress[value]::-webkit-progress-value{background:#297ef2;border-radius:1px}[role=banner] progress[value]::-moz-progress-bar{background:#297ef2;border-radius:1px}[role=banner] .coz-nav--error{margin:0 0 .1em;font-weight:400;font-size:.875em;color:#f52d2d;white-space:nowrap}[role=banner]{position:relative;z-index:99;min-height:2.5em;-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;padding:0 1.25em 0 1em;box-shadow:inset 0 -1px 0 0 #d6d8da;font-family:Lato,sans-serif;font-size:1rem}[role=banner] .coz-bar-title{display:-ms-flexbox;display:flex;margin:0;-ms-flex-align:center;align-items:center;font-size:1.5em;font-weight:400;text-transform:lowercase;color:#32363f}[role=banner] .coz-bar-title img{margin-right:.45em}[role=banner] .coz-bar-title strong{padding-left:.25em;font-weight:700}[role=banner] .coz-bar-burger{width:2.5em;margin-right:.25em;padding:0;border:none;background-color:transparent;background-position:center;text-indent:-9999em}[role=banner] .coz-nav ul{margin:0;padding:0;list-style-type:none}[role=banner] .coz-nav>ul{display:-ms-flexbox;display:flex}[role=banner] .coz-nav-section{position:relative}[role=banner] .coz-nav-section [aria-controls]{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;padding:1.285em 1.5em;font-size:.875em;font-weight:700;text-transform:uppercase;color:#5d6165;cursor:pointer}[role=banner] [aria-controls][aria-busy]:after{position:relative;top:.12em;margin-left:.5em}[role=banner] [aria-controls][aria-busy=true]{padding-right:0}[role=banner] .coz-nav-section [aria-controls][data-icon]{padding-left:calc(1.25em + 16px + .5em);background-position:1.25em calc(50% - 1px)}[role=banner] .coz-nav-icon{margin-right:.5em}[role=banner] .coz-nav-pop[aria-hidden=true]{display:none}[role=banner] .coz-nav-pop{position:absolute;top:calc(100% - .5em);right:0;box-sizing:border-box;min-width:100%;background-color:#fff;border-radius:8px;border:solid 1px rgba(50,54,63,.12);box-shadow:0 1px 3px 0 rgba(50,54,63,.19),0 6px 18px 0 rgba(50,54,63,.19)}[role=banner] .coz-nav-pop ul{padding:.5em 0}[role=banner] .coz-nav-pop hr{margin:0;border:none;border-bottom:solid 1px #d6d8da}[role=banner] .coz-nav-pop ul:last-of-type+hr{display:none}[role=banner] .coz-nav-pop--1612761714 .coz-nav-group{display:-ms-flexbox;display:flex;padding:.75em}[role=banner] .coz-nav-pop--1612761714 .coz-nav-group a{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1.25em}[role=banner] .coz-nav-pop--1612761714 .coz-nav-group a img{margin-bottom:.75em}[role=banner] .blurry{opacity:.5;filter:blur(5px)}[role=banner] .coz-nav-item [role=menuitem]{display:block;padding:.5em 1.5em .5em calc(1.5em + 16px + .5em);background-position:1.5em 50%;-ms-flex-align:center;align-items:center;white-space:nowrap;color:#32363f;text-decoration:none}[role=banner] [role=menuitem][aria-busy=true]:after{right:1.5em;top:.5em}[role=banner] [role=menuitem][data-icon=icon-storage]{background-position:1.5em calc(.5em + 1px)}[role=banner] .coz-nav-storage{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:left;align-items:left;padding-top:.5em;color:#95999d}[role=banner] .coz-nav-storage-text{margin:0 0 .1em;font-weight:400;font-size:.875em}[role=banner] .cozy-nav-storage-bar{height:.5em;margin:.2em 0 .1em}[role=banner] .coz-drawer-wrapper{position:absolute;top:0;left:0;width:100vw;height:100vh}[role=banner] .coz-drawer-wrapper[aria-hidden=true]{display:none}[role=banner] .coz-drawer-wrapper:before{content:'';display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#32363f;opacity:0;transition:opacity .25s ease-out}[role=banner] .coz-drawer-wrapper.visible:before{opacity:.5}[role=banner] .coz-drawer-wrapper aside{position:absolute;top:0;left:0;width:90%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#fff;transform:translateX(-100vw);transition:transform .5s ease-out}[role=banner] .coz-drawer-wrapper.visible aside{transform:translateX(0)}[role=banner] .coz-drawer-wrapper ul{margin:0;padding:.8em 0;list-style-type:none}[role=banner] .coz-drawer-wrapper nav hr{margin:0;border:none;border-bottom:solid 1px #d6d8da}[role=banner] .coz-drawer-wrapper .coz-nav-icon{margin-right:.5em}[role=banner] .coz-drawer--apps h1{margin:1.125em 1em 0;font-size:1em;text-transform:capitalize}[role=banner] .coz-drawer--apps ul{display:-ms-flexbox;display:flex}[role=banner] .coz-drawer--apps [role=menuitem]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;border-radius:2px}[role=banner] .coz-drawer--apps [role=menuitem]:hover{background-color:rgba(25,123,255,.1)}[role=banner] .coz-drawer--apps li img{margin-bottom:1.125em}[role=banner].coz-target--mobile{padding-left:1em}@media(max-width:30em){[role=banner]{padding:0 1em 0 0}[role=banner] .coz-bar-title{font-size:1.25em}[role=banner] .coz-bar-hide-sm{display:none}[role=banner] .coz-bar-title strong{padding:0;text-transform:capitalize}[role=banner] .coz-nav{display:none}}@media(min-width:30.0625em){[role=banner] .coz-bar-burger{display:none}[role=banner] .coz-drawer-wrapper{display:none}}", ""]);
	
	// exports


/***/ },
/* 264 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjNUQ2MTY1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOTYsODAgQzMwMC40MTgyNzgsODAgMzA0LDc2LjQxODI3OCAzMDQsNzIgQzMwNCw2Ny41ODE3MjIgMzAwLjQxODI3OCw2NCAyOTYsNjQgQzI5MS41ODE3MjIsNjQgMjg4LDY3LjU4MTcyMiAyODgsNzIgQzI4OCw3Ni40MTgyNzggMjkxLjU4MTcyMiw4MCAyOTYsODAgWiBNMjk3LDcyLjgwMjExMyBDMjk4LjEyMTgwOSw3Mi4zNTQ1NTY4IDI5OSw3MS4yMDg5OTQ2IDI5OSw3MCBDMjk5LDY4LjQ0NzcxNTMgMjk3LjU1MjI4NSw2NyAyOTYsNjcgQzI5NC40NDc3MTUsNjcgMjkzLDY4LjQ0NzcxNTMgMjkzLDcwIEwyOTUsNzAgQzI5NSw2OS41NTIyODQ3IDI5NS41NTIyODUsNjkgMjk2LDY5IEMyOTYuNDQ3NzE1LDY5IDI5Nyw2OS41NTIyODQ3IDI5Nyw3MCBDMjk3LDcwLjQ0NzcxNTMgMjk2LjQ0NzcxNSw3MSAyOTYsNzEgQzI5NS40NDc3MTUsNzEgMjk1LDcxLjQ0NzcxNTMgMjk1LDcyIEwyOTUsNzQgTDI5Nyw3NCBMMjk3LDcyLjgwMjExMyBaIE0yOTUsNzUgTDI5Nyw3NSBMMjk3LDc3IEwyOTUsNzcgTDI5NSw3NSBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg4IC02NCkiLz4KPC9zdmc+Cg=="

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjNUQ2MTY1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMjcsOTkuNDE0MjEzNiBMMzI1LjcwNzEwNywxMDAuNzA3MTA3IEMzMjUuMzE2NTgyLDEwMS4wOTc2MzEgMzI0LjY4MzQxOCwxMDEuMDk3NjMxIDMyNC4yOTI4OTMsMTAwLjcwNzEwNyBDMzIzLjkwMjM2OSwxMDAuMzE2NTgyIDMyMy45MDIzNjksOTkuNjgzNDE3NSAzMjQuMjkyODkzLDk5LjI5Mjg5MzIgTDMyNy4yOTI4OTMsOTYuMjkyODkzMiBDMzI3LjY4MzQxOCw5NS45MDIzNjg5IDMyOC4zMTY1ODIsOTUuOTAyMzY4OSAzMjguNzA3MTA3LDk2LjI5Mjg5MzIgTDMzMS43MDcxMDcsOTkuMjkyODkzMiBDMzMyLjA5NzYzMSw5OS42ODM0MTc1IDMzMi4wOTc2MzEsMTAwLjMxNjU4MiAzMzEuNzA3MTA3LDEwMC43MDcxMDcgQzMzMS4zMTY1ODIsMTAxLjA5NzYzMSAzMzAuNjgzNDE4LDEwMS4wOTc2MzEgMzMwLjI5Mjg5MywxMDAuNzA3MTA3IEwzMjksOTkuNDE0MjEzNiBMMzI5LDEwNyBDMzI5LDEwNy41NTIyODUgMzI4LjU1MjI4NSwxMDggMzI4LDEwOCBDMzI3LjQ0NzcxNSwxMDggMzI3LDEwNy41NTIyODUgMzI3LDEwNyBMMzI3LDk5LjQxNDIxMzYgWiBNMzIxLDExMiBMMzM1LDExMiBDMzM1LjU1MjI4NSwxMTIgMzM2LDExMS41NTIyODUgMzM2LDExMSBDMzM2LDExMC40NDc3MTUgMzM1LjU1MjI4NSwxMTAgMzM1LDExMCBMMzIxLDExMCBDMzIwLjQ0NzcxNSwxMTAgMzIwLDExMC40NDc3MTUgMzIwLDExMSBDMzIwLDExMS41NTIyODUgMzIwLjQ0NzcxNSwxMTIgMzIxLDExMiBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyMTYgLTEwNCkiLz4KPC9zdmc+Cg=="

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cG9seWdvbiBmaWxsPSIjNUQ2MTY1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iMjcyIDY0IDI2NiA3OSAyNjMuNSA3Ni41IDI2MCA3OSAyNTkgNzUgMjY5IDY2LjUgMjU5IDcyLjUgMjU2IDcwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2IC02NCkiLz4KPC9zdmc+Cg=="

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjNUQ2MTY1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMjUsNjggTDIzOSw2OCBMMjM5LDc4LjAwNDQyMjUgQzIzOSw3OC41NTQyNjQ4IDIzOC41NTAwNTEsNzkgMjM3Ljk5MzE1NSw3OSBMMjI2LjAwNjg0NSw3OSBDMjI1LjQ1MDc4LDc5IDIyNSw3OC41NTUxNjMgMjI1LDc4LjAwNDQyMjUgTDIyNSw2OCBaIE0yMjQsNjYgQzIyNCw2NS40NDc3MTUzIDIyNC40NDQ2MzEsNjUgMjI1LjAwMDg3Miw2NSBMMjM4Ljk5OTEyOCw2NSBDMjM5LjU1MTg5NCw2NSAyNDAsNjUuNDQzODY0OCAyNDAsNjYgTDI0MCw2NyBMMjI0LDY3IEwyMjQsNjYgWiBNMjI5LDcwIEwyMzUsNzAgTDIzNSw3MiBMMjI5LDcyIEwyMjksNzAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyNCAtNjQpIi8+Cjwvc3ZnPgo="

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBmaWxsPSIjOTU5OTlEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjQgLTMyKSI+CiAgICA8cGF0aCBkPSJNMjM4LjI0OTM1NiwzOS4wNzgyOTczIEMyMzguMzAxNDA3LDM5LjMzNzE0MzYgMjM4LjMyNzQzMiwzOS42NDU5NjAyIDIzOC4zMjc0MzIsNDAuMDAzNzQ3OCBDMjM4LjMyNzQzMiw0MC4zNjE1MzUzIDIzOC4zMDE0MDcsNDAuNjY5MzUyNiAyMzguMjQ5MzU2LDQwLjkyOTE5ODMgTDIzOS44Njk5NDYsNDIuMjYyNDA2NyBDMjQwLjAwMDA3NCw0Mi4zNDgzNTU3IDI0MC4wMzIxMDUsNDIuNDY1Mjg2MiAyMzkuOTY4MDQyLDQyLjYxNDE5NzggQzIzOS42NDI3MjMsNDMuNTY0NjMzNSAyMzkuMTA5MTk5LDQ0LjQ0MDExMzcgMjM4LjM2NjQ3LDQ1LjI0MTYzNzggQzIzOC4yNjIzNjgsNDUuMzY1NTY0MiAyMzguMTM3MjQ2LDQ1LjM5NjU0NTggMjM3Ljk5NTEwNiw0NS4zMzU1ODIgTDIzNS45NjQxMTMsNDQuNjY3OTc4NCBDMjM1LjQ0MzYwMiw0NS4wNjM3NDM0IDIzNC44ODQwNTMsNDUuMzcyNTYgMjM0LjI4NDQ2NCw0NS41OTQ0MjgzIEwyMzMuODc1MDYyLDQ3LjU5MzI0MTUgQzIzMy44NDkwMzcsNDcuNzQwMTU0MyAyMzMuNzU3OTQ4LDQ3LjgyNzEwMjcgMjMzLjYwMTc5NCw0Ny44NTIwODc4IEMyMzMuMDQxMjQ0LDQ3Ljk1MjAyODUgMjMyLjUwNzcyMSw0OCAyMzIuMDAwMjIyLDQ4IEMyMzEuNDkyNzI0LDQ4IDIzMC45NTgyLDQ3Ljk1MTAyOTEgMjMwLjM5ODY1MSw0Ny44NTIwODc4IEMyMzAuMjQyNDk3LDQ3LjgyODEwMjEgMjMwLjE1MTQwOCw0Ny43NDExNTM3IDIzMC4xMjUzODIsNDcuNTkzMjQxNSBMMjI5LjcxNTk4MSw0NS41OTQ0MjgzIEMyMjkuMDc3MzU0LDQ1LjM2MDU2NzIgMjI4LjUxNzgwNSw0NS4wNTA3NTExIDIyOC4wMzYzMzIsNDQuNjY3OTc4NCBMMjI2LjAwNTMzOSw0NS4zMzU1ODIgQzIyNS44NjExOTcsNDUuMzk3NTQ1MiAyMjUuNzM4MDc3LDQ1LjM2NTU2NDIgMjI1LjYzMzk3NCw0NS4yNDE2Mzc4IEMyMjQuODkyMjQ2LDQ0LjQ0MDExMzcgMjI0LjM1ODcyMyw0My41NjQ2MzM1IDIyNC4wMzI0MDMsNDIuNjE0MTk3OCBDMjIzLjk2NzMzOSw0Mi40NjYyODU2IDIyNC4wMDAzNzEsNDIuMzQ4MzU1NyAyMjQuMTMwNDk5LDQyLjI2MjQwNjcgTDIyNS43NTEwODksNDAuOTI5MTk4MyBDMjI1LjY5OTAzOCw0MC42NjkzNTI2IDIyNS42NzMwMTMsNDAuMzYyNTM0NyAyMjUuNjczMDEzLDQwLjAwMzc0NzggQzIyNS42NzMwMTMsMzkuNjQ1OTYwMiAyMjUuNjk5MDM4LDM5LjMzNzE0MzYgMjI1Ljc1MTA4OSwzOS4wNzgyOTczIEwyMjQuMTMwNDk5LDM3Ljc0NjA4ODMgQzIyNC4wMDAzNzEsMzcuNjYwMTM5MyAyMjMuOTY3MzM5LDM3LjU0MjIwOTMgMjI0LjAzMjQwMywzNy4zOTQyOTcxIEMyMjQuMzU3NzIyLDM2LjQ0NDg2MDkgMjI0Ljg5MTI0NSwzNS41NjgzODEzIDIyNS42MzM5NzQsMzQuNzY2ODU3MiBDMjI1LjczODA3NywzNC42NDM5MzAyIDIyNS44NjIxOTgsMzQuNjEyOTQ4NiAyMjYuMDA1MzM5LDM0LjY3MzkxMjQgTDIyOC4wMzYzMzIsMzUuMzQwNTE2NiBDMjI4LjUxNjgwNCwzNC45NTc3NDM4IDIyOS4wNzczNTQsMzQuNjQ5OTI2NiAyMjkuNzE1OTgxLDM0LjQxNTA2NjEgTDIzMC4xMjUzODIsMzIuNDE2MjUyOCBDMjMwLjE1MTQwOCwzMi4yNjgzNDA3IDIzMC4yNDI0OTcsMzIuMTgyMzkxNyAyMzAuMzk4NjUxLDMyLjE1NzQwNjUgQzIzMS40NjU2OTgsMzEuOTQ3NTMxMiAyMzIuNTMzNzQ2LDMxLjk0NzUzMTIgMjMzLjYwMDc5MywzMi4xNTc0MDY1IEMyMzMuNzU2OTQ3LDMyLjE4MTM5MjMgMjMzLjg0ODAzNiwzMi4yNjgzNDA3IDIzMy44NzQwNjEsMzIuNDE2MjUyOCBMMjM0LjI4MzQ2MywzNC40MTUwNjYxIEMyMzQuODgzMDUyLDM0LjYzNzkzMzcgMjM1LjQ0MjYwMSwzNC45NDU3NTEgMjM1Ljk2MzExMiwzNS4zNDA1MTY2IEwyMzcuOTk0MTA1LDM0LjY3MzkxMjQgQzIzOC4xMzcyNDYsMzQuNjExOTQ5MiAyMzguMjYxMzY3LDM0LjY0MzkzMDIgMjM4LjM2NTQ3LDM0Ljc2Njg1NzIgQzIzOS4xMDcxOTcsMzUuNTY5MzgwNyAyMzkuNjQwNzIxLDM2LjQ0NDg2MDkgMjM5Ljk2NzA0MSwzNy4zOTQyOTcxIEMyNDAuMDMxMTA0LDM3LjU0MjIwOTMgMjM5Ljk5OTA3MywzNy42NjAxMzkzIDIzOS44Njg5NDUsMzcuNzQ2MDg4MyBMMjM4LjI0OTM1NiwzOS4wNzgyOTczIEwyMzguMjQ5MzU2LDM5LjA3ODI5NzMgWiBNMjMyLDM2LjUgQzIzMC4wNjcxMjUsMzYuNSAyMjguNSwzOC4wNjcxMjUgMjI4LjUsNDAgQzIyOC41LDQxLjkzMjg3NSAyMzAuMDY3MTI1LDQzLjUgMjMyLDQzLjUgQzIzMy45MzI4NzUsNDMuNSAyMzUuNSw0MS45MzI4NzUgMjM1LjUsNDAgQzIzNS41LDM4LjA2NzEyNSAyMzMuOTMyODc1LDM2LjUgMjMyLDM2LjUgTDIzMiwzNi41IFoiLz4KICAgIDxwYXRoIGQ9Ik0yMzguMjQ5MzU2LDM5LjA3ODI5NzMgQzIzOC4zMDE0MDcsMzkuMzM3MTQzNiAyMzguMzI3NDMyLDM5LjY0NTk2MDIgMjM4LjMyNzQzMiw0MC4wMDM3NDc4IEMyMzguMzI3NDMyLDQwLjM2MTUzNTMgMjM4LjMwMTQwNyw0MC42NjkzNTI2IDIzOC4yNDkzNTYsNDAuOTI5MTk4MyBMMjM5Ljg2OTk0Niw0Mi4yNjI0MDY3IEMyNDAuMDAwMDc0LDQyLjM0ODM1NTcgMjQwLjAzMjEwNSw0Mi40NjUyODYyIDIzOS45NjgwNDIsNDIuNjE0MTk3OCBDMjM5LjY0MjcyMyw0My41NjQ2MzM1IDIzOS4xMDkxOTksNDQuNDQwMTEzNyAyMzguMzY2NDcsNDUuMjQxNjM3OCBDMjM4LjI2MjM2OCw0NS4zNjU1NjQyIDIzOC4xMzcyNDYsNDUuMzk2NTQ1OCAyMzcuOTk1MTA2LDQ1LjMzNTU4MiBMMjM1Ljk2NDExMyw0NC42Njc5Nzg0IEMyMzUuNDQzNjAyLDQ1LjA2Mzc0MzQgMjM0Ljg4NDA1Myw0NS4zNzI1NiAyMzQuMjg0NDY0LDQ1LjU5NDQyODMgTDIzMy44NzUwNjIsNDcuNTkzMjQxNSBDMjMzLjg0OTAzNyw0Ny43NDAxNTQzIDIzMy43NTc5NDgsNDcuODI3MTAyNyAyMzMuNjAxNzk0LDQ3Ljg1MjA4NzggQzIzMy4wNDEyNDQsNDcuOTUyMDI4NSAyMzIuNTA3NzIxLDQ4IDIzMi4wMDAyMjIsNDggQzIzMS40OTI3MjQsNDggMjMwLjk1ODIsNDcuOTUxMDI5MSAyMzAuMzk4NjUxLDQ3Ljg1MjA4NzggQzIzMC4yNDI0OTcsNDcuODI4MTAyMSAyMzAuMTUxNDA4LDQ3Ljc0MTE1MzcgMjMwLjEyNTM4Miw0Ny41OTMyNDE1IEwyMjkuNzE1OTgxLDQ1LjU5NDQyODMgQzIyOS4wNzczNTQsNDUuMzYwNTY3MiAyMjguNTE3ODA1LDQ1LjA1MDc1MTEgMjI4LjAzNjMzMiw0NC42Njc5Nzg0IEwyMjYuMDA1MzM5LDQ1LjMzNTU4MiBDMjI1Ljg2MTE5Nyw0NS4zOTc1NDUyIDIyNS43MzgwNzcsNDUuMzY1NTY0MiAyMjUuNjMzOTc0LDQ1LjI0MTYzNzggQzIyNC44OTIyNDYsNDQuNDQwMTEzNyAyMjQuMzU4NzIzLDQzLjU2NDYzMzUgMjI0LjAzMjQwMyw0Mi42MTQxOTc4IEMyMjMuOTY3MzM5LDQyLjQ2NjI4NTYgMjI0LjAwMDM3MSw0Mi4zNDgzNTU3IDIyNC4xMzA0OTksNDIuMjYyNDA2NyBMMjI1Ljc1MTA4OSw0MC45MjkxOTgzIEMyMjUuNjk5MDM4LDQwLjY2OTM1MjYgMjI1LjY3MzAxMyw0MC4zNjI1MzQ3IDIyNS42NzMwMTMsNDAuMDAzNzQ3OCBDMjI1LjY3MzAxMywzOS42NDU5NjAyIDIyNS42OTkwMzgsMzkuMzM3MTQzNiAyMjUuNzUxMDg5LDM5LjA3ODI5NzMgTDIyNC4xMzA0OTksMzcuNzQ2MDg4MyBDMjI0LjAwMDM3MSwzNy42NjAxMzkzIDIyMy45NjczMzksMzcuNTQyMjA5MyAyMjQuMDMyNDAzLDM3LjM5NDI5NzEgQzIyNC4zNTc3MjIsMzYuNDQ0ODYwOSAyMjQuODkxMjQ1LDM1LjU2ODM4MTMgMjI1LjYzMzk3NCwzNC43NjY4NTcyIEMyMjUuNzM4MDc3LDM0LjY0MzkzMDIgMjI1Ljg2MjE5OCwzNC42MTI5NDg2IDIyNi4wMDUzMzksMzQuNjczOTEyNCBMMjI4LjAzNjMzMiwzNS4zNDA1MTY2IEMyMjguNTE2ODA0LDM0Ljk1Nzc0MzggMjI5LjA3NzM1NCwzNC42NDk5MjY2IDIyOS43MTU5ODEsMzQuNDE1MDY2MSBMMjMwLjEyNTM4MiwzMi40MTYyNTI4IEMyMzAuMTUxNDA4LDMyLjI2ODM0MDcgMjMwLjI0MjQ5NywzMi4xODIzOTE3IDIzMC4zOTg2NTEsMzIuMTU3NDA2NSBDMjMxLjQ2NTY5OCwzMS45NDc1MzEyIDIzMi41MzM3NDYsMzEuOTQ3NTMxMiAyMzMuNjAwNzkzLDMyLjE1NzQwNjUgQzIzMy43NTY5NDcsMzIuMTgxMzkyMyAyMzMuODQ4MDM2LDMyLjI2ODM0MDcgMjMzLjg3NDA2MSwzMi40MTYyNTI4IEwyMzQuMjgzNDYzLDM0LjQxNTA2NjEgQzIzNC44ODMwNTIsMzQuNjM3OTMzNyAyMzUuNDQyNjAxLDM0Ljk0NTc1MSAyMzUuOTYzMTEyLDM1LjM0MDUxNjYgTDIzNy45OTQxMDUsMzQuNjczOTEyNCBDMjM4LjEzNzI0NiwzNC42MTE5NDkyIDIzOC4yNjEzNjcsMzQuNjQzOTMwMiAyMzguMzY1NDcsMzQuNzY2ODU3MiBDMjM5LjEwNzE5NywzNS41NjkzODA3IDIzOS42NDA3MjEsMzYuNDQ0ODYwOSAyMzkuOTY3MDQxLDM3LjM5NDI5NzEgQzI0MC4wMzExMDQsMzcuNTQyMjA5MyAyMzkuOTk5MDczLDM3LjY2MDEzOTMgMjM5Ljg2ODk0NSwzNy43NDYwODgzIEwyMzguMjQ5MzU2LDM5LjA3ODI5NzMgTDIzOC4yNDkzNTYsMzkuMDc4Mjk3MyBaIE0yMzIsMzYuNSBDMjMwLjA2NzEyNSwzNi41IDIyOC41LDM4LjA2NzEyNSAyMjguNSw0MCBDMjI4LjUsNDEuOTMyODc1IDIzMC4wNjcxMjUsNDMuNSAyMzIsNDMuNSBDMjMzLjkzMjg3NSw0My41IDIzNS41LDQxLjkzMjg3NSAyMzUuNSw0MCBDMjM1LjUsMzguMDY3MTI1IDIzMy45MzI4NzUsMzYuNSAyMzIsMzYuNSBMMjMyLDM2LjUgWiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjOTU5OTlEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMjQsMTMxIEMyMjQsMTMwLjQ0NzcxNSAyMjQuNDQ0NjMxLDEzMCAyMjUuMDAwODcyLDEzMCBMMjM4Ljk5OTEyOCwxMzAgQzIzOS41NTE4OTQsMTMwIDI0MCwxMzAuNDQzODY1IDI0MCwxMzEgQzI0MCwxMzEuNTUyMjg1IDIzOS41NTUzNjksMTMyIDIzOC45OTkxMjgsMTMyIEwyMjUuMDAwODcyLDEzMiBDMjI0LjQ0ODEwNiwxMzIgMjI0LDEzMS41NTYxMzUgMjI0LDEzMSBaIE0yMjQsMTQxIEMyMjQsMTQwLjQ0NzcxNSAyMjQuNDQ0NjMxLDE0MCAyMjUuMDAwODcyLDE0MCBMMjM4Ljk5OTEyOCwxNDAgQzIzOS41NTE4OTQsMTQwIDI0MCwxNDAuNDQzODY1IDI0MCwxNDEgQzI0MCwxNDEuNTUyMjg1IDIzOS41NTUzNjksMTQyIDIzOC45OTkxMjgsMTQyIEwyMjUuMDAwODcyLDE0MiBDMjI0LjQ0ODEwNiwxNDIgMjI0LDE0MS41NTYxMzUgMjI0LDE0MSBaIE0yMjQsMTM2IEMyMjQsMTM1LjQ0NzcxNSAyMjQuNDQ0NjMxLDEzNSAyMjUuMDAwODcyLDEzNSBMMjM4Ljk5OTEyOCwxMzUgQzIzOS41NTE4OTQsMTM1IDI0MCwxMzUuNDQzODY1IDI0MCwxMzYgQzI0MCwxMzYuNTUyMjg1IDIzOS41NTUzNjksMTM3IDIzOC45OTkxMjgsMTM3IEwyMjUuMDAwODcyLDEzNyBDMjI0LjQ0ODEwNiwxMzcgMjI0LDEzNi41NTYxMzUgMjI0LDEzNiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0IC0xMjgpIi8+Cjwvc3ZnPgo="

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMicgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPScjMjk3RUYyJz4KICA8cGF0aCBvcGFjaXR5PScuMjUnIGQ9J00xNiAwYTE2IDE2IDAgMCAwIDAgMzIgMTYgMTYgMCAwIDAgMC0zMm0wIDRhMTIgMTIgMCAwIDEgMCAyNCAxMiAxMiAwIDAgMSAwLTI0Jy8+CiAgPHBhdGggZD0nTTE2IDBhMTYgMTYgMCAwIDEgMTYgMTZoLTRhMTIgMTIgMCAwIDAtMTItMTJ6Jy8+Cjwvc3ZnPgo="

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=cozy-bar.mobile.js.map