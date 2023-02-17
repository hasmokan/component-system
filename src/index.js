// import Vue from 'vue'
import Vue from 'vue'

import Input from "./components/Input"
import checkbox from "./components/CheckBox"
import form from "./components/Form"
import radio from "./components/Radio"
import select from "./components/select"
import table from "./components/table";
import Switch from "./components/switch"
import nav from './components/Nav/nav'
import navItem from './components/Nav/nav-item'
import subNav from './components/Nav/sub-nav'
import dialog from './components/dialog/dialog'
import Button from "./components/Button"
import icon from './components/icon'
import link from './components/Link/link.js'
import "./assets/iconfont/iconfont.css"
import tag from './components/Tag'
import message from "./components/Message"

Vue.config.productionTip = false
const components = {
  'emui-nav': nav,
  'emui-nav-item': navItem,
  'emui-sub-nav': subNav,
  'emui-dialog': dialog,
  'emui-button': Button,
  'emui-switch': Switch,
  'emui-icon': icon,
  'emui-link': link,
  'emui-input': Input,
  'emui-checkbox': checkbox,
  'emui-checkbox-group': checkbox.item,
  'emui-form': form,
  'emui-form-item': form.item,
  'emui-radio': radio,
  'emui-radio-button': radio.button,
  'emui-radio-group': radio.item,
  'emui-select': select,
  'emui-option': select.item,
  'emui-table': table,
  'emui-tag':tag,
  'emui-tag-list':tag.group
}


const install = function (Vue,options={}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
  Vue.prototype.$notice = message;

}

export default install