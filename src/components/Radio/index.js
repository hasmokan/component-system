import radio from './radio.vue'
import radioGroup from './RadioGroup.vue'
import radioButton from './RadioButton.vue'
export const Radio=function(Vue){
    Vue.component(radio.name,radio)
 }
 export const RadioGroup=function(Vue){
    Vue.component(radioGroup.name,radioGroup)
 }
 export const RadioButton=function(Vue){
    Vue.component(radioButton.name,radioButton)
 }