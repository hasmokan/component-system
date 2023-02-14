<template>
  <div class="option">
    <div @click="addItem" class="content">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "emui-option",
  props: {
    label: {
      type: [String, Number],
      dafault: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ["select"],
  created() {
    this.select.options.push({
      label: this.label,
      value: this.value,
    });
  },
  methods: {
    addItem() {
      this.select.curValue = this.value;
      this.select.curLabel = this.label;
      this.select.showOption();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/common/scss/color";
.option {
  cursor: pointer;
  &:hover {
    background-color: $primary-active-color;
  }
  .content {
    width: 200px;
    height: 25px;
    line-height: 25px;
    padding: 3px 10px;
  }
}
</style>