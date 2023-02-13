---
title: button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <emui-button type="primarywhite">确认</emui-button>
  <emui-button type="primarygold">确认</emui-button>
  <emui-button type="successwhite">测试</emui-button>
  <emui-button type="successgold">测试</emui-button>
</template>


### 使用
```html
<emui-button type="primarywhite">确认</emui-button>
<emui-button type="primarygold">确认</emui-button>
<emui-button type="successwhite">测试</emui-button>
<emui-button type="successgold">测试</emui-button>
```