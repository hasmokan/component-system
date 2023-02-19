import tag from './tag.vue'
import tagList from './tagList.vue'
export const Tag=function(Vue){
    Vue.component(tag.name,tag)
 }
 export const TagList=function(Vue){
    Vue.component(tagList.name,tagList)
 }