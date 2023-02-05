<template>
  <div class="emui-nav-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "emui-nav-item",
  props: {
    name: {
      type: String,
      required: true, //强制要求必须传入
    },
  },
  methods: {
    onclick() {
      this.$emit("add:selected", this.name);
    },
  },
};
</script>

<style lang="scss">
</style>