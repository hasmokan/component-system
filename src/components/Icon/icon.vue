<template>
  <div :class="['emui-icon', 'emui-icon']">
    <svg :style="{ width: '90px', height: '90px' }">
      <!-- <image
        :xlink:href="item.class.link"
        :style="{ width: '90px', height: '90px' }"
      /> -->
      <image
        :xlink:href="className"
        :style="{ width: '90px', height: '90px' }"
      />
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
  computed: {
    className() {
      console.log(this.iconName);
      for (let i = 0; i < icon.length; i++) {
        if (icon[i].class.name == this.iconName) {
          var link = icon[i].class.link;
          console.log(link);
          break;
        }
      }
      console.log(link, "@");
      return link;
    },
  },
  props: {
    iconName: {
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
    disabled: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/icon.scss";
img {
  width: 200px;
  height: 200px;
}
</style>
