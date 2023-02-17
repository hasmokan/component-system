<template>
  <transition name="message-fade" @before-leave="destroyMeth">
    <div
      :id="id"
      class="emui-message"
      v-if="visible"
      :class="[type, { center }]"
    >
      <i class="icon iconfont" :class="'icon-' + type"></i>
      <div class="title">
        {{ title }}
      </div>
      <!--      <i class="icon iconfont icon-guanbi close-btn" @click="closeMeth"></i>-->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      top: null,
      onClose: null, //销毁的时候回调方法
    };
  },
  props: {
    //传入的文字
    title: {
      type: String,
      default: "",
    },
    //是否居中
    center: {
      type: Boolean,
      default: false,
    },
    //样式类型
    type: {
      type: String,
      default: "",
    },
    //  多少毫秒后关闭
    time: {
      type: Number,
      default: 2000,
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    destroyMeth() {
      this.$destroy(this.$el);
      this.$el.parentNode.removeChild(this.$el);
    },
    closeMeth() {
      if (typeof this.onClose == "function") {
        this.onClose(this.id);
      }
    },
    watch: {
      // eslint-disable-next-line no-unused-vars
      visible(newVal, oldVal) {
        if (!newVal) {
          this.closeMeth();
        }
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
    }, this.time);
  },
};
</script>
