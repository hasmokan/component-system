// import Vue from 'vue'
import Vue from 'vue'
import Button from "./components/Button"
import Input from "./components/Input"
import checkbox from "./components/CheckBox"
import form from "./components/Form"
import radio from "./components/Radio"
import select from "./components/Select"
import table from "./components/Table"
import tag from "./components/Tag"
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false
const components = {
  'emui-button': Button,
  'emui-input':Input,
  'emui-checkbox':checkbox,
  'emui-checkbox-group':checkbox.item,
  'emui-form':form,
  'emui-form-item':form.item,
  'emui-radio':radio,
  'emui-radio-button':radio.button,
  'emui-radio-group':radio.item,
  'emui-select':select,
  'emui-option':select.item,
  'emui-table':table,
  'emui-tag':tag,
  'emui-tag-list':tag.group
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

}

export default install