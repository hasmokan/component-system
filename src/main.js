import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.component(emuiInput.name,emuiInput)
Vue.component(emuiRadio.name,emuiRadio)
Vue.component(emuiRadioButton.name,emuiRadioButton)
Vue.component(emuiRadioGroup.name,emuiRadioGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
