<template>
  <div id="app">
    <emui-nav :selected.sync="selected" style="margin: 20px 0 0 20px">
      <emui-nav-item name="home">首页</emui-nav-item>
      <emui-sub-nav name="about">
        <template slot="title">关于</template>
        <emui-nav-item name="culture">企业文化</emui-nav-item>
        <emui-nav-item name="developers">开发团队</emui-nav-item>
        <emui-sub-nav name="contacts">
          <template slot="title">联系电话</template>
          <emui-nav-item name="wechat">微信</emui-nav-item>
          <emui-nav-item name="qq">QQ</emui-nav-item>
          <emui-sub-nav name="phone">
            <template slot="title">通信</template>
            <emui-nav-item name="cm">移动</emui-nav-item>
            <emui-nav-item name="cu">联通</emui-nav-item>
            <emui-nav-item name="cn">电信</emui-nav-item>
          </emui-sub-nav>
        </emui-sub-nav>
      </emui-sub-nav>
      <emui-nav-item name="hire">测试</emui-nav-item>
    </emui-nav>

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

    <emui-Button type="primarywhite" @click="messageOpenMeth('info')"
      >info的Message提示</emui-Button
    >
    <emui-Button type="successwhite" @click="messageOpenMeth('success')"
      >success的Message提示</emui-Button
    >
    <emui-Button type="warning" @click="messageOpenMeth('warning')"
      >warning的Message提示</emui-Button
    >
    <emui-Button type="dangerwhite" @click="messageOpenMeth('error')"
      >error的Message提示</emui-Button
    >

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
    </div>
    <div>
      <emui-Icon name="emui-custom-blue-style1"></emui-Icon>
      <emui-Icon name="emui-custom-blue-style2"></emui-Icon>
      <emui-Icon name="emui-custom-red-style1"></emui-Icon>
      <emui-Icon name="emui-custom-red-style2"></emui-Icon>
      <emui-Icon name="emui-delete-blue-style1"></emui-Icon>
      <emui-Icon name="emui-delete-blue-style2"></emui-Icon>
      <emui-Icon name="emui-delete-red-style1"></emui-Icon>
      <emui-Icon name="emui-delete-red-style2"></emui-Icon>
    </div>
    <div>
      <emui-Icon name="emui-home-blue-style1"></emui-Icon>
      <emui-Icon name="emui-home-blue-style2"></emui-Icon>
      <emui-Icon name="emui-home-red-style1"></emui-Icon>
      <emui-Icon name="emui-home-red-style2"></emui-Icon>
      <emui-Icon name="emui-info-blue-style1"></emui-Icon>
      <emui-Icon name="emui-info-blue-style2"></emui-Icon>
      <emui-Icon name="emui-info-red-style1"></emui-Icon>
      <emui-Icon name="emui-info-red-style2"></emui-Icon>
    </div>
    <div>
      <emui-Icon name="emui-message-blue-style1"></emui-Icon>
      <emui-Icon name="emui-message-blue-style2"></emui-Icon>
      <emui-Icon name="emui-message-red-style1"></emui-Icon>
      <emui-Icon name="emui-message-red-style2"></emui-Icon>
      <emui-Icon name="emui-refresh-blue-style1"></emui-Icon>
      <emui-Icon name="emui-refresh-blue-style2"></emui-Icon>
      <emui-Icon name="emui-refresh-red-style1"></emui-Icon>
      <emui-Icon name="emui-refresh-red-style2"></emui-Icon>
    </div>
    <div>
      <emui-Icon name="emui-return-blue-style1"></emui-Icon>
      <emui-Icon name="emui-return-blue-style2"></emui-Icon>
      <emui-Icon name="emui-return-red-style1"></emui-Icon>
      <emui-Icon name="emui-return-red-style2"></emui-Icon>
      <emui-Icon name="emui-search-blue-style1"></emui-Icon>
      <emui-Icon name="emui-search-blue-style2"></emui-Icon>
      <emui-Icon name="emui-search-red-style1"></emui-Icon>
      <emui-Icon name="emui-search-red-style2"></emui-Icon>
    </div>
    <div>
      <emui-Icon name="emui-seeting-blue-style1"></emui-Icon>
      <emui-Icon name="emui-seeting-blue-style2"></emui-Icon>
      <emui-Icon name="emui-seeting-red-style1"></emui-Icon>
      <emui-Icon name="emui-seeting-red-style2"></emui-Icon>
      <emui-Icon name="emui-share-blue-style1"></emui-Icon>
      <emui-Icon name="emui-share-blue-style2"></emui-Icon>
      <emui-Icon name="emui-share-red-style1"></emui-Icon>
      <emui-Icon name="emui-share-red-style2"></emui-Icon>
    </div>
    <div>
      <emui-Icon name="emui-star-blue-style1"></emui-Icon>
      <emui-Icon name="emui-star-blue-style2"></emui-Icon>
      <emui-Icon name="emui-star-red-style1"></emui-Icon>
      <emui-Icon name="emui-star-red-style2"></emui-Icon>
      <emui-Icon name="emui-arrow-top"></emui-Icon>
      <emui-Icon name="emui-arrow-right"></emui-Icon>
      <emui-Icon name="emui-arrow-bottom"></emui-Icon>
      <emui-Icon name="emui-arrow-left"></emui-Icon>
    </div>
    <!--  -->
    <!-- <emui-nav
      :selected.sync="selected"
      vertical
      style="width: 200px; margin: 20px 0 0 20px"
    >
      <emui-nav-item name="home">首页</emui-nav-item>
      <emui-sub-nav name="about">
        <template slot="title">关于</template>
        <emui-nav-item name="culture">企业文化</emui-nav-item>
        <emui-nav-item name="developers">开发团队</emui-nav-item>
        <emui-sub-nav name="contacts">
          <template slot="title">联系电话</template>
          <emui-nav-item name="wechat">微信</emui-nav-item>
          <emui-nav-item name="qq">QQ</emui-nav-item>
          <emui-sub-nav name="phone">
            <template slot="title">通信</template>
            <emui-nav-item name="cm">移动</emui-nav-item>
            <emui-nav-item name="cu">联通</emui-nav-item>
            <emui-nav-item name="cn">电信</emui-nav-item>
          </emui-sub-nav>
        </emui-sub-nav>
      </emui-sub-nav>
      <emui-nav-item name="hire">测试</emui-nav-item>
    </emui-nav> -->
  </div>
</template>

<script>
// import "./components/message/index"
export default {
  name: "App",
  mounted() {},
  methods: {
    messageOpenMeth(type) {
      this.$notice.open({
        title: "这是一条提示文字",
        center: true,
        type: type,
      });
    },
  },

  data() {
    return {
      value: "",
      input: "",
      button: "",
      visiable: false,
      visiable1: false,
      selected: ["culture"],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
