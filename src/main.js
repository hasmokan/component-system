import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
