---
title: radio
---

## 使用
### 基本使用
::: demo 要使用`radio`组件，只需要设置`emui-radio-group v-model`绑定变量，选中意味着变量的值为相应`radio label`属性的值，`label`可以是`String、Number或Boolean`。
```html
  <emui-radio-group v-model="address">
          <emui-radio label="上海"></emui-radio>
          <emui-radio label="北京"></emui-radio>
 </emui-radio-group>

<script>
  export default {
    data () {
      return {
        address:""
      };
    }
  }
</script>
```
:::

### 禁用状态 
::: demo 只要在`emui-radio`元素中设置`disabled`属性即可，它接受一个Boolean，true为禁用。
```html
  <emui-radio-group v-model="address">
          <emui-radio label="上海" disabled></emui-radio>
          <emui-radio label="北京" disabled></emui-radio>
 </emui-radio-group>

<script>
  export default {
    data () {
      return {
        address:""
      };
    }
  }
</script>
```
:::

### 子项垂直排放
::: demo  只需设置`emui-radio-group`的`vertical`属性为`true`
```html
  <emui-radio-group v-model="address" vertical>
          <emui-radio label="上海"></emui-radio>
          <emui-radio label="北京"></emui-radio>
 </emui-radio-group>

<script>
  export default {
    data () {
      return {
        address:""
      };
    }
  }
</script>
```
:::


### 单选按钮
::: demo
```html
   <emui-radio-group v-model="address">
          <emui-radio-button label="北京"></emui-radio-button>
          <emui-radio-button label="上海"></emui-radio-button>
          <emui-radio-button label="西安"></emui-radio-button>
          <emui-radio-button label="杭州"></emui-radio-button>
    </emui-radio-group>

<script>
  export default {
    data () {
      return {
        address:""
      };
    }
  }
</script>
```
:::

## Attributes
### 1、radio

| 属性            | 属性值                    | 说明           |
| --------------- | ------------------------- | -------------- |
| label           | string / number / boolean | radio 的 value |
| value / v-model | string / number / boolean | 绑定值         |
| disabled        | true/false                | 是否禁用表单   |
| name            | string                    | 原生 name 属性 |

### 2、radio-button

| 属性            | 属性值                    | 说明                  |
| --------------- | ------------------------- | --------------------- |
| label           | string / number / boolean | radio-button 的 value |
| disabled        | true/false                | 是否禁用表单          |
| value / v-model | string / number / boolean | 绑定值                |

### 3、radio-group

| 属性            | 属性值                    | 说明             |
| --------------- | ------------------------- | ---------------- |
| disabled        | true/false                | 是否禁用表单     |
| value / v-model | string / number / boolean | 绑定值           |
| vertical        | true/false                | 子项是否垂直排列 |

