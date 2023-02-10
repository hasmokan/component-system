<template>
  <div :class=[Big,size]>
    <div :style="{width:progress+'vw'}" :class=[box,size]></div>
  </div>
</template>

<script>


export default {
    data(){
        return {
            box:'box',
            Big:'Big'
        }
    },
    props:{
        progress:{
            default:0,
            type:Number
        },
        size:{
            default:'small',
            type:String
        }
    },
    name:'emui-progress'


}
</script>

<style lang="scss">
@import '@/styles/progress.scss'

</style>