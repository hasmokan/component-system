<template>
  <div
    class="emui-sub-nav"
    :class="{ active, vertical }"
    v-click-outside="close"
  >
    <span class="emui-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="emui-sub-nav-icon" :class="{ open, vertical }">
        <emui-icon
          width="16px"
          height="16px"
          name="emui-arrow-left"
        ></emui-icon>
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
export default {
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
@import "@/styles/nav";
@import "@/styles/common/scss/color";
@import "@/styles/navcommon";

.emui-sub-nav {
  color: $font-gold-color;
  font-family: "jiangxizhuokai";
  position: relative;
  &-label {
    padding: 10px 20px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-icon {
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 20px;
    svg {
      fill: $primary-color;
    }
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }

    &.open {
      transform: rotate(180deg);
    }
  }
  &:not(.vertical) {
    &.selected {
      &::after {
        transition: 0.2s;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $font-gold-color;
        width: 100%;
        color: #8d5940;
      }
    }
  }

  //竖直的hover
  &.vertical {
    box-sizing: border-box;
    &:hover {
      transition: 0.3s;
    }
    &.selected {
      color: $blue; //
    }
  }
  &:not(.vertical) {
    margin-left: 2px;
  }

  &-popover {
    transition: 0.2s;

    background: $primary-color;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: 3px;
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

// 子菜单的样式
.emui-sub-nav .emui-sub-nav {
  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 3px solid $font-gold-color;
      display: none;
    }
  }
  .emui-sub-nav-popover {
    top: 0;
    left: 100%;
    // margin-left: 1px;
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
      fill: $primary-color;
    }
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }

    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>

