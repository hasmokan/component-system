import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiSwitch from "./components/Switch/switch"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.component(emuiSwitch.name,emuiSwitch)

new Vue({
  render: h => h(App),
}).$mount('#app')
