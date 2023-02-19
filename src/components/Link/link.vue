<template>
  <a
    :href="link"
    :class="[
      'emui-link',
      `emui-link--${type}`,
      { underline: underline },
      { disabled: disabled },
    ]"
    :disabled="disabled"
    @click="isDisabled"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-if="!$slots.default">{{ value }}</span>
  </a>
</template>

<script>
export default {
  name: "emui-link",
  data() {
    return {
      link: this.href,
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: function () {
        return ["default", "primary", "success", "warning", "danger", "info"];
      },
    },
    href: {
      type: String,
      default: "",
    },
    underline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "文字链接",
    },
  },
  methods: {
    isDisabled() {
      if (this.disabled) {
        this.link = "javascript:void(0)";
      }
      console.log(this.href);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/link.scss";

</style>
