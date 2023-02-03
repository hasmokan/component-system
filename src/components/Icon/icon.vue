<template>
  <div :class="['emui-icon', 'box']">
    <svg v-for="item in icon" :key="item">
      <image :xlink:href="item" />
    </svg>
  </div>
</template>

<script>
import icon from "../Icon/icon";

export default {
  name: "emui-Icon",
  data() {
    return {
      icon,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/icon.scss";
</style>
