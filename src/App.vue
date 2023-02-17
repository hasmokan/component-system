<template>
  <div id="app">
    <button @click="notice('success')">notice</button>
   </div>
</template>

<script>
export default {
  methods:{
    notice(type){
       this.$notice.open({
        title:"这是一条提示文字",
        center:true,
        type:type
      });
    }
  }
};
</script>
