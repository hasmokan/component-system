<template>
  <div :class="['emui-icon', 'emui-icon']">
    <svg :style="{ width, height }">
      <image :xlink:href="className" :style="{ width, height }" />
    </svg>
  </div>
</template>

<script>
import icon from "../Icon/icon";
export default {
  name: "emui-icon",
  data() {
    return {
      icon,
    };
  },
  computed: {
    className() {
      for (let i = 0; i < icon.length; i++) {
        if (icon[i].class.name == this.name) {
          var link = icon[i].class.link;
          console.log();
          break;
        }
      }
      return link;
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "75px",
    },
    height: {
      type: String,
      default: "75px",
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/icon.scss";
</style>
