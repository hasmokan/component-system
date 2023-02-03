<template>
  <div id="app">
  
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      obj:{
        phone:'',
        email:''
      },
      rules: {
        phone: [
          { required: true, message: '不能为空', trigger: 'blur'}
          ],
        email: [
          { required: true, message: '不能为空', trigger: 'blur'},
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
        ]
      }
    }
  },
   methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid)  console.log('提交成功');
        else console.log('校验失败');
      })
    },
    handleReset() { this.$refs.form.resetFields() }
  }
}
</script>

<style scoped lang="scss">
</style>
