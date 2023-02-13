// import Vue from 'vue'
import Vue from 'vue'
import Button from "./components/Button"
import Input from "./components/Input"
import checkbox from "./components/CheckBox"
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false
const components = {
  'emui-button': Button,
  'emui-input':Input,
  'emui-checkbox':checkbox
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

}

export default install