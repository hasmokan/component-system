import checkbox from './checkbox.vue'
import checkboxGroup from './checkboxGroup.vue'
export const Checkbox= function(Vue){
    Vue.component(checkbox.name,checkbox)
}
export const CheckboxGroup= function(Vue){
    Vue.component(checkboxGroup.name,checkboxGroup)
}