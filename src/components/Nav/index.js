// import form from './form.vue'
// import formItem from './formItem.vue'
// form.item=formItem
// export default form

import nav from "./nav.vue";
import navItem from './nav-item.vue'
import subnav from './sub-nav.vue'

nav.itemNavitem = navItem
nav.itemSubnav = subnav

export default nav