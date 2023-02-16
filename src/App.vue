<template>
  <div id="app">
    <emui-Button type="primarygold" @click="visiable = true"
      >对话框dialog
    </emui-Button>
    <emui-Dialog title="emui提示您" :visiable.sync="visiable">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用emui组件库
      <template v-slot:footer>
        <emui-Button type="primarygold" @click="visiable = false" mimicry
          >确定</emui-Button
        >
        <emui-Button @click="visiable = false">取消</emui-Button>
      </template>
    </emui-Dialog>

    <emui-Button type="primarygold" @click="visiable1 = true"
      >对话框dialog2
    </emui-Button>
    <emui-Dialog title="emui提示您" :visiable.sync="visiable1">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用emui组件库
    </emui-Dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visiable: false,
      visiable1: false,
    };
  },
};
</script>
