<template>
  <div class="emui-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "emui-nav",
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    //钩子函数
    this.items.forEach((vm) => {
      console.log(vm.name);
    });
  },
  computed: {
    items() {
      return this.$children.filter(
        (vm) => vm.$options.name === "emui-nav-item"
      );
    },
  },
};
</script>

<style lang="scss">
.emui-nav {
  display: flex;
  border: 1px solid red;
}
</style>
