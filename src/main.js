import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiInput from "./components/Input/input"
<<<<<<< HEAD
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
=======
import emuiForm from "./components/Form/form"
import emuiFormItem from "./components/Form/formItem"
>>>>>>> 825bf0d78215bf25c53b9fc126e549504d08b47c
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.component(emuiInput.name,emuiInput)
<<<<<<< HEAD
Vue.component(emuiRadio.name,emuiRadio)
Vue.component(emuiRadioButton.name,emuiRadioButton)
Vue.component(emuiRadioGroup.name,emuiRadioGroup)
=======
Vue.component(emuiForm.name,emuiForm)
Vue.component(emuiFormItem.name,emuiFormItem)
>>>>>>> 825bf0d78215bf25c53b9fc126e549504d08b47c

new Vue({
  render: h => h(App),
}).$mount('#app')
