---
title: table
---

## 使用
### 基础使用
::: demo
```html
 <emui-table
      :columns="columns"
      :data="dataSource"
       :orderBy.sync="orderBy" 
></emui-table>   

<script>
export default {
    data(){
        return {
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
      orderBy: {
        name: "asc", //升序
        score: "desc", //降序
      },
    }
    }
}

</script>

  
```
:::

### 带有多选框且固定表头
::: demo
```html
 <emui-table
      :columns="columns"
      :data="dataSource"
      bordered
      compact
      selected
      :selectedItems.sync="selectedItems"
      :orderBy.sync="orderBy"
      :loadding="loading"
      expend-filed="description"
      height="200"
   ></emui-table>   

<script>
export default {
    data(){
        return {
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
      selectedItems: [],
      orderBy: {
        name: "asc", //升序
        score: "desc", //降序
      },
      loading: false,
        }
    }
}

</script>

  
```
:::

## Attributes
| 属性          | 属性值        | 说明                         | 默认  |
| ------------- | ------------- | ---------------------------- | ----- |
| data          | Array         | table展示的数据              | null  |
| columns       | Array         | table每一列的标题            | null  |
| loading       | Boolean       | 表格是否展示loading状态      | false |
| selected      | Boolean       | 表格是否展示多选框           | false |
| height        | Number/String | 表格的高度                   | ' '   |
| selectedItems | Array         | 表格多选框选中项所存入的数组 | [ ]   |
| expendFiled   | String        | 可展开行的具体描述           | ' '   |
| numberVisible | Boolean       | 是否展示序号                 | false |
| bordered      | Boolean       | 是否带边框                   | false |
| compact       | Boolean       | 是否为紧凑型                 | false |
| striped       | Boolean       | 是否展示条纹                 | true  |
| orderBy       | Object        | 排序规则                     | { }   |


