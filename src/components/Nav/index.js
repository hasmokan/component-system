
import nav from "./nav.vue";
import navItem from './nav-item.vue'
import subnav from './sub-nav.vue'
 export const Nav=function(Vue){
    Vue.component(nav.name,nav)
 }
 export const NavItem=function(Vue){
    Vue.component(navItem.name,navItem)
 }
 export const Subnav=function(Vue){
    Vue.component(subnav.name,subnav)
 }