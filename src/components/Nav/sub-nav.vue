<template>
  <div class="emui-sub-nav" :class="{ active }">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="emui-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "emui-sub-nav",
  inject: ["root"],
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onClick() {
      console.log(open);
      this.open = !this.open;
    },
    x() {
      this.active = true;
      this.$parent.x() && this.$parent.x;
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/nav.scss";
.emui-sub-nav {
  position: relative;
  &.active {
    position: relative;
    //被选中的
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
  > span {
    //可触面积过小
    padding: 10px 20px;
    display: block;
  }
  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.85);
    border-radius: 10px;
  }
  .emui-sub-nav {
    .emui-sub-nav {
      &-popover {
        // position: absolute;

        top: 0%;
        left: 100%;
        margin-left: 8px;
      }
    }
  }
}
</style>

