---
title: message

---

## 使用

> 最朴实无华的组件，组件库的核心,e 码当先团队为您提供了四种属性选择，供您在各种开发环境下运行，您只需要通过`type`属性来设置

### 基础使用

::: demo

```html
<template>
    <div id='app'>
        <emui-button type="default" @click="messageOpenMeth('info')">info的消息提示</emui-button>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                visiable: false,
            }
        },
        methods: {
            messageOpenMeth(type){
                this.$notice.open({
                    title:'这是一条消息提示',
                    center:true,
                    type:type
                })
            }
        }
    }
</script>
```

:::
### 不同状态使用

::: demo

```html
<template>
    <div id='app'>
        <emui-button type="primarywhite" @click="messageOpenMeth('info')">info的消息提示</emui-button>
        <emui-button type="successwhite" @click="messageOpenMeth('success')">success的消息提示</emui-button>
        <emui-button type="warning" @click="messageOpenMeth('warning')">warning的消息提示</emui-button>
        <emui-button type="dangerwhite" @click="messageOpenMeth('error')">error的消息提示</emui-button>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                visiable: false,
            };
        },
        methods: {
            messageOpenMeth(type){
                this.$notice.open({
                    title:'这是一条消息提示',
                    center:true,
                    type:type
                })
            },
        },

    };
</script>
```
:::

## Attributes

### 1、message消息属性

| 属性    | 属性值 | 说明                  |
| ------- | ------ | --------------------- |
| info    | String | 普通的message消息提示 |
| success | String | 成功的message消息提示 |
| warning | String | 警告的message消息提示 |
| error   | String | 错误的message消息提示 |
