import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiDialog from "./components/dialog/dialog"

Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiDialog.name, emuiDialog)
new Vue({
  render: h => h(App),
}).$mount('#app')
