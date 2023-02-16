// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import emuiButton from "./components/Button/button"

import Message from "./components/Message/index"


Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
// Vue.use(Message)

import emuiDialog from "./components/dialog/dialog"
import emuiInput from "./components/Input/input.vue"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiNav from "./components/Nav/nav"
import emuiNavItem from "./components/Nav/nav-item"
import emuiSubNav from "./components/Nav/sub-nav"
import emuiSwitch from "./components/switch/index"

// import "@/assets/iconfont/iconfont.css"
// import "./components/Icon/icon.js"
// import emuiLink from "./components/Link/link"
// import emuiIcon from "./components/Icon/icon.vue"

Vue.config.productionTip = false
Vue.component(emuiButton.name, emuiButton)
Vue.component(emuiDialog.name, emuiDialog)
Vue.component(emuiInput.name, emuiInput)

Vue.component(emuiRadio.name, emuiRadio)
Vue.component(emuiRadioButton.name, emuiRadioButton)
Vue.component(emuiRadioGroup.name, emuiRadioGroup)
Vue.component(emuiSwitch.name, emuiSwitch)

Vue.prototype.$notice = Message;

Vue.component(emuiNavItem.name, emuiNavItem)
Vue.component(emuiNav.name, emuiNav)
Vue.component(emuiSubNav.name, emuiSubNav)

// Vue.component(emuiLink.name, emuiLink)
// Vue.component(emuiIcon.name, emuiIcon)


new Vue({
    render: h => h(App),
}).$mount('#app')
