---
title: nav
---

## 使用

> 我们还可以通过`emui-nav-item`填充 nav

::: demo 最普通的竖排

```html
<div id="app">
  <emui-nav :selected.sync="selected" style="margin: 20px 0 0 20px;">
    <emui-nav-item name="home">首页</emui-nav-item>
    <emui-nav-item name="hi1re">测试</emui-nav-item>
    <emui-nav-item name="123">按钮</emui-nav-item>
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
    <emui-nav-item name="hire">测试</emui-nav-item>
    <emui-nav-item name="22">你好</emui-nav-item>
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
