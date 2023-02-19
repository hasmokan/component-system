<template>
  <div>
 <emui-radio-group>
     <emui-radio label="上海"></emui-radio>
     <emui-radio label="北京"></emui-radio>
  </emui-radio-group>
  <emui-radio-group>
     <emui-radio-button label="上海"></emui-radio-button>
     <emui-radio-button label="北京"></emui-radio-button>
  </emui-radio-group>
    <emui-tag>标签</emui-tag>
    <emui-tag type="success">标签</emui-tag>
    <emui-tag type="info">标签</emui-tag>
    <emui-tag type="warning">标签</emui-tag>
    <emui-tag type="danger" closable>标签</emui-tag>

    <emui-tag-list :datalist.sync="datalist"></emui-tag-list> 
    <emui-button>按钮</emui-button>
    <emui-input type="password"></emui-input>
  </div>
</template>

<script>
export default {
     data(){
    return {
      datalist:['标签1','标签2','标签3']
    }
  }
}
</script>

<style>

</style>