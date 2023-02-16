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
