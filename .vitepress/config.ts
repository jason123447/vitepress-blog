import { defineConfig } from 'vitepress'
import themeConfig from './theme/config'
import mdFootnote from 'markdown-it-footnote'

const root = themeConfig.base ? themeConfig.base.slice(0, -1) : ''

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { server: { port: 3000 } },
  head: [
    ['link', { rel: 'icon', href: root + themeConfig.favicon }],
    ['link', { rel: 'app-touch-icon', href: root + "/app-touch-icon.png" }],
    ['link', { rel: 'icon', size: "32x32", href: root + "/favicon-32x32.png" }],
    ['link', { rel: 'icon', size: "16x16", href: root + "/favicon-16x16.png" }],
    ['link', { rel: 'manifest', href: root + "/site.webmanifest" }],
  ],
  base: themeConfig.base,
  lang: themeConfig.lang,
  title: themeConfig.title,
  description: themeConfig.description,
  lastUpdated: themeConfig.lastUpdated,
  cacheDir: themeConfig.cacheDir,
  appearance: themeConfig.appearance,
  cleanUrls: themeConfig.cleanUrls,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: themeConfig.nav,
    sidebar: themeConfig.sidebar,
    logo: themeConfig.logo,
    socialLinks: themeConfig.socialLinks,
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        _render: (src, env, md) => {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          return env.frontmatter?.title ? md.render('# ' + env.frontmatter?.title) + html : html
        },
      },
    },
    footer: themeConfig.footer
  },
  srcExclude: ['README.md'],
  //https://vitepress.dev/guide/markdown#advanced-configuration
  markdown: {
    math: themeConfig.mdMath,
    lineNumbers: themeConfig.mdLineNums,
    config: (md) => {
      md.use(mdFootnote)
    },
  },
  sitemap: {
    hostname: themeConfig.hostname
  }
})
