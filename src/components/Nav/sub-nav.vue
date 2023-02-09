<template>
  <div class="emui-sub-nav" :class="{ active }" v-click-outside="close">
    <span class="emui-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="emui-sub-nav-icon" :class="{ open }">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <div class="emui-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from "./click-outside";
//  import GIcon from '../icon'
export default {
  // components: {GIcon},
  directives: { ClickOutside },
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
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    },
  },
  methods: {
    onClick() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
        // this.root.namePath = []
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/nav.scss";
.emui-sub-nav {
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
  }
  &-icon {
    display: none;
  }
  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
  }
}
.emui-sub-nav .emui-sub-nav {
  &.active {
    &::after {
      display: none;
    }
  }
  .emui-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .emui-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .emui-sub-nav-icon {
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 1em;
    svg {
      fill: $light-color;
    }
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>

