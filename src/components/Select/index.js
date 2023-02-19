import select from './select.vue'
import option from './option.vue'
export const Select=function(Vue){
    Vue.component(select.name,select)
 }
 export const Option=function(Vue){
    Vue.component(option.name,option)
 }