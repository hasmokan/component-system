<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"emui-form",
    data(){
        return {
            fields:[],//接受formitem子项
        }
    },
    props:{
        //接受form动态绑定的数据
        model:{
            type:Object
        },
        //接受校验规则
        rules:{
            type:Object
        }
    },
    provide(){
        return {
            form:this
        }
    },
    methods: {
    resetFields() {
      this.fields.forEach(field => field.resetField())
    },
    validate(cb) {
      return new Promise(resolve => {
        let valid = true, count = 0;
        this.fields.forEach(field => {
          field.validate('', error => {
            if (error) valid = false;
            if (++count === this.fields.length) {
              resolve(valid);
              if (typeof cb === 'function') cb(valid);
            }
          })
        })
      })
    }
  },
    created(){
        this.$on('formitem-add',filed=>{
            if(filed) this.fields.push(filed);
        })
        this.$on('formitem-remove',filed=>{
            if (filed.prop) this.fields.splice(this.fields.indexOf(filed), 1);
        })
    }
}
</script>

<style>

</style>