import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI 领导力 | 老刘模型",
  description: "智午研究院 Z5Research - AI 时代领导力思想文库",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: 'AI 领导力，数字员工，老刘模型，智午研究院，Z5Research' }],
  ],

  markdown: {
    lineNumbers: false,
  },

  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 32, height: 32 },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Thinker 专区', link: '/thinker/' },
      { text: 'Builder 专区', link: '/builder/' },
      { text: 'Speaker 专区', link: '/speaker/' },
      { text: '资源中心', link: '/resources/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: {
      '/thinker/': [
        {
          text: 'Thinker 专区',
          items: [
            { text: '概述', link: '/thinker/' },
            { text: '老刘模型详解', link: '/thinker/model' },
            { text: '数字员工五层模型', link: '/thinker/five-layer-model' },
            { text: 'AI 领导力框架', link: '/thinker/leadership-framework' },
          ],
        },
      ],
      '/builder/': [
        {
          text: 'Builder 专区',
          items: [
            { text: '产品全景图', link: '/builder/' },
            { text: '产品进度总览', link: '/builder/progress' },
            { text: '产品案例', link: '/builder/cases' },
          ],
        },
      ],
      '/speaker/': [
        {
          text: 'Speaker 专区',
          items: [
            { text: '演讲主题', link: '/speaker/' },
            { text: '演讲预约', link: '/speaker/booking' },
            { text: '往期演讲', link: '/speaker/archive' },
          ],
        },
      ],
      '/resources/': [
        {
          text: '资源中心',
          items: [
            { text: '资源总览', link: '/resources/' },
            { text: '文章库', link: '/resources/articles' },
            { text: '研究报告', link: '/resources/research' },
            { text: '工具模板', link: '/resources/templates' },
          ],
        },
        {
          text: '🧠 AI 领导力研究专区',
          items: [
            { text: '专区首页', link: '/resources/ai-leadership/' },
            { text: '01 - 认知杠杆理论（中）', link: '/resources/ai-leadership/zh/01-cognitive-leverage' },
            { text: '02 - 从情境领导力到认知管理（中）', link: '/resources/ai-leadership/zh/02-dual-track-leadership' },
            { text: '03 - AI时代的管理变迁（中）', link: '/resources/ai-leadership/zh/03-cognitive-ecology' },
            { text: '04 - 管理模式变迁与三种新模式（中）', link: '/resources/ai-leadership/zh/04-mode-research' },
            { text: '05 - 管理方法论的变迁（中）', link: '/resources/ai-leadership/zh/05-methodology-evolution' },
            { text: '06 - 管理体系的变迁（中）', link: '/resources/ai-leadership/zh/06-system-evolution' },
            { text: '07 - AI领导力新哲学（中）', link: '/resources/ai-leadership/zh/07-leadership-philosophy' },
            { text: '01 - Cognitive Leverage Theory (EN)', link: '/resources/ai-leadership/en/01-cognitive-leverage' },
            { text: '02 - Situational Leadership to Cognitive Management (EN)', link: '/resources/ai-leadership/en/02-dual-track-leadership' },
            { text: '03 - Management Evolution in AI Era (EN)', link: '/resources/ai-leadership/en/03-cognitive-ecology' },
            { text: '04 - Three New Management Models (EN)', link: '/resources/ai-leadership/en/04-mode-research' },
            { text: '05 - Evolution of Management Methodology (EN)', link: '/resources/ai-leadership/en/05-methodology-evolution' },
            { text: '06 - System Evolution (EN)', link: '/resources/ai-leadership/en/06-system-evolution' },
            { text: '07 - New Philosophy of AI Leadership (EN)', link: '/resources/ai-leadership/en/07-leadership-philosophy' },
          ],
        },
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于我们', link: '/about/' },
            { text: '联系我们', link: '/about/contact' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Z5Research' },
      { icon: 'email', link: 'mailto:info@aileadership.cn' },
    ],

    footer: {
      message: 'Released under CC BY-NC-SA 4.0 License.',
      copyright: 'Copyright © 2026 智午研究院 Z5Research',
    },

    editLink: {
      pattern: 'https://github.com/Z5Research/ai-leadership-papers/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
  },
})
