<template>
  <div id="app">
    <emui-input></emui-input>
    <emui-radio></emui-radio>

      <emui-Button type="primarywhite" @click="messageOpenMeth('info')">info的消息提示</emui-Button>
      <emui-Button type="successwhite" @click="messageOpenMeth('success')">success的消息提示</emui-Button>
      <emui-Button type="warning" @click="messageOpenMeth('warning')">warning的消息提示</emui-Button>
      <emui-Button type="dangerwhite" @click="messageOpenMeth('error')">error的消息提示</emui-Button>
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
  methods: {
    messageOpenMeth(type){
      this.$notice.open({
        title:'这是一条消息提示',
        center:true,
        type:type
      })
    }
  }
};
</script>
