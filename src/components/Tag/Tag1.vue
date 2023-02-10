<template>
  <div :class="myClass"  v-if="show">
    <div>
        <slot></slot>
    </div>
    <div v-if="closable" class="remove" ref="remove" @click="show=!show">x</div>
  </div>
</template>

<script>
export default {
    name:'emuiTag',
    data() {
        return {
            myClass:[],
            show:true
        }
    },
    created(){
        this.myClass.push(this.size)
        this.myClass.push(this.type)
        this.myClass.push(this.effect)
        this.hit&&this.myClass.push('hit')
    },
    props:{
        size:{type:String,default:'default'},
        // size有三种值可以选，default，large，small
        type:{type:String,default:'success'},
        // success/info/warning/danger	
        closable:{type:Boolean,default:false},
        hit:{type:Boolean,default:false},
        effect:{type:String,default:'light'},
        // dark / light / plain
        round:{type:Boolean,default:false},
        

        
    }

}
</script>

<style lang="scss" scoped>
@import '@/styles/tag'

</style>