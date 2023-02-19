import form from'./form.vue'
import formItem from './formItem.vue'
export const Form=function(Vue){
    Vue.component(form.name,form)
}
export const FormItem=function(Vue){
    Vue.component(formItem.name,formItem)
}