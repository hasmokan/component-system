---
title: link
---

## 使用
### 基本使用
:::demo
```html
<emui-link type='default'></emui-link>
<emui-link type='primary'></emui-link>
<emui-link type='success'></emui-link>
<emui-link type='warning'></emui-link>
<emui-link type='danger'></emui-link>
<emui-link type='info'></emui-link>
```
:::

### 禁用模式
:::demo
```html
<emui-link type='default' disabled></emui-link>
<emui-link type='primary' disabled></emui-link>
<emui-link type='success' disabled></emui-link>
<emui-link type='warning' disabled></emui-link>
<emui-link type='danger' disabled></emui-link>
<emui-link type='info' disabled></emui-link>
```
:::

### 添加下划线
:::demo
```html
<emui-link type='default' underline></emui-link>
<emui-link type='primary' underline></emui-link>
<emui-link type='success' underline></emui-link>
<emui-link type='warning' underline></emui-link>
<emui-link type='danger' underline></emui-link>
<emui-link type='info' underline></emui-link>
```
:::

### 添加链接文本
:::demo
```html
<emui-link type='default'>文字链接1</emui-link>
<emui-link type='primary'>文字链接2</emui-link>
<emui-link type='success'>文字链接3</emui-link>
<emui-link type='warning'>文字链接4</emui-link>
<emui-link type='danger'>文字链接5</emui-link>
<emui-link type='info'>文字链接6</emui-link>
```
:::

## Attributes

| 参数      | 说明         | 类型    | 可选值                                       | 默认值   |
| --------- | ------------ | ------- | -------------------------------------------- | -------- |
| type      | 链接类型     | String  | default,primary,success,warning,danger,info | default  |
| href      | href属性     | String  | -                                            | -        |
| underline | 是否有下划线 | Boolean | -                                            | false    |
| disabled  | 是否禁用     | Boolean | -                                            | false    |
| value     | 显示文本内容 | String  | -                                            | 文字链接 |
