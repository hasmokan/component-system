---
title: tag
---

## 使用
### 基本使用
::: demo
```html
<emui-tag>标签1</emui-tag>
<emui-tag type="success">标签2</emui-tag>
<emui-tag type="info">标签3</emui-tag>
<emui-tag type="warning">标签4</emui-tag>
<emui-tag type="danger">标签5</emui-tag>
```
:::

### 可关闭的Tag
::: demo
```html
<emui-tag closable>标签1</emui-tag>
<emui-tag type="success" closable>标签2</emui-tag>
<emui-tag type="info" closable>标签3</emui-tag>
<emui-tag type="warning" closable>标签4</emui-tag>
<emui-tag type="danger" closable>标签5</emui-tag>
```
:::

### 动态编辑标签
::: demo
```html
<emui-tag-list :datalist.sync="datalist"></emui-tag-list>
<script>
export default {
  data(){
    return {
      datalist:['标签1','标签2','标签3']
    }
  }
};
</script>
```
:::

## Attributes
### 1、tag

| 属性     | 属性值                      | 说明          |
| -------- | --------------------------- | ------------- |
| type     | success/warning/info/danger | 不同颜色的tag |
| closable | Boolean                     | 是否可关闭    |

### 2、tag-list

| 属性     | 属性值 | 说明                                 |
| -------- | ------ | ------------------------------------ |
| datalist | Array  | 需要在tag上展示的数据，必须加`.sync` |

