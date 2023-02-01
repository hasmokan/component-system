<template>
  <div id="app">
   <emui-radio-button label="北京" v-model="input"></emui-radio-button>
   <emui-radio-button label="北京"></emui-radio-button>
   <emui-radio-button label="北京"></emui-radio-button>

   <emui-radio-group v-model="value" vertical>
     <emui-radio label="123"/>
     <emui-radio label="456"/>
   </emui-radio-group>

   <emui-radio-group v-model="button">
    <emui-radio-button label="上海" disabled/>
    <emui-radio-button label="西安"/>
   </emui-radio-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      value:'',
      input:'',
      button:''
    }
  }
};
</script>

<style scoped lang="scss">
</style>
