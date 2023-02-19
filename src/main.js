import Vue from 'vue'
import App from './App.vue'
// 
import {Button,Input,Checkbox,Tag,TagList,Radio,RadioButton,RadioGroup} from "emui"
import "emui/dist/css/index.css"
Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Tag)
Vue.use(TagList)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)


new Vue({
  render: h => h(App),
}).$mount('#app')
