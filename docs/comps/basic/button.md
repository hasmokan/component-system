---
title: button
---

## 使用

最朴实无华的组件，组件库的核心
<br>
<br>
日常生活中，少不了对话，emui 为您提供了两种对话框，您可以通过`v-slot`填入指定的插槽，实现对话的按钮功能
::: demo 日常生活中，少不了对话，emui 为您提供了两种对话框，您可以通过`v-slot`填入指定的插槽，实现对话的按钮功能

```html
<template>
  <div id="app">
    <emui-button type="primarygold" @click="visiable = true"
      >对话框dialog
    </emui-button>
    <emui-dialog title="emui提示您" :visiable.sync="visiable">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用emui组件库
      <template v-slot:footer>
        <emui-button type="primarygold" @click="visiable = false" mimicry
          >确定</emui-button
        >
        <emui-button @click="visiable = false">取消</emui-button>
      </template>
    </emui-dialog>
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
  };
</script>
```

:::

## 使用

朴实无华的对话 dialog

::: demo 朴实无华的对话 dialog

```html


    <emui-button type="primarygold" @click="visiable1 = true"
      >对话框dialog2
    </emui-button>
    <emui-dialog title="emui提示您" :visiable.sync="visiable1">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用emui组件库
    </emui-dialog>
  </div>


<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
        visiable1: false,
      };
    },
  };
</script>
```

:::

## Attributes

### 1、dialog

| 属性     | 属性值 | 说明                          |
| -------- | ------ | ----------------------------- |
| title    | String | dialog 标题                   |
| visiable | String | dialog 是否开始就展示在页面上 |
| v-slot   | slot   | 给对话框添加开关按钮          |
