"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _Input = _interopRequireDefault(require("./components/Input"));

var _CheckBox = _interopRequireDefault(require("./components/CheckBox"));

var _Form = _interopRequireDefault(require("./components/Form"));

var _Radio = _interopRequireDefault(require("./components/Radio"));

var _select = _interopRequireDefault(require("./components/select"));

var _table = _interopRequireDefault(require("./components/table"));

var _switch = _interopRequireDefault(require("./components/switch"));

var _nav = _interopRequireDefault(require("./components/Nav/nav"));

var _navItem = _interopRequireDefault(require("./components/Nav/nav-item"));

var _subNav = _interopRequireDefault(require("./components/Nav/sub-nav"));

var _dialog = _interopRequireDefault(require("./components/dialog/dialog"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _icon = _interopRequireDefault(require("./components/icon"));

require("./assets/iconfont/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Vue from 'vue'
_vue["default"].config.productionTip = false;
var components = {
  'emui-nav': _nav["default"],
  'emui-nav-item': _navItem["default"],
  'emui-sub-nav': _subNav["default"],
  'emui-dialog': _dialog["default"],
  'emui-button': _Button["default"],
  'emui-switch': _switch["default"],
  'emui-icon': _icon["default"],
  'emui-input': _Input["default"],
  'emui-checkbox': _CheckBox["default"],
  'emui-checkbox-group': _CheckBox["default"].item,
  'emui-form': _Form["default"],
  'emui-form-item': _Form["default"].item,
  'emui-radio': _Radio["default"],
  'emui-radio-button': _Radio["default"].button,
  'emui-radio-group': _Radio["default"].item,
  'emui-select': _select["default"],
  'emui-option': _select["default"].item,
  'emui-table': _table["default"]
};

var install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.keys(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });
};

var _default = install;
exports["default"] = _default;