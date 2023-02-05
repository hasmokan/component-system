import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiDialog from "./components/dialog/dialog"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiNav from "./components/Nav/nav"
import emuiNavItem from "./components/Nav/nav-item"
import emuiSubNav from "./components/Nav/sub-nav"
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiDialog.name, emuiDialog)
Vue.component(emuiInput.name, emuiInput)

Vue.component(emuiRadio.name, emuiRadio)
Vue.component(emuiRadioButton.name, emuiRadioButton)
Vue.component(emuiRadioGroup.name, emuiRadioGroup)

Vue.component(emuiNavItem.name, emuiNavItem)
Vue.component(emuiNav.name, emuiNav)
Vue.component(emuiSubNav.name, emuiSubNav)



new Vue({
  render: h => h(App),
}).$mount('#app')
