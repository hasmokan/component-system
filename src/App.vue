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

    <emui-nav
      :selected.sync="selected"
      vertical
      style="width: 200px; margin: 20px 0 0 20px; margin-top: 200px"
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
    </emui-nav>

    <!-- <div>
      <emui-icon name="emui-add-blue-style1"></emui-icon>
      <emui-icon name="emui-add-blue-style2"></emui-icon>
      <emui-icon name="emui-add-red-style1"></emui-icon>
      <emui-icon name="emui-add-red-style2"></emui-icon>
      <emui-icon name="emui-address-blue-style1"></emui-icon>
      <emui-icon name="emui-address-blue-style2"></emui-icon>
      <emui-icon name="emui-address-red-style1"></emui-icon>
      <emui-icon name="emui-address-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-custom-blue-style1"></emui-icon>
      <emui-icon name="emui-custom-blue-style2"></emui-icon>
      <emui-icon name="emui-custom-red-style1"></emui-icon>
      <emui-icon name="emui-custom-red-style2"></emui-icon>
      <emui-icon name="emui-delete-blue-style1"></emui-icon>
      <emui-icon name="emui-delete-blue-style2"></emui-icon>
      <emui-icon name="emui-delete-red-style1"></emui-icon>
      <emui-icon name="emui-delete-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-home-blue-style1"></emui-icon>
      <emui-icon name="emui-home-blue-style2"></emui-icon>
      <emui-icon name="emui-home-red-style1"></emui-icon>
      <emui-icon name="emui-home-red-style2"></emui-icon>
      <emui-icon name="emui-info-blue-style1"></emui-icon>
      <emui-icon name="emui-info-blue-style2"></emui-icon>
      <emui-icon name="emui-info-red-style1"></emui-icon>
      <emui-icon name="emui-info-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-message-blue-style1"></emui-icon>
      <emui-icon name="emui-message-blue-style2"></emui-icon>
      <emui-icon name="emui-message-red-style1"></emui-icon>
      <emui-icon name="emui-message-red-style2"></emui-icon>
      <emui-icon name="emui-refresh-blue-style1"></emui-icon>
      <emui-icon name="emui-refresh-blue-style2"></emui-icon>
      <emui-icon name="emui-refresh-red-style1"></emui-icon>
      <emui-icon name="emui-refresh-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-return-blue-style1"></emui-icon>
      <emui-icon name="emui-return-blue-style2"></emui-icon>
      <emui-icon name="emui-return-red-style1"></emui-icon>
      <emui-icon name="emui-return-red-style2"></emui-icon>
      <emui-icon name="emui-search-blue-style1"></emui-icon>
      <emui-icon name="emui-search-blue-style2"></emui-icon>
      <emui-icon name="emui-search-red-style1"></emui-icon>
      <emui-icon name="emui-search-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-seeting-blue-style1"></emui-icon>
      <emui-icon name="emui-seeting-blue-style2"></emui-icon>
      <emui-icon name="emui-seeting-red-style1"></emui-icon>
      <emui-icon name="emui-seeting-red-style2"></emui-icon>
      <emui-icon name="emui-share-blue-style1"></emui-icon>
      <emui-icon name="emui-share-blue-style2"></emui-icon>
      <emui-icon name="emui-share-red-style1"></emui-icon>
      <emui-icon name="emui-share-red-style2"></emui-icon>
    </div>
    <div>
      <emui-icon name="emui-star-blue-style1"></emui-icon>
      <emui-icon name="emui-star-blue-style2"></emui-icon>
      <emui-icon name="emui-star-red-style1"></emui-icon>
      <emui-icon name="emui-star-red-style2"></emui-icon>
      <emui-icon name="emui-arrow-top"></emui-icon>
      <emui-icon name="emui-arrow-right"></emui-icon>
      <emui-icon name="emui-arrow-bottom"></emui-icon>
      <emui-icon name="emui-arrow-left"></emui-icon>
    </div> -->
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
