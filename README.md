# 项目说明

<img src="https://i.328888.xyz/2023/02/20/gZxfp.png" alt="gZxfp.png" border="0" />
# Emui中国风ui组件库
- 文档地址：https://hasmokan.github.io/component-system/
<br>
> 这个基于 Vue2.x 开发的中国风组件库，提供了一系列高质量的中国风 UI 组件，可帮助您轻松地为您的网站或应用程序添加中国文化元素。不仅包括常见的基础组件，还有一些特殊的中国风样式和交互，可以让您的网站或应用程序更具特色和吸引力。同时，这个组件库也提供了完整的文档和示例代码，方便您快速上手，轻松应用。

# 安装

## npm安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm i ema-ui -S
```
## 引入Ema-UI
你可以引入整个 Ema-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Ema-UI。

### 完整引入
在 main.js 中写入以下内容：
```js
import emui from 'ema-ui'
import "ema-ui/dist/css/index.css"
Vue.use(emui)
```
### 按需引入
在 main.js 中写入以下内容：
```js
import {Input,Radio} from 'ema-ui'
import "ema-ui/dist/css/index.css"
Vue.use(Input)
Vue.use(Radio)
```
### 完整组件列表和引入方式
```js
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(Nav)
Vue.use(NavItem)
Vue.use(Subnav)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Link)
Vue.use(Tag)
Vue.use(TagList)
Vue.use(Switcher)
Vue.prototype.$notice = Message;
```
