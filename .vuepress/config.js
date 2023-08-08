module.exports = {
    lang: 'zh-CN',
    title: 'MyBatis Mapper',
    description: '通用 Mapper',
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?a05b63ee263e1ad37bf6c8966bfe92fa";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `],
        ['script', {
            crossorigin: "anonymous",
            async: true,
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1797264872895352"
        }]
    ],
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: '/logo.png',
        docsRepo: 'mybatis-mapper/mapper-docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '最后编辑时间',
        smoothScroll: true,
        nav: [
            {
                text: '快速上手',
                link: '/docs/1.getting-started.html'
            },
            {
                text: '深度指南',
                link: '/docs/extend/1.extend-guide.html'
            },
            {
                text: '发布版本',
                items: [
                    {text: '1.0.0', link: '/releases/1.0.0.html'},
                    {text: '1.0.1', link: '/releases/1.0.1.html'},
                    {text: '1.0.3', link: '/releases/1.0.3.html'},
                    {text: '1.0.4', link: '/releases/1.0.4.html'},
                    {text: '1.1.0', link: '/releases/1.1.0.html'},
                    {text: '1.2.0', link: '/releases/1.2.0.html'},
                    {text: '1.2.x', link: '/releases/1.2.x.html'},
                    {text: '2.0.0', link: '/releases/2.0.0.html'},
                    {text: '2.1.0', link: '/releases/2.1.0.html'},
                    {text: '2.1.1', link: '/releases/2.1.1.html'},
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/mybatis-mapper/mapper'
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/mybatis-mapper/mapper'
            },
            {
                text: 'Provider',
                items: [
                    {text: 'GitHub', link: 'https://github.com/mybatis-mapper/provider'},
                    {text: 'Gitee', link: 'https://gitee.com/mybatis-mapper/provider'}
                ]
            },
            {
                text: '作者博客',
                link: 'https://liuzh.blog.csdn.net/'
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: '使用指南',
                    sidebarDepth: 2,
                    children: [
                        '1.getting-started.md',
                        '2.mybatis-mapper.md',
                        '3.entity.md',
                        '4.common.md',
                        '5.service.md',
                        '6.activerecord.md',
                        '7.generator.md',
                        '8.jpa.md'
                    ]
                }, {
                    title: '示例',
                    sidebarDepth: 2,
                    children: [
                        'examples/1.spring-boot.md',
                    ]
                }, {
                    title: '深度指南',
                    sidebarDepth: 2,
                    children: [
                        'extend/1.extend-guide.md',
                        'extend/2.common-field-setter.md',
                        'extend/3.master-enum-typehandler.md',
                    ]
                }
            ],
            '/releases/': [
                '1.0.0.md',
                '1.0.1.md',
                '1.0.3.md',
                '1.0.4.md',
                '1.1.0.md',
                '1.2.0.md',
                '1.2.x.md',
                '2.0.0.md',
                '2.1.0.md',
                '2.1.1.md',
            ]
        }
    },
}