<template>
    <button class="emui-radio" :class="{'emui-radio-active':showBgc}" @click="changeRadio" ref="radioButton" :disabled="isDisabled">{{label}}</button>
</template>

<script>
import Emitter from "../../mixins/emitter"
export default {
  name: "emui-radio-button",
  data(){
    return {
        showBgc:false,
        tlabel:this.label,
    }
  },
  mixins:[Emitter],
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
  created(){
    this.radioGroup.options.push(this);
  },
  computed:{
    isDisabled(){
        return this.radioGroup.disabled||this.disabled
    }
  },
  methods: {
    changeRadio() {
      this.dispatch('emui-radio-group','add-bgc-to-button',this)
      this.radioGroup.$emit('input',this.tlabel)
  },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/common/scss/color";
.emui-radio {
  display: inline-block;
  margin-right: 10px;
  padding: 7px 10px;
  background-color: #fff;
  border: 2px solid $primary-color;
  border-radius: 5px;
  font-family: "jiangxizhuokai";
  &-active {
    background-color: $primary-active-color;
    color: #fff;
  }
  &:hover {
    border-color: $danger-active-color;
  }
}
</style>