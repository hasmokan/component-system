<template>
  <div class="form-item">
    <label
      v-show="label"
      :class="{ 'label-required': isRequired }"
      class="form-item-label"
      >{{ label }}</label
    >
    <slot></slot>
    <div v-if="isShowMes" class="message">{{ message }}</div>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
import AsyncValidator from "async-validator";
export default {
  name: "emui-form-item",
  data() {
    return {
      isRequired: false,
      message: "",
      initialValue:""
    };
  },
  mixins: [Emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  mounted() {
    //组件挂载时在form中添加
    if (this.prop) {
      this.dispatch("emui-form", "formitem-add", this);
      // 设置初始值
      if (Array.isArray(this.fieldValue)) {
        this.initialValue = this.fieldValue.concat([]);  
      } else {
        this.initialValue = this.fieldValue;
      }

      this.setRules();
    }
  },
  beforeDestroy() {
    // 组件销毁前在form中销毁
    this.dispatch("emui-form", "fromitem-remove", this);
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    },
    isShowMes(){
      return this.form.model[this.prop]=='';
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.forEach((rule) => {
          if (rule.required !== undefined) this.isRequired = rule.required;
        });
      }
      this.$on("form-blur", this.onFieldBlur);
      this.$on("form-change", this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return formRules;
    },
    // 过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    /**
     * 校验表单数据
     * @param trigger 触发校验类型
     * @param callback 回调函数
     */
    validate(trigger, cb) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) return true;
      // 使用 async-validator
      const validator = new AsyncValidator({ [this.prop]: rules });
      let value = { [this.prop]: this.fieldValue };
      validator.validate(value, { firstFields: true }, (errors) => {
        this.message = errors ? errors[0].message : "";
        if (cb) cb(this.message);
      });
    },
    resetField() {
      this.message = "";
      if(Array.isArray(this.initialValue)){
        this.form.model[this.prop]=this.initialValue.concat([])
      }else{
        this.form.model[this.prop] = this.initialValue;
      }
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  align-items: center;
  margin: 20px;
  font-family: "jiangxizhuokai";
  .form-item-label {
    margin-right: 30px;
  }
  .label-required {
    &::before {
      content: "*";
      color: red;
    }
  }
  .message {
    font-size: 12px;
    color: red;
    margin-left: 5px;
  }
}
</style>