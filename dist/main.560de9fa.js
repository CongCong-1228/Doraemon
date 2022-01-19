// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "<style>\n.head {\n    height: 300px;\n    width: 300px;\n    border: 1px solid black;\n    position: relative;\n    left: 50%;\n    top: 100px;\n    margin-left: -150px;\n    border-radius: 50%;\n    background: #1E90FF;\n}\n.head .eye {\n    height: 90px;\n    width: 70px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    top: 50px;\n    margin-left: -35px;\n    border-radius: 46%;\n    position: absolute;\n    background: #fff;\n    z-index: 1;\n}\n.head .eye.left {\n    transform: translateX(-34px);\n}\n.head .eye.right {\n    transform: translateX(34px);\n    \n}\n.eyeball {\n    height: 18px;\n    width: 18px;\n    position: absolute;\n    border-radius: 50%;\n    background: black;\n}\n.eyeball.left{\n    right: 10px;\n    top: 60px;\n}\n.eyeball.right{\n    left: 10px;\n    top: 60px;\n}\n.face {\n    height: 220px;\n    width: 250px;\n    border: 1px solid black;\n    position: relative;\n    left: 50%;\n    margin-left: -125px;\n    bottom: -79px;\n    border-radius: 50%;\n    background: #fff;\n}\n.nose {\n    height: 40px;\n    width: 40px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    margin-left: -20px;\n    top: 45px;\n    border-radius: 50%;\n    background: red;\n}\n.nose::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    right: 5px;\n    top: 5px;\n    background: white;\n    border-radius: 50%;\n}\n.noseline {\n    height: 85px;\n    width: 0px;\n    \n    border: .1px solid black;\n    position: relative;\n    left: 50%;\n    top: 44px;\n}\n.lines {\n    height: 100px;\n    width: 100px;\n    position: relative;\n    left: 50%;\n    margin-left: -50px;\n    bottom: 25px;\n}\n.lines.left {\n    transform: translateX(-50px) translateY(-55px);\n}\n.lines.right {\n    transform: translateX(50px) translateY(-155px);\n}\n.lines.left .line1 {\n   border: .1px solid black;\n    height: 0px;\n    width:70px ;\n    position: absolute;\n    top: 50%;\n    left: 0;\n}\n.lines.left .line2 {\n    border: .1px solid black;\n    height: 0px;\n    width:70px ;\n    position: absolute;\n    top: 50%;\n    transform: translateY(10px) rotate(-15deg);\n    transform-origin: right;\n    left: 0;\n}\n.lines.left .line3 {\n    border: .1px solid black;\n    height: 0px;\n    width: 70px ;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-10px) rotate(15deg);\n    transform-origin: right;\n    left: 0;\n}\n.lines.right .line1 {\n   border: .1px solid black;\n    height: 0px;\n    width:70px ;\n    position: absolute;\n    top: 50%;\n    right: 0;\n}\n.lines.right .line2 {\n    border: .1px solid black;\n    height: 0px;\n    width:70px ;\n    position: absolute;\n    top: 50%;\n    transform: translateY(10px) rotate(15deg);\n    transform-origin: left;\n    right: 0;\n}\n.lines.right .line3 {\n    border: .1px solid black;\n    height: 0px;\n    width: 70px ;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-10px) rotate(-15deg);\n    transform-origin: left;\n    right: 0;\n}\n.face .mouth {\n    height: 150px;\n    width: 180px;\n    border-bottom: 2px solid #000;\n    position: absolute;\n    left: 50%;\n    margin-left: -90px;\n    bottom: 49px;\n    border-radius: 0 0 45% 45%;\n  \n}\n.neck {\n    height: 40px;\n    width: 180px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    margin-left: -90px;\n    bottom: -40px;\n    background: red;\n}\n.neck::before {\n    content: '';\n    display: block;\n    border:2px solid black;\n    border-right: transparent;\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    left: -20px;\n    border-radius: 50% 0 0 50%;\n    top: -2px;\n    background: red;\n}\n.neck::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    border-left: transparent;\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    right: -20px;\n    border-radius: 0 50% 50% 0;\n    top: -2px;\n    background: red;\n}\n.bell {\n    border: 2px solid black;\n    height: 40px;\n    width: 40px;\n    position: relative;\n    left: 50%;\n    margin-left: -20px;\n    bottom: -20px;\n    background: yellow;\n    border-radius: 50%;\n    overflow: hidden;\n    animation: swing linear 1s infinite;\n    transform-origin: top;\n}\n\n.bell .line1 {\n    \n    width: 50px;\n    height: 1px;\n    background: black;\n    position: absolute;\n    top: 6px\n}\n.bell .line2 {\n    width: 40px;\n    height: 2px;\n    background: black;\n    position: absolute;\n    top: 11px\n}\n.bell .circle {\n    width: 10px;\n    height: 5px;\n    border: 2px solid black;\n    left: 50%;\n    position: absolute;\n    margin-left: -5px;\n    top: 50%;\n    border-radius: 50%;\n    background: black;\n}\n.bell .line3 {\n    height: 18px;\n    width: 1px;\n    background: black;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -.5px;   \n}\n@keyframes swing {\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(-30deg);\n    }\n    66% {\n        transform: rotate(30deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n</style>";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var time = 100;

var play = function play() {
  n++;
  var demo1 = document.querySelector('#demo1');
  var demo2 = document.querySelector('#demo2');
  demo1.innerHTML = _css.default.substring(0, n);
  demo2.innerText = _css.default.substring(0, n);

  if (n > _css.default.length) {
    window.clearInterval(id);
  }

  demo2.scrollTop = demo2.scrollHeight;
};

var id = setInterval(play, time);
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');

btn1.onclick = function () {
  window.clearInterval(id);
};

btn2.onclick = function () {
  id = setInterval(play, time);
};

btn3.onclick = function () {
  time = 300;
  window.clearInterval(id);
  id = setInterval(play, time);
};

btn4.onclick = function () {
  time = 100;
  window.clearInterval(id);
  id = setInterval(play, time);
};

btn5.onclick = function () {
  time = 0;
  window.clearInterval(id);
  id = setInterval(play, time);
};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.560de9fa.js.map