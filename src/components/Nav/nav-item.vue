<template>
  <div class="emui-nav-item" :class="{ selected, vertical }" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "emui-nav-item",
  inject: ["root", "vertical"], //root是导航栏
  props: {
    name: {
      type: String,
      required: true, //强制要求必须传入
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  created() {
    this.root.addItem(this); //可以直接操作祖先，非常耦合,  直接告诉祖先组件我是你的后代
  },
  methods: {
    onClick() {
      this.root.namePath = []; //存放选中的路径
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("add:selected", this.name); //通知父组件,发回一个事件
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/nav";
@import "@/styles/common/scss/color";
@import "@/styles/navcommon";
.emui-nav-item {
  box-sizing: content-box;
  color: $font-gold-color;
  font-family: "jiangxizhuokai";
  padding: 10px 20px;
  position: relative;
  &:not(.vertical) {
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 3px solid $font-gold-color;
        color: #8d5940;
      }
    }

    &:hover {
      box-sizing: border-box;
      background: #38767b;
      transition: 0.2s;
      &:not(.selected) {
        // border-bottom: 3px solid $font-gold-color;
        background: #38767b;
        transition: 0.2s;
      }
    }
    &.selected {
      color: #8d5940; //选中的文字的颜色
    }
  }
  // &:not(.vertical):hover {
  //   border-bottom: 0px solid $font-gold-color;
  //   transition: 15s;
  //   &::after {
  //     content: "";
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     border-bottom: 3px solid $font-gold-color;
  //     width: 100%;
  //   }
  // }
  // 垂直的时候
  &.vertical {
    &.selected {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        border-left: 5px solid $font-gold-color;
      }
    }
    &:hover {
      background: #38767b;
      transition: 0.2s;
      &:not(.selected) {
        border-left: 5px solid $font-gold-color;
        background: #38767b;
        transition: 0.2s;
      }
    }
    &.selected {
      color: #8d5940; //选中的文字的颜色
    }
  }
}
a {
  //链接的css
  color: inherit;
  text-decoration: none;
}

.emui-sub-nav .emui-nav-item:not(.vertical) {
  &.selected {
    color: $color;
    background: $normal-active-color 0.5; //
    &::after {
      display: none;
    }
  }
}
</style>