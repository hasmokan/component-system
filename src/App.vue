<template>
  <div id="app">
    <emui-form :model="activity" :rules="rules" ref="form">
      <emui-form-item label="活动名称" prop="name">
        <emui-input v-model="activity.name"></emui-input>
      </emui-form-item>
      <emui-form-item label="活动地点" prop="address">
        <emui-radio-group v-model="activity.address">
          <emui-radio label="上海"></emui-radio>
          <emui-radio label="北京"></emui-radio>
        </emui-radio-group>
      </emui-form-item>
      <emui-form-item label="活动方式" prop="way">
        <emui-radio-group v-model="activity.way">
          <emui-radio-button label="组队"></emui-radio-button>
          <emui-radio-button label="个人"></emui-radio-button>
        </emui-radio-group>
      </emui-form-item>
      <emui-form-item label="活动性质" prop="datalist">
        <emui-checkbox-group v-model="activity.datalist">
          <emui-checkbox label="品牌推广"></emui-checkbox>
          <emui-checkbox label="形象普及"></emui-checkbox>
        </emui-checkbox-group>
      </emui-form-item>
      <emui-form-item label="请选择" prop="myValue">
        <emui-select v-model="activity.myValue" placeholder="请选择">
          <emui-option
            v-for="item in options"
            :label="item.label"
            :value="item.key"
            :key="item.key"
          ></emui-option>
        </emui-select>
      </emui-form-item>
      <emui-form-item>
        <emui-Button @click="handleSubmit">提交</emui-Button>
        <emui-Button @click="handleReset">重置</emui-Button>
      </emui-form-item>
    </emui-form>
    <emui-table
      :columns="columns"
      :data="dataSource"
      bordered
      compact
      selected
      :selectedItems.sync="selected"
      :orderBy.sync="orderBy"
      :loadding="loading"
      height="200"
      expend-filed="description"
    ></emui-table>
  </div>
</template>
<script>
export default {
  name: "App",
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
      columns: [
        { text: "姓名", filed: "name" ,width:"230"},
        { text: "分数", filed: "score" ,width:"230"},
      ],
      dataSource: [
        { id: 1, name: "lili", score: 100 ,description:'score is ok'},
        { id: 2, name: "bobo", score: 100 ,description:'score is ok'},
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
      selected: [],
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
  },
};
</script>


<style scoped lang="scss">

</style>;
