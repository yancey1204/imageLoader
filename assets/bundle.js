/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _imageLoaderController = __webpack_require__(1);

	var _imageLoaderController2 = _interopRequireDefault(_imageLoaderController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener('DOMContentLoaded', function () {
	  var imgCtrl = new _imageLoaderController2.default();
	  imgCtrl.loadImage();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _imageLoader = __webpack_require__(2);

	var _imageLoader2 = _interopRequireDefault(_imageLoader);

	var _imageView = __webpack_require__(3);

	var _imageView2 = _interopRequireDefault(_imageView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageLoaderCtrl = function () {
	  function ImageLoaderCtrl() {
	    _classCallCheck(this, ImageLoaderCtrl);
	  }

	  _createClass(ImageLoaderCtrl, [{
	    key: 'initialize',
	    value: function initialize() {
	      return {
	        cube: './img/cube.jpg',
	        vase: './img/vase.jpg'
	      };
	    }
	  }, {
	    key: 'loadImage',
	    value: function loadImage() {
	      var imgLoader = new _imageLoader2.default();
	      var imgView = new _imageView2.default();
	      var imageObj = this.initialize();

	      imgLoader.load(imageObj).then(function (images) {
	        images.forEach(function (image) {
	          imgView.renderImage(image);
	        });
	      }, function (msg) {
	        imgView.renderError(msg);
	      });
	    }
	  }]);

	  return ImageLoaderCtrl;
	}();

	exports.default = ImageLoaderCtrl;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageLoader = function () {
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);

	    this.store = [];
	  }

	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(imagesObj) {
	      var _this = this;

	      var counter = 0;
	      var total = 0;

	      return new Promise(function (resolve, reject) {
	        Object.getOwnPropertyNames(imagesObj).forEach(function (imgKey) {
	          total++;
	          var img = new Image();

	          img.src = imagesObj[imgKey];

	          img.onload = function () {
	            counter++;
	            _this.store.push(img);
	            if (counter === total) {
	              resolve(_this.store);
	            }
	          };

	          img.onerror = function () {
	            reject('error');
	          };
	        });
	      });
	    }
	  }]);

	  return ImageLoader;
	}();

	exports.default = ImageLoader;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	  }

	  _createClass(View, [{
	    key: 'renderLoading',
	    value: function renderLoading() {
	      var msg = document.createElement('p');
	      msg.innerHTML = 'loading';
	      document.body.appendChild(msg);
	    }
	  }, {
	    key: 'renderImage',
	    value: function renderImage(imgObj) {
	      document.body.appendChild(imgObj);
	    }
	  }, {
	    key: 'renderError',
	    value: function renderError(errMsg) {
	      var msg = document.createElement('p');
	      msg.innerHTML = 'an error occured when loading images ' + errMsg;
	      document.body.appendChild(msg);
	    }
	  }]);

	  return View;
	}();

	exports.default = View;

/***/ }
/******/ ]);