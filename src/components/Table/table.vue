<template>
  <div class="table" ref="wrapper">
    <div
      :style="{ height:height+'px', overflow: 'auto' }"
      ref="tableWrapper"
      class="tableWrapper"
    >
      <table
        class="emui-table"
        :class="{ bordered, compact, striped }"
        ref="table"
      >
        <thead>
          <tr>
            <th style="width: 50px"></th>
            <th v-if="numberVisible" style="width: 50px">#</th>
            <th style="width: 50px" v-if="selected" class="emui-table-center">
              <input
                type="checkbox"
                @change="onChangeAllItems"
                ref="allChecked"
                :checked="isAllItemsSelected"
              />
            </th>
            <th
              v-for="column in columns"
              :key="column.filed"
              :style="{ width: column.width+'px' }"
            >
              <div class="table-column">
                {{ column.text }}
                <span
                  class="table-sort"
                  v-if="column.filed in orderBy"
                  @click="changeOrderBy(column.filed)"
                >
                  <span
                    class="iconfont icon-sort-up"
                    :class="{ active: orderBy[column.filed] === 'asc' }"
                  ></span>
                  <span
                    class="iconfont icon-sort-down"
                    :class="{ active: orderBy[column.filed] === 'desc' }"
                  ></span>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in data" >
           <tr :key="item.id">
            <td style="width: 50px">
             <span class="iconfont icon-xiangyou1 emui-table-expend-icon" :class="{'emui-table-expend-icon-active':inExpendIds(item.id)}" @click="expendItem(item.id)"></span>
            </td>
            <td v-if="numberVisible" style="width: 50px">{{ index }}</td>
            <td style="width: 50px" v-if="selected" class="emui-table-center">
              <input
                type="checkbox"
                @change="onChangeItem($event, item)"
                :checked="
                  selectedItems.filter((i) => i.id == item.id).length > 0
                "
              />
            </td>
            <template v-for="column in columns">
              <td :key="column.filed" :style="{ width: column.width+'px' }">
                {{ item[column.filed] }}
              </td>
            </template>
          </tr>
          <tr :key="`${item.id}-expend`" v-if="inExpendIds(item.id)">
            <td :colspan="columns.length+1">
               {{item[expendFiled]||'null'}}
            </td>
          </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="table-loading" v-if="loading">
      <span class="iconfont icon-loading"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "emui-table",
  props: {
    data: {
      type: Array,
      required: true,
      validator(array) {
        //必须保证data每一项都有id
        return !array.filter((item) => item.id == undefined).length > 0;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    selected:{
      type:Boolean,
      default:false
    },
    height: {
      type: [Number, String],
      default: "",
    },
    expendFiled:{
      //可展开行的具体描述
      type:String,
      default:''
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: true,
    },
    numberVisible: {
      //是否展示序号
      type: Boolean,
      default: false,
    },
    bordered: {
      //是否带边框
      type: Boolean,
      default: false,
    },
    compact: {
      //是否为紧凑型
      type: Boolean,
      default: false,
    },
    striped: {
      //是否展示条纹
      type: Boolean,
      default: true,
    },
    orderBy: {
      //排序规则
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      table2: "",
      expendIds:[],  //存放可展开元素的id
      tableHeader2:''
    };
  },
  mounted() {
    //将页面原有的table复制一份
    let table2 = this.$refs.table.cloneNode(false);
    table2.classList.add("emui-table-copy");
    this.table2=table2;
    this.$refs.wrapper.appendChild(table2)
    let tHead = this.$refs.table.children[0];
    const { height } = tHead.getBoundingClientRect();
    this.$refs.table.style.marginTop=height+'px';
    this.updateHeadersWidth();
    this.onWindowResize = () => this.updateHeadersWidth();
    window.addEventListener("resize", this.onWindowResize); //监听页面宽度发生变化，随时调整tableheader宽度
  },
  beforeDestroy() {
    this.table2.remove();
    window.removeEventListener("resize", this.onWindowResize);
  },
  watch: {
    selectedItems() {
      if (
        this.selectedItems.length !== this.data.length &&
        this.selectedItems.length !== 0
      ) {
        this.$refs.allChecked.indeterminate = true; //打开半选状态
      } else {
        this.$refs.allChecked.indeterminate = false;
      }
    },
  },
  computed: {
    isAllItemsSelected() {
      const a = this.data.map((item) => item.id).sort();
      const b = this.selectedItems.map((item) => item.id).sort();
      if (a.length !== b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    },
  },
  methods: {
    updateHeadersWidth() {
     const { width } = this.$refs.table.getBoundingClientRect();
     this.table2.style.width = width + "px";
     let table2=this.table2
     let tableHeader=Array.from(this.$refs.table.children).filter(node=>node.tagName.toLowerCase()=='thead')[0]
     let tableBody=Array.from(this.$refs.table.children).filter(node=>node.tagName.toLowerCase()=='tbody')[0]
     table2.appendChild(tableHeader)
      Array.from(tableBody.children[0].children).map((th,i)=>{
        const {width}=th.getBoundingClientRect();
        table2.children[0].children[0].children[i].style.width=width+'px';
      })
    },
     onChangeItem(e, item) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter((i) => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy); //changeItem为处理选中状态的自定义事件
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
      if (selected) {
        this.$emit("update:selectedItems", this.data);
      } else {
        this.$emit("update:selectedItems", []);
      }
    },
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy));
      let oldValue = copy[key];
      if (oldValue == "asc") {
        copy[key] = "desc";
      } else if (oldValue == "desc") {
        copy[key] = true;
      } else {
        copy[key] = "asc";
      }
      this.$emit("update:orderBy", copy);
    },
    expendItem(id){
      if(this.inExpendIds(id)){
        this.expendIds.splice(this.expendIds.indexOf(id),1);
      }else{
         this.expendIds.push(id);
      } 
    },
    inExpendIds(id){
      return this.expendIds.indexOf(id)>=0
    }
    },
  }
</script>

