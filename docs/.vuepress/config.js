module.exports = {
    theme: '',
    title: 'Emui',
    description: '中国风ui组件库',
    base: '/',
    port: '8080',
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    markdown: {
        lineNumbers: true
    },
    plugins: {
        'demo-container': {
            locales: [
                {
                    "lang": "zh-CN",
                    "demo-block": {
                        "hide-text": "隐藏代码",
                        "show-text": "显示代码",
                        "copy-text": "复制代码",
                        "copy-success": "复制成功"
                    }
                },
            ]
        }
    },
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
                link: '/comps/basic/button'
            }
        ],
        sidebar: {
            '/comps/': [
                {
                    title: 'Basic基础组件',
                    collapsable: false,
                    children: [
                        'basic/button',
                        'basic/dialog',
                        'basic/switch',
                        'basic/link',
                        'basic/icon',
                        'basic/tag'
                    ]
                },
                {
                    title: 'Navigation导航',
                    collapsable: false,
                    children: [
                        'navigation/nav',
                        'navigation/subnav',
                        'navigation/navItem',
                    ]
                },
                {
                    title: 'Form表单',
                    collapsable: false,
                    children: [
                        'form/form',
                        'form/input',
                        'form/radio',
                        'form/checkbox',
                        'form/select'
                    ]
                },
                {
                    title: 'Table表格',
                    collapsable: false,
                    children: ['table/table']
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