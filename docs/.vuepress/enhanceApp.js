
import "ema-ui/dist/css/index.css"
export default ({
    Vue,
    options,
    router
  }) => {
    Vue.mixin({
      mounted() {
        import ('ema-ui').then(function(emui) {
          Vue.use(emui.default)
        })
      },
    })
  }