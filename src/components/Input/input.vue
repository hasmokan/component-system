<template>
  <div class="input">
    <input
      type="text"
      :class="['emui-input', `emui-input--${type}`]"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script>
// import check from "@/utils/checkone"
export default {
  name: "emui-Input",
  data(){
    return {
        currentValue:this.value
    }
  },
  watch:{
    value(newvalue){
        this.currentValue=newvalue;
    }
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit('input', value)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/scss/color";
.emui-input {
  outline: none;
  height: 36px;
  line-height: 36px;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid green;
  font-size: 14px;

  &:active,
  &:focus {
    border-color: $primary-color;
    box-shadow: 0 0 4px $primary-color;
  }
}
</style>