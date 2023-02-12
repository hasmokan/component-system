<template>
  <div class="emui-sub-nav" :class="{ active }" v-click-outside="close">
    <span class="emui-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="emui-sub-nav-icon" :class="{ open }">
        <!-- <g-icon name="right"></g-icon> -->
      </span>
    </span>
    <template v-if="vertical">
      <transition
        @enter="enter"
        @leave="leave"
        @after-leave="afterLeave"
        @after-enter="afterEnter"
      >
        <div class="emui-sub-nav-popover" v-show="open" :class="{ vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="emui-sub-nav-popover" v-show="open" :class="{ vertical }">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from "./click-outside";
//  import GIcon from '../icon'
export default {
  // components: {GIcon},
  directives: { ClickOutside },
  name: "emui-sub-nav",
  inject: ["root", "vertical"], //依赖注入 竖向属性
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
    enter(el, done) {
      el.style.height = "auto";
      //进入的动画
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        //防止 done后直接关闭动画,所以结束后再关闭动画
        done();
      });
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
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
.x-enter-active,
.x-leave-active {
}
.x-enter,
.x-leave-to {
}

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
    box-shadow: 0 0 3px x_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    transition: height 250ms;
    min-width: 8em;
    &.vertical {
      //满足vertical时

      position: static;
      border-radius: 0;
      border: none;
      box-shadow: none;
      overflow: hidden; //可以遮挡还没出来的 div 达到隐藏的效果
    }
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
    &.x {
      transform: rotate(180deg);
    }
  }
}
</style>

