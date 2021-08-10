module.exports = {
    lang: 'zh-CN',
    title: 'MyBatis Mapper',
    description: '通用 Mapper',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        logo: 'logo.png',
        navbar: [
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
                link: 'https://github.com/mybatis-mapper/provider'
            }
        ],
        sidebar: [
            {
                text: '使用指南',
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