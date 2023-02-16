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

