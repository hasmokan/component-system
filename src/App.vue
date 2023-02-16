<template>
  <div id="app">
    <emui-switch></emui-switch>
  </div>
</template>
<script>
// import "./components/message/index"
export default {
  name: "App",
  mounted() {},

  data() {
    return {
      activity: {
        name: "123",
        email: "",
        address: "",
        way: "",
        datalist: [],
        myValue: "",
      },
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        address: [{ required: true, message: "不能为空", trigger: "change" }],
        way: [{ required: true, message: "不能为空", trigger: "change" }],
        datalist: [
          {
            type: "array",
            required: true,
            message: "不能为空",
            trigger: "change",
          },
        ],
        myValue: [{ required: true, message: "至少选择一项" }],
      },
      options: [
        { key: "key1", label: "选项1" },
        { key: "key2", label: "选项2" },
        { key: "key3", label: "选项3" },
        { key: "key4", label: "选项4" },
        { key: "key5", label: "选项5" },
        { key: "key6", label: "选项6" },
        { key: "key7", label: "选项7" },
      ],
      selected: ["culture"],
      size: "large",
      type: "warning",
      progress: 40,
      columns: [
        { text: "姓名", filed: "name", width: "230" },
        { text: "分数", filed: "score", width: "230" },
      ],
      dataSource: [
        { id: 1, name: "lili", score: 100, description: "score is ok" },
        { id: 2, name: "bobo", score: 100, description: "score is ok" },
        { id: 3, name: "siry", score: 100 },
        { id: 4, name: "laoliu", score: 100 },
        { id: 5, name: "laoliu", score: 100 },
        { id: 6, name: "laoliu", score: 100 },
        { id: 7, name: "laoliu", score: 100 },
        { id: 8, name: "laoliu", score: 100 },
        { id: 9, name: "laoliu", score: 100 },
        { id: 10, name: "laoliu", score: 100 },
        { id: 11, name: "laoliu", score: 100 },
        { id: 12, name: "laoliu", score: 100 },
        { id: 13, name: "laoliu", score: 100 },
      ],
      selectedItems: [],
      orderBy: {
        name: "asc", //升序
        score: "desc", //降序
      },
      loading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) console.log("提交成功");
        else console.log("校验失败");
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
    changeItems(info) {
      // let {selected,index,item}=info;
      console.log(info);
    },
    messageOpenMeth(type) {
      this.$notice.open({
        title: "这是一条提示文字",
        center: true,
        type: type,
      });
    },
  },
};
</script>


<style scoped lang="scss">
</style>;
