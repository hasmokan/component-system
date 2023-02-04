<template>
  <div :class="[{'is-vertical':vertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "emui-checkbox-group",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value:{
      type:Array
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.is-vertical{
    display: flex;
    flex-direction: column;
}
</style>