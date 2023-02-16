<template>
  <div class="emui-tag-list">
    <emui-tag closable v-for="(tag, index) in datalist" :key="index">{{
      tag
    }}</emui-tag>
    <span class="add-tag" v-if="showAddTag" @click="handlerNewAdd"
      >+ New Tag</span
    >
    <input
      ref="input"
      type="text"
      class="add-input"
      v-else
      @blur="handlerBlur($event)"
      @keyup.enter="handlerenter($event)"
    />
  </div>
</template>

<script>
export default {
  name: "emui-tag-list",
  data() {
    return {
      showAddTag: true,
      isEnter: false,
    };
  },
  created() {
    this.$on("data-item-remove", (item) => {
      let copy = JSON.parse(JSON.stringify(this.datalist));
      let index = copy.indexOf(item);
      copy.splice(index, 1);
      this.$emit("update:datalist", copy);
    });
  },
  props: {
    datalist: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handlerNewAdd() {
      this.showAddTag = false;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handlerBlur(e) {
      if (this.isEnter) {
        this.showAddTag = true;
        let copy = JSON.parse(JSON.stringify(this.datalist));
        copy.push(e.target.value);
        this.$emit("update:datalist", copy);
        this.isEnter = false;
      } else {
        this.showAddTag = true;
        let copy = JSON.parse(JSON.stringify(this.datalist));
        copy.push(e.target.value);
        this.$emit("update:datalist", copy);
      }
    },
    handlerenter(e) {
      this.isEnter = true;
      e.target.blur(e);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/common/scss/color";
.emui-tag-list {
  display: flex;
  align-items: center;
  width: 100%;
  .add-tag {
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #d9ecff;
    font-size: 12px;
    &:hover {
      cursor: pointer;
      background-color: #c5eaed;
      color: #8cc1f6;
    }
  }
  .add-input {
    width: 100px;
    outline: none;
    box-sizing: border-box;
    border-radius: 4px;
    border: 2px solid $primary-color;
    font-size: 14px;
    padding: 7px 10px;
  }
}
</style>