module.exports = {
    theme: '',
    title: 'Emui',
    description: 'VuePress搭建组件库文档教程示例代码',
    base: '/',
    port: '8080',
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    plugins: [
        'demo-container'
    ],
    themeConfig: {
        sidebarDepth: 1,
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text:'指南',
                link:'/guide/introduction'
            },
            {
                text: '组件',
                link: '/comps/form'
            }
        ],
        sidebar: {
            '/comps/': [
                {
                    title:'Basic基础组件',
                    collapsable:false,
                    children:[
                        'tag'
                    ]
                },
                {
                    title: 'Form表单',
                    collapsable: false,
                    children: [
                        'form',
                        'input',
                        'radio',
                        'checkbox',
                        'select',
                        'tag'
                    ]
                },
                {
                    title:'Table表格',
                    collapsable:false,
                    children:['table']
                }
            ],
            '/guide/':[
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        'introduction',
                        'guide',
                    ]
                },
            ]
        }
    },
    head: [],
}