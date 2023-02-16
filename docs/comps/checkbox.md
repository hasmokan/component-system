---
title: checkbox
---

## 使用
### 基本使用
::: demo
```html
 <emui-checkbox-group v-model="datalist">
        <emui-checkbox label="品牌推广"></emui-checkbox>
        <emui-checkbox label="形象普及"></emui-checkbox>
</emui-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

### 禁用状态
::: demo
```html
 <emui-checkbox-group v-model="datalist" disabled>
        <emui-checkbox label="品牌推广"></emui-checkbox>
        <emui-checkbox label="形象普及"></emui-checkbox>
</emui-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

### 子项垂直排列
::: demo
```html
 <emui-checkbox-group v-model="datalist" vertical>
        <emui-checkbox label="品牌推广"></emui-checkbox>
        <emui-checkbox label="形象普及"></emui-checkbox>
</emui-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

## Attributes
### 1、checkbox

| 属性            | 属性值                    | 说明              |
| --------------- | ------------------------- | ----------------- |
| label           | string / number / boolean | checkbox 的 value |
| value / v-model | boolean                   | 绑定值            |
| disabled        | true/false                | 是否禁用表单      |
| name            | string                    | 原生 name 属性    |

### 2、checkbox-group

| 属性            | 属性值     | 说明             |
| --------------- | ---------- | ---------------- |
| disabled        | true/false | 是否禁用表单     |
| value / v-model | Array      | 绑定值           |
| vertical        | true/false | 子项是否垂直排列 |