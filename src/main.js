// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import Message from "./components/message/index"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.use(Message)

new Vue({
  render: h => h(App),
}).$mount('#app')
