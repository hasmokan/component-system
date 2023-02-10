<template>
  <div id="app">
    <emui-Input type="password" v-model="input" size="large"></emui-Input>
    <emui-Input type="password" v-model="input" size="small"></emui-Input>
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
    <div>
      <emui-Button type="default">取消</emui-Button>
      <emui-Button type="primarywhite">确认</emui-Button>
      <emui-Button type="primarygold">确认</emui-Button>
      <emui-Button type="successwhite">测试</emui-Button>
      <emui-Button type="successgold">测试</emui-Button>
      <emui-Button type="warning">测试</emui-Button>
      <emui-Button type="dangerwhite">测试</emui-Button>
      <emui-Button type="dangergold" cut>测试</emui-Button>
    </div>
    <div>
      <emui-Button type="default" round>取消</emui-Button>
      <emui-Button type="primarywhite" round>确认</emui-Button>
      <emui-Button type="primarygold" round>确认</emui-Button>
      <emui-Button type="successwhite" round>测试</emui-Button>
      <emui-Button type="successgold" round>测试</emui-Button>
      <emui-Button type="warning" round>测试</emui-Button>
      <emui-Button type="dangerwhite" round>测试</emui-Button>
      <emui-Button type="dangergold" round>测试</emui-Button>
    </div>
    <div>
      <emui-Button type="default" plain>取消</emui-Button>
      <emui-Button type="primarywhite" plain>确认</emui-Button>
      <emui-Button type="primarygold" plain>确认</emui-Button>
      <emui-Button type="successwhite" plain>测试</emui-Button>
      <emui-Button type="successgold" plain>测试</emui-Button>
      <emui-Button type="warning" plain>测试</emui-Button>
      <emui-Button type="dangerwhite" plain>测试</emui-Button>
      <emui-Button type="dangergold" plain>测试</emui-Button>
    </div>
    <div>
      <emui-Button type="default" disabled>取消</emui-Button>
      <emui-Button type="primarywhite" disabled>确认</emui-Button>
      <emui-Button type="primarygold" disabled>确认</emui-Button>
      <emui-Button type="successwhite" disabled>测试</emui-Button>
      <emui-Button type="successgold" disabled>测试</emui-Button>
      <emui-Button type="warning" disabled>测试</emui-Button>
      <emui-Button type="dangerwhite" disabled>测试</emui-Button>
      <emui-Button type="dangergold" disabled>测试</emui-Button>
    </div>
    <div>
      <emui-Button type="default" circle>取消</emui-Button>
      <emui-Button type="primarywhite" circle>确认</emui-Button>
      <emui-Button type="primarygold" circle>确认</emui-Button>
      <emui-Button type="successwhite" circle>测试</emui-Button>
      <emui-Button type="successgold" circle>测试</emui-Button>
      <emui-Button type="warning" circle>测试</emui-Button>
      <emui-Button type="dangerwhite" circle>测试</emui-Button>
      <emui-Button type="dangergold" circle>测试</emui-Button>
    </div>

    <emui-radio-button label="北京" v-model="input"></emui-radio-button>
    <emui-radio-button label="北京"></emui-radio-button>
    <emui-radio-button label="北京"></emui-radio-button>

    <emui-radio-group v-model="value" vertical>
      <emui-radio label="123" />
      <emui-radio label="456" />
    </emui-radio-group>

    <emui-radio-group v-model="button">
      <emui-radio-button label="上海" disabled />
      <emui-radio-button label="西安" />
    </emui-radio-group>

    <!--  -->
    <div>
      <emui-Icon name="emui-add-blue-style1"></emui-Icon>
      <emui-Icon name="emui-add-blue-style2"></emui-Icon>
      <emui-Icon name="emui-add-red-style1"></emui-Icon>
      <emui-Icon name="emui-add-red-style2"></emui-Icon>
      <emui-Icon name="emui-address-blue-style1"></emui-Icon>
      <emui-Icon name="emui-address-blue-style2"></emui-Icon>
      <emui-Icon name="emui-address-red-style1"></emui-Icon>
      <emui-Icon name="emui-address-red-style2"></emui-Icon>
      <emui-Icon name="emui-custom-blue-style1"></emui-Icon>
      <emui-Icon name="emui-custom-blue-style2"></emui-Icon>
      <emui-Icon name="emui-custom-red-style1"></emui-Icon>
      <emui-Icon name="emui-custom-red-style2"></emui-Icon>
      <emui-Icon name="emui-delete-blue-style1"></emui-Icon>
      <emui-Icon name="emui-delete-blue-style2"></emui-Icon>
      <emui-Icon name="emui-delete-red-style1"></emui-Icon>
      <emui-Icon name="emui-delete-red-style2"></emui-Icon>
      <emui-Icon name="emui-home-blue-style1"></emui-Icon>
      <emui-Icon name="emui-home-blue-style2"></emui-Icon>
      <emui-Icon name="emui-home-red-style1"></emui-Icon>
      <emui-Icon name="emui-home-red-style2"></emui-Icon>
      <emui-Icon name="emui-info-blue-style1"></emui-Icon>
      <emui-Icon name="emui-info-blue-style2"></emui-Icon>
      <emui-Icon name="emui-info-red-style1"></emui-Icon>
      <emui-Icon name="emui-info-red-style2"></emui-Icon>
      <emui-Icon name="emui-message-blue-style1"></emui-Icon>
      <emui-Icon name="emui-message-blue-style2"></emui-Icon>
      <emui-Icon name="emui-message-red-style1"></emui-Icon>
      <emui-Icon name="emui-message-red-style2"></emui-Icon>
      <emui-Icon name="emui-refresh-blue-style1"></emui-Icon>
      <emui-Icon name="emui-refresh-blue-style2"></emui-Icon>
      <emui-Icon name="emui-refresh-red-style1"></emui-Icon>
      <emui-Icon name="emui-refresh-red-style2"></emui-Icon>
      <emui-Icon name="emui-return-blue-style1"></emui-Icon>
      <emui-Icon name="emui-return-blue-style2"></emui-Icon>
      <emui-Icon name="emui-return-red-style1"></emui-Icon>
      <emui-Icon name="emui-return-red-style2"></emui-Icon>
      <emui-Icon name="emui-search-blue-style1"></emui-Icon>
      <emui-Icon name="emui-search-blue-style2"></emui-Icon>
      <emui-Icon name="emui-search-red-style1"></emui-Icon>
      <emui-Icon name="emui-search-red-style2"></emui-Icon>
      <emui-Icon name="emui-seeting-blue-style1"></emui-Icon>
      <emui-Icon name="emui-seeting-blue-style2"></emui-Icon>
      <emui-Icon name="emui-seeting-red-style1"></emui-Icon>
      <emui-Icon name="emui-seeting-red-style2"></emui-Icon>
      <emui-Icon name="emui-share-blue-style1"></emui-Icon>
      <emui-Icon name="emui-share-blue-style2"></emui-Icon>
      <emui-Icon name="emui-share-red-style1"></emui-Icon>
      <emui-Icon name="emui-share-red-style2"></emui-Icon>
      <emui-Icon name="emui-star-blue-style1"></emui-Icon>
      <emui-Icon name="emui-star-blue-style2"></emui-Icon>
      <emui-Icon name="emui-star-red-style1"></emui-Icon>
      <emui-Icon name="emui-star-red-style2"></emui-Icon>
    </div>
    <!--  -->
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
    };
  },
};
</script>

<style scoped lang="scss">
</style>;
