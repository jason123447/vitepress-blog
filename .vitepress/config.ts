import { defineConfig } from 'vitepress'
import themeConfig from './theme/config'
import mdFootnote from 'markdown-it-footnote'
import mdDirective from 'markdown-it-directive'
import mdContainer from 'markdown-it-container';


const root = themeConfig.base ? themeConfig.base.slice(0, -1) : ''

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { server: { port: 3000 } },
  head: [
    ['link', { rel: 'icon', href: root + themeConfig.favicon }],
    ['link', { rel: 'app-touch-icon', href: root + "/app-touch-icon.png" }],
    ['link', { rel: 'icon', size: "32x32", href: root + "/favicon-32x32.png" }],
    ['link', { rel: 'icon', size: "16x16", href: root + "/favicon-16x16.png" }]
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

    config: (md) => {
      md.use(mdFootnote)
      // md.use(mdDirective).use((md) => {        
      //   const inlineDirectives = md['inlineDirectives'];
      //   const blockDirectives = md['blockDirectives'];
        
      //   inlineDirectives['lery'] = (state, silent) => {
      //     if (silent) return false;
      //     const match = state.src.match(/<!-- lery:wrap-class=(\S+) -->/);
      //     if (!match) return false;
      //     const token = state.push('lery', 'div', 0);
      //     token.attrSet('class', match[1]);
      //     token.content = state.src.slice(match[0].length).trim();
      //     state.pos += state.src.length;
      //     return true;
      //   };
        
      //   blockDirectives['lery'] = (state, startLine, endLine, silent) => {
      //     if (silent) return false;
      //     const content = state.getLines(startLine, endLine, 0, true);
      //     const match = content.match(/<!-- lery:wrap-class=(\S+) -->/);
      //     if (!match) return false;
      //     const token = state.push('lery', 'div', 0);
      //     token.attrSet('class', match[1]);
      //     token.content = content.slice(match[0].length).trim();
      //     return true;
      //   };
      // });

    /**
     *  :::wrap-class=col-span-2
     *    **这是一个跨两列的内容块**
     *  :::
     * 
     *  sample syntax for wrap-class container
     */
      md.use(mdContainer, 'wrap-class', {
        validate: function(params) {      
          return params.trim().match(/^wrap-class=(.*)$/);
        },
        render: function(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^wrap-class=(.*)$/);
          if(m) {
            console.log('render m', m ,idx, tokens[idx]);          
          }
          if (tokens[idx].nesting === 1) {
            // opening tag
            return `<div class="${md.utils.escapeHtml(m[1])}">\n`;
          } else {
            // closing tag
            return '</div>\n';
          }
        }
      });
      
    },
  },
  sitemap: {
    hostname: themeConfig.hostname
  }
})
