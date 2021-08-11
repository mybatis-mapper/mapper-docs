module.exports = {
    lang: 'zh-CN',
    title: 'MyBatis Mapper',
    description: '通用 Mapper',
    head: [['link', {rel: 'icon', href: '/favicon.png'}]],
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: 'logo.png',
        repo: 'mybatis-mapper/mapper',
        repoLabel: '查看源码',
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
                text: 'GitHub',
                link: 'https://github.com/mybatis-mapper/mapper'
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/mybatis-mapper/mapper'
            },
            {
                text: 'mybatis-provider',
                items: [
                    {text: 'GitHub', link: 'https://github.com/mybatis-mapper/provider'},
                    {text: 'Gitee', link: 'https://gitee.com/mybatis-mapper/provider'}
                ]
            }
        ],
        sidebar: [
            {
                title: '使用指南',
                sidebarDepth: 2,
                children: [
                    '/docs/1.getting-started.md',
                    '/docs/2.mybatis-mapper.md',
                    '/docs/3.entity.md',
                    '/docs/4.common.md',
                    '/docs/5.service.md',
                    '/docs/6.activerecord.md',
                    '/docs/7.generator.md',
                    '/docs/8.jpa.md'
                ]
            }
        ]
    },
}