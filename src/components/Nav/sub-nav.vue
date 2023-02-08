<template>
  <div class="emui-sub-nav">
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
  },
};
</script>
<style lang="scss">
.emui-sub-nav {
  position: relative;
  > span {
    //可触面积过小
    padding: 10px 20px;
    display: block;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
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

