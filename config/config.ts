export default {
    configVersion: 1,

    // 网站基础信息
    site: {
        name: '云萧的咕咕客栈',
        subtitle: 'Kotsuki Crrashh',
        suffix: ' / under building...',
        description: '以万象之不息，致不息之万象。',
        seoDescription: '基于Astro构建的咕咕的个人主页！云萧的咕咕客栈 / Creating makes miracles. / 以万象之不息，致不息之万象。'
    },

    // 顶栏导航
    nav: [{
        name: '博客',
        url: 'https://blog.crrashh.com'
    },
    {
        name: '关于',
        url: 'https://blog.crrashh.com/archives/5'
    }],

    // 横幅内的下侧社交媒体栏
    social: [{
        icon: 'blog',
        url: 'https://blog.crrashh.com'
    },
    {
        icon: 'github',
        url: 'https://github.com/crrashh1542'
    },
    {
        icon: 'bilibili',
        url: 'https://space.bilibili.com/40683339'
    },
    {
        icon: 'email',
        url: 'mailto:kotsuki@crrashh.com'
    },
    {
        icon: 'coolapk',
        url: 'https://www.coolapk.com/u/21347742'
    },
    {
        icon: 'qq',
        url: 'https://wpa.qq.com/msgrd?uin=3247380086&site=qq&menu=yes'
    }],

    // 横幅下方网站链接
    links: [{
        title: '云萧的咕咕屋',
        description: '云萧的个人博客，<s>都是有空随便写写的啊喂！</s>',
        to: 'https://blog.crrashh.com'
    },
    {
        title: 'Windows Up-to-Date',
        description: '一个反映 Windows 实时更新状态的站点',
        to: 'https://wutd.crrashh.com'
    },
    {
        title: '云萧的咕咕盘',
        description: '基于 Alist 的公开网盘服务',
        to: 'https://disk.crrashh.com'
    },
    {
        title: '咕咕的开放文档',
        description: '大家都可以用的 API 和 CDN',
        to: 'https://docs.crrashh.com'
    }],

    // 页脚
    footer: {
        'copyright': '© Copyright 2022-2024 Kotsuki Crrashh. All Rights Reserved.',
        'beian': `<a href="https://beian.miit.gov.cn" target="_blank">
                     <img src="/miit.png" />&nbsp;&nbsp;蜀ICP备2022029657号-2</a>&nbsp;&nbsp;|&nbsp;
                  <a href="https://icp.gov.moe/?keyword=20220551" target="_blank">
                     <img src="/moeicp.png" />&nbsp;&nbsp;萌ICP备20220551号</a>`
    }
}