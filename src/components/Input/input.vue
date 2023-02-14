<template>
  <div class="input">
    <textarea
      class="emui-input"
      :cols="cols"
      :rows="rows"
      v-if="type == 'textarea'"
    ></textarea>
    <input
      class="emui-input"
      :type="currentType"
      :class="inputClass"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleBlur"
      v-model="currentValue"
      v-else
      ref="input"
    />
    <span
     v-show="type=='password'"
      class="iconfont eyes"
      :class="{
        'icon-yanjing_yincang': isHide,
        'icon-yanjing_xianshi': isShow,
      }"
      @click="changeyes"
    ></span>
    <span
      class="iconfont icon-chahao eyes"
      v-show="type == 'clearable'"
      @click="clearValue"
    ></span>
  </div>
</template>

<script>
import { check } from "../../utils/checkone";
import Emitter from "../../mixins/emitter";
export default {
  name: "emui-input",
  data() {
    return {
      currentValue: this.value,
      currentType:this.type,
      isShow:false,
      isHide:true
    };
  },
  mixins:[Emitter],
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
        [`${prefix}__disabled-${this.disabled}`]: true,
      };
    },
    isClear() {
      return this.type == "clearable";
    },
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
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
    disabled: {
      type: Boolean,
      default: false,
    },
    //textarea的列数和行数
    cols: {
      type: Number,
      default: 24,
    },
    rows: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch('emui-form-item','form-change',value)
    },
    handleBlur(){
      this.dispatch('emui-form-item','form-blur',this.currentValue);
    },
    changeyes() {
      this.isShow = !this.isShow;
      this.isHide = !this.isHide;
      if (this.isShow) {
        this.currentType = "text";
      } else {
        this.currentType = "password";
      }
    },
    clearValue() {
      this.currentValue = "";
      this.$emit("input", this.currentValue);
    },
  },
};
</script>

