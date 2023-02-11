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
    <emui-tag :size="size"> 4444 </emui-tag>&nbsp;&nbsp;&nbsp;&nbsp;
    <emui-tag :size="size" closable="true"> 4444 </emui-tag
    >&nbsp;&nbsp;&nbsp;&nbsp;
    <emui-tag :size="size" closable="true" hit="true"> 4444 </emui-tag>
    <hr />
    <emui-tag
      :size="size"
      closable="true"
      hit="true"
      :type="type"
      effect="dark"
    >
      4444
    </emui-tag>
    <hr />
    <emui-progress :progress="progress"></emui-progress>
    <hr />
    <emui-progress :progress="progress" size="large"></emui-progress>
    <div>
      <emui-Link type="default"></emui-Link>
      <emui-Link type="primary"></emui-Link>
      <emui-Link type="success"></emui-Link>
      <emui-Link type="warning"></emui-Link>
      <emui-Link type="danger"></emui-Link>
      <emui-Link type="info"></emui-Link>
    </div>
    <div>
      <emui-Link type="default" disabled></emui-Link>
      <emui-Link type="primary" disabled></emui-Link>
      <emui-Link type="success" disabled></emui-Link>
      <emui-Link type="warning" disabled></emui-Link>
      <emui-Link type="danger" disabled></emui-Link>
      <emui-Link type="info" disabled></emui-Link>
    </div>
    <div>
      <emui-Link type="default" underline></emui-Link>
      <emui-Link type="primary" underline></emui-Link>
      <emui-Link type="success" underline></emui-Link>
      <emui-Link type="warning" underline></emui-Link>
      <emui-Link type="danger" underline></emui-Link>
      <emui-Link type="info" underline></emui-Link>
    </div>
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
      size: "large",
      type: "warning",
      progress: 40,
    };
  },
};
</script>


<style scoped lang="scss">
</style>
