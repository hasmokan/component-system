<template>
  <emui-Button class="emui-radio" @click="changeRadio" ref="radioButton" :disabled="isDisabled">{{label}}</emui-Button>
</template>

<script>
export default {
  name: "emui-radio-button",
  data(){
    return {
        showBgc:false,
        tlabel:this.label
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    disabled:{
        type:Boolean,
        default:false
    },
    value:null
  },
  inject: {
    radioGroup: {
      default: "",
    },
  },
  computed:{
    isDisabled(){
        return this.radioGroup.disabled||this.disabled
    }
  },
  methods: {
    changeRadio() {
      this.showBgc=!this.showBgc
      this.radioGroup.$emit('input',this.tlabel)
  },
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/scss/color";
@import "@/styles/common/scss/font";
.emui-radio {
  display: inline-block;
  margin: 0;
  transition: all .3s;
  &-active {
    background-color: $primary-active-color;
    color: #fff;
  }
  &:hover {
    border-color: $danger-active-color;
  }
}
</style>