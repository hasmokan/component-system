---
title: switch
---

## 使用

> 你可以通过设置`v-model`来达到独立控制开关，或者控制开关的状态，` activeColor` `inactiveColor `分别控制开启和关闭的颜色

:::demo

```html
<template>
  <div id="app">
    <emui-switch name="12" v-model="active1"></emui-switch>

    <emui-switch
      name="11"
      v-model="active2"
      activeColor="red"
      inactiveColor="green"
    ></emui-switch>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        active1: false,
        active2: false,
      };
    },
  };
</script>
```

:::

## Attributes

### 1、switch

| 属性          | 属性值 | 说明                |
| ------------- | ------ | ------------------- |
| v-model       | Object | switch 绑定的对象值 |
| activeColor   | String | 激活的颜色          |
| inactiveColor | String | 没激活的颜色        |
| name          | String | 名字                |
