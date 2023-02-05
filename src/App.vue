<template>
  <div id="app">
    <emui-nav :selected="['home', 1]" multiple>
      <emui-nav-item name="home">首页</emui-nav-item>
      <emui-nav-item name="about">招聘</emui-nav-item>
      <emui-nav-item name="hire">测试</emui-nav-item>
    </emui-nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      input: "",
      button: "",
      visiable: false,
      visiable1: false,
      selected: ["home"],
    };
  },
};
</script>


<style scoped lang="scss"></style>;
