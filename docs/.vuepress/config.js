module.exports = {
    theme: '',
    title: 'Emui',
    description: 'VuePress搭建组件库文档教程示例代码',
    base: '/',
    port: '8080',
    chainWebpack: config => {
    	config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/comps/'
            }
        ],
        sidebar: {
            '/comps/': [
                {
                    title:'基础组件',
                    collapsable: false,
                    children:[
                        'basic/button',
                        'basic/input'
                    ]
                }
            ]
        }
    },
    head: [],
    plugins: ['demo-container'],
    markdown: {}
}