// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import emuiButton from "./components/Button/button"

import Message from "./components/Message/index"


Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
// Vue.use(Message)

import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiIcon from "./components/Icon/icon.vue"
import emuiNav from "./components/Nav/nav"
import emuiNavItem from "./components/Nav/nav-item"
import emuiSubNav from "./components/Nav/sub-nav"
import emuiForm from "./components/Form/form"
import emuiFormItem from "./components/Form/formItem"
import emuiCheckBox from "./components/CheckBox/checkbox"
import emuiCheckBoxGroup from "./components/CheckBox/checkboxGroup"
import emuiSelect from "./components/Select/select"
import emuiOption from "./components/Select/option"
import "@/assets/iconfont/iconfont.css"
import "./components/Icon/icon.js"



Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiInput.name, emuiInput)
Vue.component(emuiRadio.name, emuiRadio)
Vue.component(emuiRadioButton.name, emuiRadioButton)

Vue.component(emuiRadioGroup.name, emuiRadioGroup)
Vue.component(emuiForm.name, emuiForm)
Vue.component(emuiFormItem.name, emuiFormItem)
Vue.component(emuiCheckBox.name, emuiCheckBox)
Vue.component(emuiCheckBoxGroup.name, emuiCheckBoxGroup)
Vue.component(emuiIcon.name, emuiIcon)

Vue.component(emuiNavItem.name, emuiNavItem)
Vue.component(emuiNav.name, emuiNav)
Vue.component(emuiSubNav.name, emuiSubNav)




Vue.prototype.$notice = Message;
Vue.component(emuiSelect.name, emuiSelect)
Vue.component(emuiOption.name, emuiOption)


new Vue({
  render: h => h(App),
}).$mount('#app')
