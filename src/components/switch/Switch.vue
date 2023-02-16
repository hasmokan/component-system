<template>
  <div
    class="emui-switch"
    :class="{ 'is-checked': value }"
    @click="handleClick"
  >
    <span class="emui-switch_core" ref="core">
      <span class="emui-switch_button"></span>
    </span>
    <input type="checkbox" class="emui-switch_input" :name="name" ref="input" />
  </div>
</template>
<script>
export default {
  name: "emuiSwitch",
  components: {},
  props: {
    value: {
      type: Boolean,
      defualt: false,
    },
    activeColor: {
      type: String,
      defualt: "",
    },
    inactiveColor: {
      type: String,
      defualt: "",
    },
    name: {
      type: String,
      defualt: "",
    },
  },
  mounted() {
    // 修改开关颜色
    if (this.activeColor || this.inactiveColor) {
      var color = !this.value ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = color;
      this.$refs.core.style.backgroundColor = color;
    }
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.value;
  },
  watch: {
    value(e) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        var color = !e ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value;
    },
  },
};
</script>
<style lang="scss" scoped>
.emui-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .emui-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .emui-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #f8e8db;
    }
  }
}
// 选中样式
.is-checked {
  .emui-switch_core {
    border-color: #e3c60b;
    background-color: #40878d;
    .emui-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.emui-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>