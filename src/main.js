import Vue from 'vue'
import App from './App.vue'
import emuiButton from "./components/Button/button"
import emuiInput from "./components/Input/input"
import emuiRadio from "./components/Radio/radio"
import emuiRadioButton from "./components/Radio/RadioButton"
import emuiRadioGroup from "./components/Radio/RadioGroup"
import emuiForm from "./components/Form/form"
import emuiFormItem from "./components/Form/formItem"
import emuiCheckBox from "./components/CheckBox/checkbox"
import emuiCheckBoxGroup from "./components/CheckBox/checkboxGroup"
import emuiSelect from "./components/Select/select"
import emuiOption from "./components/Select/option"
import emuiTable from "./components/Table/table"
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false
Vue.component(emuiButton.name,emuiButton)
Vue.component(emuiInput.name,emuiInput)
Vue.component(emuiRadio.name,emuiRadio)
Vue.component(emuiRadioButton.name,emuiRadioButton)
Vue.component(emuiRadioGroup.name,emuiRadioGroup)
Vue.component(emuiForm.name,emuiForm)
Vue.component(emuiFormItem.name,emuiFormItem)
Vue.component(emuiCheckBox.name,emuiCheckBox)
Vue.component(emuiCheckBoxGroup.name,emuiCheckBoxGroup)
Vue.component(emuiSelect.name,emuiSelect)
Vue.component(emuiOption.name,emuiOption)
Vue.component(emuiTable.name,emuiTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
