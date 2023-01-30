<template>
  <div class="testButton">
    <!-- type -->
    <div>
      <emuiButton type="default">取消</emuiButton>
      <emuiButton type="primarywhite">确认</emuiButton>
      <emuiButton type="primarygold">确认</emuiButton>
      <emuiButton type="successwhite">测试</emuiButton>
      <emuiButton type="successgold">测试</emuiButton>
      <emuiButton type="warning">测试</emuiButton>
      <emuiButton type="dangerwhite">测试</emuiButton>
      <emuiButton type="dangergold" cut>测试</emuiButton>
    </div>
    <!-- round -->
    <div>
      <emuiButton type="default" round>取消</emuiButton>
      <emuiButton type="primarywhite" round>确认</emuiButton>
      <emuiButton type="primarygold" round>确认</emuiButton>
      <emuiButton type="successwhite" round>测试</emuiButton>
      <emuiButton type="successgold" round>测试</emuiButton>
      <emuiButton type="warning" round>测试</emuiButton>
      <emuiButton type="dangerwhite" round>测试</emuiButton>
      <emuiButton type="dangergold" round>测试</emuiButton>
    </div>
    <!-- plain -->
    <div>
      <emuiButton type="default" plain>取消</emuiButton>
      <emuiButton type="primarywhite" plain>确认</emuiButton>
      <emuiButton type="primarygold" plain>确认</emuiButton>
      <emuiButton type="successwhite" plain>测试</emuiButton>
      <emuiButton type="successgold" plain>测试</emuiButton>
      <emuiButton type="warning" plain>测试</emuiButton>
      <emuiButton type="dangerwhite" plain>测试</emuiButton>
      <emuiButton type="dangergold" plain>测试</emuiButton>
    </div>
    <div>
      <emuiButton type="default" disabled>取消</emuiButton>
      <emuiButton type="primarywhite" disabled>确认</emuiButton>
      <emuiButton type="primarygold" disabled>确认</emuiButton>
      <emuiButton type="successwhite" disabled>测试</emuiButton>
      <emuiButton type="successgold" disabled>测试</emuiButton>
      <emuiButton type="warning" disabled>测试</emuiButton>
      <emuiButton type="dangerwhite" disabled>测试</emuiButton>
      <emuiButton type="dangergold" disabled>测试</emuiButton>
    </div>
    <div>
      <emuiButton type="default" circle>取消</emuiButton>
      <emuiButton type="primarywhite" circle>确认</emuiButton>
      <emuiButton type="primarygold" circle>确认</emuiButton>
      <emuiButton type="successwhite" circle>测试</emuiButton>
      <emuiButton type="successgold" circle>测试</emuiButton>
      <emuiButton type="warning" circle>测试</emuiButton>
      <emuiButton type="dangerwhite" circle>测试</emuiButton>
      <emuiButton type="dangergold" circle>测试</emuiButton>
    </div>
    <!-- 拟态还没弄完 -->
    <!-- <div>
      <emuiButton type="default" mimicry>取消</emuiButton>
      <emuiButton type="primarywhite" mimicry>确认</emuiButton>
      <emuiButton type="primarygold" mimicry>确认</emuiButton>
      <emuiButton type="successwhite" mimicry>测试</emuiButton>
      <emuiButton type="successgold" mimicry>测试</emuiButton>
      <emuiButton type="warning" mimicry>测试</emuiButton>
      <emuiButton type="dangerwhite" mimicry>测试</emuiButton>
      <emuiButton type="dangergold" mimicry>测试</emuiButton>
    </div> -->
    <!-- icon还没弄 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.testButton > div > button {
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
}
</style>
