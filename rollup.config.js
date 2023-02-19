import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import sass from 'node-sass'
import url from 'rollup-plugin-url'

import copy from 'rollup-plugin-copy'
export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib'
    },
    {
      file: './dist/my-lib-es.js',
      format: 'es'
    },
    {
      file: './dist/my-lib-cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[
    babel({
        exclude: 'node_modules/**',
        runtimeHelpers:true
    }),
    vue({
      style: {
        postcssPlugins: [
          autoprefixer()
        ]
      }
    }),
    commonjs(),
    resolve(),
    postcss({
        extract: true,
        extensions: ['.css', '.scss'], // 识别css和scss文件
        // 在打包过程中需要配合 node-sass 使用
        process: function(context, payload) { 
          return new Promise((resolve, reject) => {
            sass.render({
              file: context
            }, function(err, result) {
              if (!err) {
                resolve(result)
              } else {
                reject(err)
              }
            })
          })
        },
        extract: 'css/index.css'  
      }), 
      url({
        include: ['**/*.woff', '**/*.ttf'], // 打包字体为base64
        limit: Infinity
      }),
      copy({
        targets: [
           {
             src: './src/assets/font/江西拙楷.ttf',
             dest: 'dist/assets/font'
           },
           {
            src:['./src/assets/iconfont/iconfont.ttf','./src/assets/iconfont/iconfont.woff','./src/assets/iconfont/iconfont.woff2'],
            dest:'dist/css'
           },
           {
            src:'./src/assets/icon/',
            dest:'dist/assets/'
           }
         ]
      }),
    terser(),
    serve({
        contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
        port: 8020   //端口号，默认10001
      }),    
      livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
  ],
  external:[  //外部库， 使用'umd'文件时需要先引入这个外部库
    'vue'
  ],
}
