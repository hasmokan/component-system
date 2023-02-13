// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// export default async ({
//     Vue
// }) => {
//     if (typeof process === 'undefined') {
//         Vue.use(ElementUI)
//     }
// }
import emui from "../../src/index.js";
import "../../src/styles/index.scss";

export default ({
    Vue,
    options,
    router
  }) => {
    Vue.use(emui)
  }