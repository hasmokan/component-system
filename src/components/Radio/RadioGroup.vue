<template>
  <div :class="[{'is-vertical':vertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "emui-radio-group",
  data(){
    return {
      options:[]
    }
  },
  created(){
    this.$on('add-bgc-to-button',option=>{
      this.options.forEach(item => {
        item.showBgc=false;
      });
      option.showBgc=true;
    })
  },
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  watch:{
    value(newValue){
      if(newValue==''){
        this.options.forEach(item=>{
          item.showBgc=false;
        })
      }
    }
  },
  provide() {
    return {
      radioGroup: this,
    };
  }
};
</script>

<style lang="scss" scoped>
.is-vertical{
    display: flex;
    flex-direction: column;
}
</style>