<template>
  <div class="emui-tag" :class="`emui-tag-${type}`" v-show="isShow">
            <slot></slot>
            <span class="iconfont icon-chahao" v-show="closable" @click="deleteItem($event)"></span>
  </div>
</template>

<script>
import emitter from "../../mixins/emitter"
export default {
    name:'emui-tag',
    data() {
        return {
           isShow:true
        }
    },
    mixins:[emitter],
    props:{
        type:{
            type:String,
            default:''
        },
        closable:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        deleteItem(e){
            this.dispatch('emui-tag-list','data-item-remove',e.target.parentElement.innerText)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>