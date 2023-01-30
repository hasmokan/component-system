<template>
  <button
    :class="[
      'emui-button',
      `emui-button--${type}`,
      { plain: plain },
      { round: round },
      { circle: circle },
      { disabled: disabled },
      { cut: cut },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <fai :icon="icon" v-if="icon" />
    <!-- tip:根据是否传入内容进行span渲染 -->
    <!-- tip:根据是否传入内容进行span渲染 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "emui-Button",
  props: {
    type: {
      //数据类型字符串
      type: String,
      default: "default",
      // type值校验
      validator: function (value) {
        return (
          [
            "default",
            "success",
            "primary",
            "danger",
            "warning",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
    // 朴素按钮
    plain: {
      type: Boolean,
    },
    // round按钮
    round: {
      type: Boolean,
    },
    // 圆形按钮
    circle: {
      type: Boolean,
    },
    // icon
    icon: {
      // tip：这里icon为数组类型，给它添加一个布尔作为默认值，让fai不渲染
      type: [Array, Boolean],
      default: false,
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    mimicry: {
      type: Boolean,
      default: false,
    },
    cut: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共scss类
@import "@/assets/scss/color.scss";
//引入江西拙楷字体
@import "@/assets/scss/font.scss";

//常规字体库
.emui-button {
  display: inline-block;
  position: relative;
  font-family: "jiangxizhuokai";
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  //字体颜色
  color: $font-black-color;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;

  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: $warning-color;
    background-color: #ecf5ff;
  }
}
.emui-button--default {
  display: inline-block;
  position: relative;
  font-family: "jiangxizhuokai";
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  //字体颜色
  color: $font-black-color;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;

  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: $warning-color;
    background-color: #ecf5ff;
  }
}
.emui-button--primarygold {
  color: $font-gold-color;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.emui-button--primarywhite {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.emui-button--successgold {
  color: $font-gold-color;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.emui-button--successwhite {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.emui-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.emui-button--dangerwhite {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}
.emui-button--dangergold {
  color: $font-gold-color;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// round
.emui-button.round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.emui-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
//拟态
.emui-button.mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}
.emui-button--primary.mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.emui-button--info.mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.emui-button--success.mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.emui-button--warning.mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.emui-button--danger.mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

// 朴素按钮
.emui-button.plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: $primary-color;
    color: $primary-color;
  }
}
.emui-button--primarywhite.plain {
  box-shadow: unset;
  color: #fff;
  background: $primary-active-color;
  &:hover,
  &:focus {
    background: $normal-active-color;
    border-color: $font-gold-color;
    color: $font-gold-color;
  }
}

.emui-button--primarygold.plain {
  box-shadow: unset;
  color: $font-gold-color;
  background: $primary-active-color;
  &:hover,
  &:focus {
    background: $normal-active-color;
    border-color: $font-gold-color;
    color: $font-gold-color;
  }
}
.emui-button--successwhite.plain {
  box-shadow: unset;
  color: #fff;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: $font-gold-color;
    color: #fff;
  }
}
.emui-button--successgold.plain {
  box-shadow: unset;
  color: $font-gold-color;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: $font-gold-color;
    color: $font-gold-color;
  }
}
.emui-button--info.plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.emui-button--warning.plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: $warning-color;
    border-color: $font-gold-color;
    color: #fff;
  }
}
.emui-button--dangerwhite.plain {
  box-shadow: unset;
  color: #fff;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: $danger-color;
    border-color: $font-gold-color;
    color: $font-gold-color;
  }
}
.emui-button--dangergold.plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: $danger-color;
    border-color: $font-gold-color;
    color: $font-gold-color;
  }
}

//圆形按钮
.emui-button.circle {
  border-radius: 50%;
}
// //切角按钮cut
// .emui-button.cut {
//   background: linear-gradient(135deg, transparent 10px, #ff1493 0) top left,
//     linear-gradient(-135deg, transparent 10px, #ff1493 0) top right,
//     linear-gradient(-45deg, transparent 10px, #ff1493 0) bottom right,
//     linear-gradient(45deg, transparent 10px, #ff1493 0) bottom left;
//   background-size: 50% 50%;
//   background-repeat: no-repeat;
// }

// 禁用
.emui-button.disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}
.emui-button.round .mask {
  border-radius: 20px;
}
.emui-button.circle .mask {
  border-radius: 50%;
}
.emui-button.disabled {
  opacity: 0.5;
  cursor: no-drop;
}
</style>
