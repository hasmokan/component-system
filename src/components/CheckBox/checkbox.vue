<template>
  <div class="checkbox" @click="handleChange">
    <span class="emui-checkbox-primary">
      <input
        type="checkbox"
        class="emui-checkbox"
        v-model="currentValue"
        :disabled="isDisabled"
        :class="checkboxClass"
        :name="name"
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
export default {
  name: "emui-checkbox",
  data() {
    return {
      currentValue: false,
    };
  },
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
    // currentValue() {
    //   if (!this.isGrouped) {
    //     return this.value;
    //   } else {
    //     return "";
    //   }
    // },
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
  },
  methods: {
    handleChange() {
      this.currentValue = !this.currentValue;
      if (this.isGrouped) {
        if (this.currentValue) {
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
};
</script>

<style lang="scss" scoped>
@import "@/styles/checkbox";
</style>