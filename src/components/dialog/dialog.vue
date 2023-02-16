<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <!-- v-show保证对话框的显示和隐藏 -->
    <div
      class="emui-dialog--wrapper"
      v-show="visiable"
      @click.self="closeDialog"
    >
      <div
        :class="['emui-dialog', mimicry ? 'mimicry' : '']"
        :style="{ width: width, 'margin-top': top }"
      >
        <div class="emui-dialog--header">
          <!-- slot包裹title 如果插入填入了title那么内部的值就会被替换为slot-->
          <slot name="title">
            <span class="emui-dialog--title">{{ title }}</span>
          </slot>
          <!-- 有问题 -->
          <!-- <emui-Button
            circle
            :icon="['far', 'times-circle']"
            class="emui-dialog--headerbtn"
            @click="closeDialog"
          ></emui-Button> -->
        </div>
        <div class="emui-dialog--body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="emui-dialog--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "emui-Dialog",
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:visiable", false); //传递给父组件，然后再传回来
    },
  },
  components: {},
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visiable: {
      type: Boolean,
      default: false,
    },
    mimicry: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "src/styles/dialog.scss";
</style>