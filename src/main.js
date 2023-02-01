import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiInput from "./components/Input/input"
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.component(emuiInput.name,emuiInput)

new Vue({
  render: h => h(App),
}).$mount('#app')
