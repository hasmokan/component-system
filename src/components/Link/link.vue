<template>
  <a
    :href="href"
    :class="[
      'emui-link',
      `emui-link--${type}`,
      { underline: underline },
      { disabled: disabled },
    ]"
    :disabled="disabled"
    @click.prevent="isDisabled"
  >
    文字链接
  </a>
</template>

<script>
export default {
  name: "emui-Link",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return (
          [
            "default",
            "primary",
            "success",
            "warning",
            "danger",
            "info",
          ].indexOf(value) !== -1
        );
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
  },
  computed: {
    isDisabled() {
      if (!this.disabled) {
        location.assign(this.href);
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/link.scss";
</style>