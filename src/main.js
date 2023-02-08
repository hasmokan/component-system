// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import emuiButton from "./components/Button/button"
<<<<<<< HEAD
import Message from "./components/message/index"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.use(Message)
=======
import emuiDialog from "./components/dialog/dialog"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiDialog.name, emuiDialog)
Vue.component(emuiInput.name, emuiInput)
Vue.component(emuiRadio.name, emuiRadio)
Vue.component(emuiRadioButton.name, emuiRadioButton)
Vue.component(emuiRadioGroup.name, emuiRadioGroup)
>>>>>>> de80b344a340c07821428e2c882edf15c657b3df

new Vue({
  render: h => h(App),
}).$mount('#app')
