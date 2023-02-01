<template>
  <div :class="[{'is-vertical':vertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "emui-radio-group",
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      radioGroup: this,
    };
  },
};
</script>

<style lang="scss" scoped>
.is-vertical{
    display: flex;
    flex-direction: column;
}
</style>