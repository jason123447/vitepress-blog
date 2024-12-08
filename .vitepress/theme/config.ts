// vitepress/types/default-theme.d.ts
type Appearance = boolean | 'dark' | undefined
type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }

interface SocialLink {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}

const themeConfig = {
  // https://vitepress.dev/reference/site-config
  base: '/vitepress-blog/',
  lang: 'zh-TW',
  logo: '/avatar.png',
  favicon: '/favicon-32x32.png',
  title: 'My Personal Site',
  description: 'Welcome to my personal site',
  hostname: 'https://jason123447.github.io/vitepress-blog/',
  lastUpdated: true,
  cacheDir: './node_modules/vitepress_cache',
  appearance: <Appearance>'dark',
  cleanUrls: true,
  mdMath: true,  // math equations
  mdLineNums: true,  // line numbers for code block
  // https://vitepress.dev/reference/default-theme-config
  nav: [
    { text: '🏠 Home', link: '/' },
    { text: '📚 Archives', link: '/archives' },
    { text: '📁 Category', link: '/category' },
    { text: `🔖 Tags`, link: '/tags' },
    { text: '🙆 About', link: '/about' }
  ],
  sidebar: [],
  aside: false,
  socialLinks: <SocialLink[]>[
    { icon: 'github', link: 'https://github.com/jason123447' },
  ],
  footer: {
    message: `Powered by <a target='_blank' href='https://vitepress.dev'>VitePress</a>`,
    // copyright: `Copyright | <a target='_blank' href='https://github.com/jason123447'>©Lenny ${new Date().getFullYear()}
    //   </a> `
  },
  // custom theme config
  postsPerPage: 5,
  utterances: {
    repo: 'jason123447/go-demo-cart',
    issueTerm: 'title',
    light: 'github-light',
    dark: 'gruvbox-dark'
  }
}

export default themeConfig