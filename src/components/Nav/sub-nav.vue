<template>
  <div class="emui-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="emui-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "emui-sub-nav",
};
</script>
<style lang="scss">
</style>

