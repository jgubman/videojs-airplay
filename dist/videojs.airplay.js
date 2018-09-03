(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var Component = _videoJs2['default'].getComponent('Component');
var Button = _videoJs2['default'].getComponent('Button');
var registerPlugin = _videoJs2['default'].registerPlugin || _videoJs2['default'].plugin;

var AirplayToggle = (function (_Button) {
  _inherits(AirplayToggle, _Button);

  function AirplayToggle(player, options) {
    _classCallCheck(this, AirplayToggle);

    _get(Object.getPrototypeOf(AirplayToggle.prototype), 'constructor', this).call(this, player, options);
  }

  _createClass(AirplayToggle, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'vjs-airplay-control ' + _get(Object.getPrototypeOf(AirplayToggle.prototype), 'buildCSSClass', this).call(this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.player().el().getElementsByTagName('video')[0].webkitShowPlaybackTargetPicker();
      this.player().trigger('airplayStart');
    }
  }]);

  return AirplayToggle;
})(Button);

AirplayToggle.prototype.controlText_ = 'Airplay';
_videoJs2['default'].registerComponent('AirplayToggle', AirplayToggle);

var AirplayButton = function AirplayButton(options) {
  var player = this;

  if (window.WebKitPlaybackTargetAvailabilityEvent) {
    var videoEl = player.el().getElementsByTagName('video')[0];

    videoEl.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
      switch (event.availability) {
        case "available":

          player.on('loadeddata', function () {
            if (!player.controlBar.childNameIndex_.hasOwnProperty('AirplayToggle')) {
              var AirplayToggle = this.controlBar.addChild('AirplayToggle', options);
              player.controlBar.el().insertBefore(AirplayToggle.el(), player.controlBar.fullscreenToggle.el());
            }
          });
          break;

        case "not-available":
          break;
      }
    });
  };
};

registerPlugin('airplayButton', AirplayButton);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
