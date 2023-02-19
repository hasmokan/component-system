
import Vue from 'vue'

import {Input} from "./components/Input"
import {Checkbox,CheckboxGroup} from "./components/CheckBox"
import {Form,FormItem} from "./components/Form"
import {Radio,RadioButton,RadioGroup} from "./components/Radio"
import {Select,Option} from "./components/Select"
import {Table} from "./components/Table";
import {Switcher} from "./components/Switch"
import {Nav,NavItem,Subnav} from './components/Nav'
import {Dialog} from './components/Dialog'
import {Button} from "./components/Button"
import {Icon} from './components/Icon'
import "./components/Icon/icon.js"
import {Link} from './components/Link'
import {Tag,TagList} from './components/Tag'
import Message from "./components/Message"
import "./assets/iconfont/iconfont.css"

import "./styles/index.scss"
Vue.config.productionTip = false

const install=function(Vue,options={}){
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Radio)
  Vue.use(RadioButton)
  Vue.use(RadioGroup)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Table)
  Vue.use(Nav)
  Vue.use(Switcher)
  Vue.use(NavItem)
  Vue.use(Subnav)
  Vue.use(Dialog)
  Vue.use(Icon)
  Vue.use(Link)
  Vue.use(Tag)
  Vue.use(TagList)
  Vue.prototype.$notice = Message;
}

export default install

export {
  Button,
  Input,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
  Table,
  Nav,
  NavItem,
  Subnav,
  Dialog,
  Icon,
  Link,
  Tag,
  TagList,
  Message,
  Switcher
}