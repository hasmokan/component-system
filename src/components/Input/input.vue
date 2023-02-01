<template>
   <div class="input">
    <textarea  class="emui-input" :cols="cols" :rows="rows" v-if="type=='textarea'"></textarea>
     <input
      class="emui-input"
      :type="currentType"
      :class="inputClass"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      v-model="currentValue"
      v-else
    />
    <span class="iconfont eyes" :class="{'icon-yanjing_yincang':isHide,'icon-yanjing_xianshi':isShow} " @click="changeyes"></span>
    <span class="iconfont icon-chahao eyes"  v-show="type=='clearable'" @click="clearValue"></span>
   </div>
</template>

<script>
import { check } from "@/utils/checkone";
export default {
  name: "emui-input",
  data() {
    return {
      currentValue: this.value,
      currentType:this.type,
      isShow:false,
    };
  },
  watch: {
    value(newvalue) {
      this.currentValue = newvalue;
    },
  },
  computed: {
    inputClass() {
      const prefix = "emui-input";
      return {
        [`${prefix}__size-${this.size}`]: true,
        [`${prefix}__type-${this.type}`]: true,
        [`${prefix}__disabled-${this.disabled}`]:true
      };
    },
    isHide(){
        return this.type=="password";
    },
    isClear(){
        return this.type=="clearable"
    }
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default:''
    },
    size: {
      validator(value) {
        return check(value, ["small", "large", "default"]);
      },
      default: "default",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled:{
      type:Boolean,
      default:false
    },
    //textarea的列数和行数
    cols:{
      type:Number,
      default:24
    },
    rows:{
      type:Number,
      default:2
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit("input", value);
    },
    changeyes(){
        this.isShow=!this.isShow;
        this.isHide=!this.isHide;
        if(this.isShow){
            this.currentType="text";
        }else{
            this.currentType="password";
        }
    },
    clearValue(){
        this.currentValue='';
        this.$emit('input',this.currentValue)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/scss/color";

.input{
    width: 200px;
    height: 40px;
    line-height: 40px;
    position: relative;
    margin: 6px;
}
.emui-input {
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid $primary-color;
  font-size: 14px;
  padding: 7px 10px;

  &:active,
  &:focus {
    border-color: $primary-active-color;
    box-shadow: 0 0 4px $primary-active-color;
  }

  &__size-large {
    height: 40px;
    line-height: 40px;
  }
  &__size-small {
    height: 25px;
    line-height: 25px;
  }
  &__size-default {
    height: 32px;
    line-height: 32px;
  }
  &__disabled-true{
    background-color:#f5f7fa;
    cursor: no-drop;
  }
}
.eyes{
font-size: 23px;
  position: absolute;
  // top: 2px;
  right: 8px;
  color: $info-color;
}

</style>