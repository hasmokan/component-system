<template>
  <div class="select">
    <div class="title">
      <span class="placeholder" v-show="curValue==''">{{ placeholder }}</span>
      <span class="curlabel">{{curLabel}}</span>
      <span
        class="iconfont"
        :class="{
          'icon-xiangshangjiantou': isShowoption,
          'icon-xiangxiajiantou': !isShowoption,
        }"
        @click="showOption"
      ></span>
    </div>
   <transition appear>
    <div class="options" v-show="isShowoption">
      <slot></slot>
    </div>
   </transition>
  </div>
</template>

<script>
export default {
  name: "emui-select",
  data() {
    return {
      isShowoption: false,
      options:[],//option存进来
      curValue:"",  //当前选中的value
      curLabel:""  //当前选中的label
    };
  },
  provide(){
    return {
        select:this
    }
  },
  props: {
    placeholder: {
      type: [String],
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  mounted(){
    //与传入的value做对比
    let curOptions=this.options.filter((item)=>item.value==this.value);
    if(curOptions.length>0){
        this.curValue=curOptions[0].value;
        this.curLabel=curOptions[0].label;
    }
  },
  methods: {
    showOption(){
        this.isShowoption=!this.isShowoption;
    }
  },
  watch:{
    curValue(){
        this.$emit('input',this.curValue);
    },
    value(newValue){
      this.curValue=newValue;
      if(newValue==''){
        this.curLabel=''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/scss/color";
.v-enter,
.v-leave-to{
    opacity: 0;
}
.v-enter-active,
.v-leave-active{
    transition: all .8s;
}
.select {
  display: inline-block;
  .title {
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 3px 10px;
    border: 2px solid $primary-color;
    border-radius: 5px;
    span {
      /* 一行显示，超长省略号 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .placeholder{
        color: #ccc;
    }
  }
  .options{
    margin-top: 10px;
    position: absolute;;
    border-radius: 5px;
    z-index: 999;
    background-color: $background-color;
    &::before{
        content: '';
        position: absolute;
        display: block;
        border: 8px solid transparent;
        border-bottom-color: $background-color;
        top: -16px;
        left: 27px;
        z-index: inherit;
    }
  }
}
</style>