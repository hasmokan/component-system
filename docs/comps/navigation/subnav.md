---
title: subnav
---

## 使用

> 我们还可以通过`emui-nav-item`填充 nav

:::demo

```vue
<template>
  <div id="app">
    <emui-nav
      :selected.sync="selected"
      style="margin: 20px 0 0 20px;margin-bottom:300px"
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
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      selected: ["culture"],
    };
  },
};
</script>
```

:::

> 我们还可以通过`vertical`支持竖行排列

::: demo 我们还可以通过`vertical`支持竖行排列

```html
<div id="app">
  <emui-nav
    :selected.sync="selected"
    vertical
    style="width: 200px; margin: 20px 0 0 20px;"
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
</div>

<script>
  export default {
    name: "App",

    data() {
      return {
        selected: ["culture"],
      };
    },
  };
</script>
```

:::

## Attributes

### 1、nav

| 属性    | 属性值 | 说明 |
| ------- | ------ | ---- |
| selectd | Array  | 数组 |

### 2、sub-nav

| 属性  | 属性值 | 说明         |
| ----- | ------ | ------------ |
| title | string | 子导航的标题 |

### 2、nav-item

| 属性 | 属性值 | 说明                        |
| ---- | ------ | --------------------------- |
| name | string | 标题的 name 以设置激活 item |
