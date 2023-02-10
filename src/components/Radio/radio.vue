<template>
  <div class="radio">
    <span class="emui-radio-primary">
      <input
        type="radio"
        class="emui-radio"
        :value="label"
        v-model="currentValue"
        :disabled="isDisabled"
        :class="radioClass"
        :name="name"
        @change="handleChange"
      />
      <label
        class="emui-radio-label"
        :class="[{ 'label-disabled': isDisabled }]"
        >{{ label }}</label
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "emui-radio",
  data() {
    return {};
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      dafault: "",
    },
    value: null,
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
    radioGroup: {
      default: "",
    },
  },
  computed: {
    //判断是否被radioGroup包裹
    isGrouped() {
      return !!this.radioGroup;
    },
    currentValue: {
      get() {
        return this.isGrouped ? this.radioGroup.value : this.value;
      },
      set(value) {
        this.isGrouped
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    radioClass() {
      const prefix = "emui-radio";
      return {
        [`${prefix}__disabled--${this.isDisabled}`]: true,
      };
    },
    isDisabled() {
      return this.isGrouped
        ? this.radioGroup.disabled || this.disabled
        : this.isDisabled;
    },
  },
  methods: {
    handleChange() {
      this.isGrouped
        ? this.radioGroup.$emit("change", this.value)
        : this.$emit("change", this.value);
    },
    isDisabled() {
      return this.isGrouped
        ? this.radioGroup.disabled || this.disabled
        : this.disabled;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/radio";
</style>