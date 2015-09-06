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

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = function() {\n\n        var enabled = true;\n        var verbose = true;\n\n        var tracesEnabled = [\"VIDEO\", \"SCENE\", \"APPLICATION\", \"BACKGROUND\",\"ERROR\",\"USER\",\"CONTENT\",\"MENU\"];\n        // tracesEnabled = [\"APPLICATION\"];\n        var colors = {};\n\n        colors[\"APPLICATION\"] = \"color:yellow; background:#888888;\";\n        colors[\"VIDEO\"] = \"color:purple; background:#dddddd;\";\n        colors[\"SCENE\"] = \"color:green; background:#dddddd;\";\n        colors[\"BACKGROUND\"] = \"color:blue; background:#dddddd;\";\n        colors[\"CLICKZONE\"] = \"color:tomato; background:#dddddd;\";\n        colors[\"ERROR\"] = \"color:red; background:#dddddd;\";\n        colors[\"USER\"] = \"color:magenta; background:#dddddd;\";\n        colors[\"CONTENT\"] = \"color:navy; background:#dddddd;\";\n        colors[\"MENU\"] = \"color:seagreen; background:#dddddd;\";\n\n\n\n        var constructor = function Log() {};\n\n        var first = true;\n\n        constructor.prototype.g= function(o) {\n\n            if(enabled && first){\n                console.log(\"* LOG COLOR CODES *\");\n                  for (var type in colors) {\n                     if (tracesEnabled.indexOf(type) != -1) {\n                        var clr = colors[type];\n                        console.log(\"%c >> \" + type + \": \" + clr.split(\";\")[0].split(\":\")[1], clr);\n                    }\n                  }\n                    console.log(\"\");\n            }\n\n            first = false;\n\n            if (enabled && arguments.length == 1) {\n                console.log(o);\n            } else if (enabled && arguments.length == 2) {\n                var type = arguments[0];\n                if (tracesEnabled.indexOf(type) != -1) {\n                    var isString = false;\n                    if (typeof arguments[1] == 'string' || typeof arguments[1] == 'boolean' || typeof arguments[1] == 'number') isString = true;\n\n                    if (isString) {\n\n                        console.log(\"%c ++ \" + arguments[1] + \" ++ \", colors[type]);\n\n                    } else {\n                        if(verbose) return;\n                        console.log(\"%c ++ \"+ typeof arguments[1] +\" \", colors[type]);\n                        console.log(arguments[1]);\n                        console.log(\"%c\" + \" ++ \", colors[type]);\n                    }\n                }\n            } else if (enabled && arguments.length > 2) {\n                var type = arguments[0];\n                if (tracesEnabled.indexOf(type) != -1) {\n\n                    for (var i = 1, j = arguments.length; i < j; i++) {\n\n                        var isString = false;\n                        if (typeof arguments[i] == 'string' || typeof arguments[i] == 'boolean' || typeof arguments[i] == 'number') isString = true;\n\n                        if (isString) {\n                            if (i == 1) {\n                                if(verbose){\n                                     console.log(\"%c ++ \" + arguments[i] + \" ++ \", colors[type]);\n                                }else{\n                                    console.log(\"%c ++ \" + arguments[i], colors[type]); \n                                }\n                               \n                            } else {\n                                console.log(\"%c\" + arguments[i], colors[type]);\n                            }\n                        } else {\n                            if(verbose) return;\n                            if (i == 1) {\n                                console.log(\"%c ++ OBJECT: \", colors[type]);\n                            } else {\n                                console.log(arguments[i]);\n                            }\n                        }\n\n                    }\n                    console.log(\"%c\" + \" ++ \", colors[type]);\n\n                }\n            }\n\n        }\n\n        return constructor;\n\n }\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/main.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/main.js?");

/***/ }
/******/ ]);