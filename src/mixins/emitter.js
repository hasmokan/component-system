//封装一个父子间通信的方法
export default {
    methods: {
      dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) name = parent.$options.name;
        }
        if (parent) parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }