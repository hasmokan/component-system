<template>
  <button
    :class="[
      'emui-button',
      `emui-button--${type}`,
      { plain: plain },
      { round: round },
      { circle: circle },
      { disabled: disabled },
      { cut: cut },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <fai :icon="icon" v-if="icon" />
    <!-- tip:根据是否传入内容进行span渲染 -->
    <!-- tip:根据是否传入内容进行span渲染 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "emui-Button",
  props: {
    type: {
      //数据类型字符串
      type: String,
      default: "default",
      // type值校验
      validator: function (value) {
        return (
          [
            "default",
            "success",
            "primary",
            "danger",
            "warning",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
    // 朴素按钮
    plain: {
      type: Boolean,
    },
    // round按钮
    round: {
      type: Boolean,
    },
    // 圆形按钮
    circle: {
      type: Boolean,
    },
    // icon
    icon: {
      // tip：这里icon为数组类型，给它添加一个布尔作为默认值，让fai不渲染
      type: [Array, Boolean],
      default: false,
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    mimicry: {
      type: Boolean,
      default: false,
    },
    cut: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/button.scss";
</style>
