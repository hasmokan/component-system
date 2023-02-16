---
title: select
---

## 使用
::: demo
```html
 <emui-select v-model="myValue" placeholder="请选择">
    <emui-option
        v-for="item in options"
        :label="item.label"
        :value="item.key"
        :key="item.key"
    ></emui-option>
</emui-select>
<script>
export default {
  data() {
    return {
        myValue:"",
       options: [
        { key: "key1", label: "选项1" },
        { key: "key2", label: "选项2" },
        { key: "key3", label: "选项3" },
        { key: "key4", label: "选项4" },
        { key: "key5", label: "选项5" },
        { key: "key6", label: "选项6" },
        { key: "key7", label: "选项7" },
      ],
    }
  }
}
</script>
```
:::

## Attributes
### 1、select

| 属性          | 属性值        | 说明               |
| ------------- | ------------- | ------------------ |
| value/v-model | String/Number | select所绑定的数据 |
| placeholder   | String        | select中的提示文字 |

### 2、option

| 属性  | 属性值        | 说明               |
| ----- | ------------- | ------------------ |
| label | String/Number | option所绑定的数据 |
| value | String/Number | option所绑定的键   |