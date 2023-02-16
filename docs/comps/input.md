---
title: input
---

## 使用

### 基本使用
::: demo
```html
<emui-input v-model="input" placeholder="请输入内容"></emui-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<emui-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</emui-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 可清空 
::: demo 使用`type='clearable'`即可得到一个可清空的输入框
```html
<emui-input
  placeholder="请输入内容"
  v-model="input"
  type="clearable">
</emui-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::
### 密码框
::: demo 使用`type='password'`即可得到一个可切换显示隐藏的密码框
```html
<emui-input
  placeholder="请输入密码"
  v-model="input"
  type="password">
</emui-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 文本域
::: demo  文本域高度可通过`rows`属性控制
```html
<emui-input
  rows="2"
  v-model="input"
  type="textarea">
</emui-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 尺寸
::: demo  可通过`size`属性控制输入框的大小
```html
<emui-input v-model="input1" size="large" placeholder="请输入内容"></emui-input>
<emui-input v-model="input2" size="default" placeholder="请输入内容"></emui-input>
<emui-input v-model="input3" size="small" placeholder="请输入内容"></emui-input>
<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
      }
    }
  }
</script>
```
:::

## Attributes

| 属性        | 属性值                 | 说明           |
| ----------- | ---------------------- | -------------- |
| type        | text/password/textarea | 表单的类型     |
| disabled    | true/false             | 是否禁用表单   |
| size        | small/large/default    | 表单的大小     |
| placeholder | string                 | 输入框占位文本 |
| value       | string                 | 动态绑定的值   |
| cols        | number                 | textarea的列数 |
| rows        | number                 | textarea的行数 |