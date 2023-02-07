<template>
  <transition name="message-fade">
    <div class="emui-message"
         :class="[type,{center}]"
         :style="{top:top+'px'}"
         v-show="visible">
      <div class="title">
        {{title}}
      </div>
    </div>
  </transition>
</template>

<script>
import "@/styles/message.scss"
export default {
  name:"emui-Message",
  data(){
    return{
      visible:false,
      top:20,
    };
  },
  props:{
    //传入文字
    title:{
      type:String,
      default:'',
    },
  //  是否居中
    center:{
      type:Boolean,
      default: false
    },
  //  样式类型
    type:{
      type:String,
      default:'success'
    },
  //  多少毫秒关闭
    time:{
      type:Number,
      default:2000,
    }
  },
  mounted() {
    setTimeout(()=>{
      this.visible=false;
    },this.time)
},

}
</script>

<style scoped lang="scss">
@import "src/styles/message";

</style>