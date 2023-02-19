<template>
  <div :class="['emui-icon', 'emui-icon']" :style="{ width, height }">
    <svg :style="{ width, height }">
      <image :xlink:href="link" :style="{ width, height }" />
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
    link() {
      for (let i = 0; i < icon.length; i++) {
        if (icon[i].class.name == this.name) {
          var link = icon[i].class.link;

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
<style lang="scss" scoped>
@import "../../styles/icon.scss";
</style>
