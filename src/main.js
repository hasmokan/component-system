import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiDialog from "./components/dialog/dialog"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiIcon from "./components/Icon/icon.vue"
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

new Vue({
  render: h => h(App),
}).$mount('#app')
