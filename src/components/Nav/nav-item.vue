<template>
  <div class="emui-nav-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "emui-nav-item",
  inject: ["root"], //root是导航栏
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
.emui-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
}
.emui-sub-nav .emui-nav-item {
  &.selected {
    color: $color;
    background: grey;
    &::after {
      display: none;
    }
  }
}
</style>