// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import emuiButton from "./components/Button/button"

import Message from "./components/Message/index"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
// Vue.use(Message)

import emuiDialog from "./components/dialog/dialog"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiIcon from "./components/Icon/icon.vue"
import emuiNav from "./components/Nav/nav"
import emuiNavItem from "./components/Nav/nav-item"
import emuiSubNav from "./components/Nav/sub-nav"
import "@/assets/iconfont/iconfont.css"
import "./components/Icon/icon.js"



Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiDialog.name, emuiDialog)
Vue.component(emuiInput.name, emuiInput)

Vue.component(emuiRadio.name, emuiRadio)
Vue.component(emuiRadioButton.name, emuiRadioButton)
Vue.component(emuiRadioGroup.name, emuiRadioGroup)
Vue.component(emuiIcon.name, emuiIcon)

Vue.component(emuiNavItem.name, emuiNavItem)
Vue.component(emuiNav.name, emuiNav)
Vue.component(emuiSubNav.name, emuiSubNav)




Vue.prototype.$notice = Message;

new Vue({
  render: h => h(App),
}).$mount('#app')
