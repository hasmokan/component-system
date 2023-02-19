<template>
  <div class="checkbox" >
    <span class="emui-checkbox-primary">
      <input
        type="checkbox"
        class="emui-checkbox"
        v-model="currentValue"
        :disabled="isDisabled"
        :class="checkboxClass"
        :name="name"
        @change="handleChange"
      />
      <label
        class="emui-checkbox-label"
        :class="[{ 'label-disabled': isDisabled }]"
        >{{ label }}</label
      >
    </span>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
export default {
  name: "emui-checkbox",
  data() {
    return {};
  },
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean],
      dafault: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  computed: {
    //判断是否被CheckboxGroup包裹
    isGrouped() {
      return !!this.CheckboxGroup;
    },
    checkboxClass() {
      const prefix = "emui-checkbox";
      return {
        [`${prefix}__disabled--${this.isDisabled}`]: true,
      };
    },
    isDisabled() {
      return this.isGrouped
        ? this.CheckboxGroup.disabled || this.disabled
        : this.disabled;
    },
    currentValue: {
      get() {
        if (this.isGrouped) {
         return this.CheckboxGroup.value.indexOf(this.label)!==-1;
        } else {
         return this.value == this.label;
        }
      },
      set(value) {
        if (this.isGrouped) {
          if (value) {
            this.CheckboxGroup.value.push(this.label);
          } else {
            this.CheckboxGroup.value.pop(this.label);
          }
        }
        this.isGrouped
          ? this.CheckboxGroup.$emit("change", this.CheckboxGroup.value)
          : this.$emit("change", this.value);
      },
    },
  },
  methods: {
    handleChange() {
      this.dispatch("emui-form-item", "form-change", this.currentValue);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/checkbox.scss";
</style>

