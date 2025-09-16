
import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';
import googleAnalyticsPlugin from 'vitepress-plugin-google-analytics';
import { RssPlugin as rssPlugin } from 'vitepress-plugin-rss';
import sitemapPlugin from 'vite-plugin-sitemap';
import { createOptimizePlugins } from './plugins/seoOptimize.js';

import markdownItFootnote from 'markdown-it-footnote';
import markdownItDeflist from 'markdown-it-deflist';
import markdownItAbbr from 'markdown-it-abbr';
import markdownItSub from 'markdown-it-sub';
import markdownItSup from 'markdown-it-sup';
import markdownItMark from 'markdown-it-mark';
import markdownItIns from 'markdown-it-ins';
import markdownItTaskLists from 'markdown-it-task-lists';
import markdownItContainer from 'markdown-it-container';

export default withPwa(defineConfig({
  outline: [2, 4], // 启用右侧目录，显示 h2~h4 标题
  
  // 忽略死链接检查
  ignoreDeadLinks: [
    /^\/.*\.md$/,
    /^\.\/.*\.md$/,
    /^\.\.\/.*\.md$/,
    './basic-usage',
    './cloud-storage',
    './export',
    './url',
    './../api/index',
    './../faq/index',
    './math',
    './themes',
    './shortcuts',
    './flowchart'
  ],
  
  // 站点配置
  title: 'MarkFlow Lite',
  description: '一个纯前端在线 Markdown 编辑器',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'MarkFlow Lite',
      description: '一个纯前端在线 Markdown 编辑器'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'MarkFlow Lite',
      description: 'A pure front-end online Markdown editor'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      title: 'MarkFlow Lite',
      description: 'Un editor de Markdown en línea puramente frontend'
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'MarkFlow Lite',
      description: 'Um editor de Markdown online puramente frontend'
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'MarkFlow Lite',
      description: 'フロントエンドのオンライン Markdown エディター'
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'MarkFlow Lite',
      description: 'Ein reiner Frontend-Online-Markdown-Editor'
    }
  },

  // 头部配置
  head: [
    // Favicon 配置
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/favicon-32x32.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.svg' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#3eaf7c' }],
    
    // Meta 信息
    ['meta', { name: 'keywords', content: 'Markdown, Editor, 在线编辑器, MarkFlow, 文档编辑' }],
    ['meta', { name: 'author', content: 'MarkFlow Team' }],
    ['meta', { property: 'og:title', content: 'MarkFlow Lite - 纯前端在线 Markdown 编辑器' }],
    ['meta', { property: 'og:description', content: '无需服务器，开箱即用，支持实时编辑、双向预览、本地保存和内容分享' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'MarkFlow Lite' }],
    ['meta', { name: 'twitter:description', content: '纯前端在线 Markdown 编辑器' }],
    // 添加 PWA 支持
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // 性能优化相关
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' }]
  ],

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 启用 markdown 增强插件
      md.use(markdownItFootnote)
         .use(markdownItDeflist)
         .use(markdownItAbbr)
         .use(markdownItSub)
         .use(markdownItSup)
         .use(markdownItMark)
         .use(markdownItIns)
         .use(markdownItTaskLists)
         .use(markdownItContainer, 'tip')
         .use(markdownItContainer, 'warning')
         .use(markdownItContainer, 'danger')
         .use(markdownItContainer, 'details')
         .use(markdownItContainer, 'code-group')
         .use(markdownItContainer, 'code-block')
    }
  },

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          }
        },
        // 搜索优化
        miniSearch: {
          searchOptions: {
            boost: {
              title: 4,
              text: 2,
              titles: 1
            },
            fuzzy: 0.2,
            prefix: true
          }
        }
      }
    },
    
    // 多语言主题配置
    locales: {
      root: {
        // 中文配置
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '功能', link: '/features/' },
          { text: '开发日志', link: '/changelog/' },
          { text: 'API', link: '/api/' },
          { text: '反馈', link: '/feedback' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/guide/' },
                { text: '安装', link: '/guide/installation' },
                { text: '基础使用', link: '/guide/basic-usage' },
                { text: '云存储', link: '/guide/cloud-storage' },
                { text: '导出功能', link: '/guide/export' }
              ]
            }
          ],
          '/features/': [
            {
              text: '功能特性',
              items: [
                { text: 'Markdown 支持', link: '/features/markdown' },
                { text: '流程图', link: '/features/flowchart' },
                { text: '数学公式', link: '/features/math' },
                { text: '主题切换', link: '/features/themes' },
                { text: '快捷键', link: '/features/shortcuts' }
              ]
            }
          ],
          '/changelog/': [
            {
              text: '开发日志',
              items: [
                { text: '版本历史', link: '/changelog/' },
                { text: 'v1.3.0 发布', link: '/changelog/v1.3.0' },
                { text: '贡献指南', link: '/changelog/contributing' }
              ]
            }
          ]
        }
      },
      en: {
        // 英文配置
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Features', link: '/en/features/' },
          { text: 'Changelog', link: '/en/changelog/' },
          { text: 'API', link: '/en/api/' },
          { text: 'Feedback', link: '/feedback' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Quick Start', link: '/en/guide/' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Basic Usage', link: '/en/guide/basic-usage' },
                { text: 'Cloud Storage', link: '/en/guide/cloud-storage' },
                { text: 'Export', link: '/en/guide/export' }
              ]
            }
          ],
          '/en/features/': [
            {
              text: 'Features',
              items: [
                { text: 'Markdown Support', link: '/en/features/markdown' },
                { text: 'Flowchart', link: '/en/features/flowchart' },
                { text: 'Math Formulas', link: '/en/features/math' },
                { text: 'Theme Switching', link: '/en/features/themes' },
                { text: 'Shortcuts', link: '/en/features/shortcuts' }
              ]
            }
          ]
        }
      },
      es: {
        // 西班牙语配置
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Características', link: '/es/features/' },
          { text: 'API', link: '/es/api/' },
          { text: 'Comentarios', link: '/feedback' }
        ],
        sidebar: {
          '/es/guide/': [
            {
              text: 'Guía',
              items: [
                { text: 'Inicio Rápido', link: '/es/guide/' },
                { text: 'Instalación', link: '/es/guide/installation' },
                { text: 'Uso Básico', link: '/es/guide/basic-usage' },
                { text: 'Almacenamiento en la Nube', link: '/es/guide/cloud-storage' },
                { text: 'Exportar', link: '/es/guide/export' }
              ]
            }
          ],
          '/es/features/': [
            {
              text: 'Características',
              items: [
                { text: 'Soporte de Markdown', link: '/es/features/markdown' },
                { text: 'Diagramas de Flujo', link: '/es/features/flowchart' },
                { text: 'Fórmulas Matemáticas', link: '/es/features/math' },
                { text: 'Cambio de Tema', link: '/es/features/themes' },
                { text: 'Atajos', link: '/es/features/shortcuts' }
              ]
            }
          ]
        }
      },
      pt: {
        // 葡萄牙语配置
        nav: [
          { text: 'Início', link: '/pt/' },
          { text: 'Guia', link: '/pt/guide/' },
          { text: 'Recursos', link: '/pt/features/' },
          { text: 'API', link: '/pt/api/' },
          { text: 'Feedback', link: '/feedback' }
        ],
        sidebar: {
          '/pt/guide/': [
            {
              text: 'Guia',
              items: [
                { text: 'Início Rápido', link: '/pt/guide/' },
                { text: 'Instalação', link: '/pt/guide/installation' },
                { text: 'Uso Básico', link: '/pt/guide/basic-usage' },
                { text: 'Armazenamento na Nuvem', link: '/pt/guide/cloud-storage' },
                { text: 'Exportar', link: '/pt/guide/export' }
              ]
            }
          ],
          '/pt/features/': [
            {
              text: 'Recursos',
              items: [
                { text: 'Suporte ao Markdown', link: '/pt/features/markdown' },
                { text: 'Fluxogramas', link: '/pt/features/flowchart' },
                { text: 'Fórmulas Matemáticas', link: '/pt/features/math' },
                { text: 'Mudança de Tema', link: '/pt/features/themes' },
                { text: 'Atalhos', link: '/pt/features/shortcuts' }
              ]
            }
          ]
        }
      },
      ja: {
        // 日语配置
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/guide/' },
          { text: '機能', link: '/ja/features/' },
          { text: 'API', link: '/ja/api/' },
          { text: 'フィードバック', link: '/feedback' }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'ガイド',
              items: [
                { text: 'クイックスタート', link: '/ja/guide/' },
                { text: 'インストール', link: '/ja/guide/installation' },
                { text: '基本的な使用法', link: '/ja/guide/basic-usage' },
                { text: 'クラウドストレージ', link: '/ja/guide/cloud-storage' },
                { text: 'エクスポート', link: '/ja/guide/export' }
              ]
            }
          ],
          '/ja/features/': [
            {
              text: '機能',
              items: [
                { text: 'Markdown サポート', link: '/ja/features/markdown' },
                { text: 'フローチャート', link: '/ja/features/flowchart' },
                { text: '数式', link: '/ja/features/math' },
                { text: 'テーマ切り替え', link: '/ja/features/themes' },
                { text: 'ショートカット', link: '/ja/features/shortcuts' }
              ]
            }
          ]
        }
      },
      de: {
        // 德语配置
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Anleitung', link: '/de/guide/' },
          { text: 'Funktionen', link: '/de/features/' },
          { text: 'API', link: '/de/api/' },
          { text: 'Feedback', link: '/feedback' }
        ],
        sidebar: {
          '/de/guide/': [
            {
              text: 'Anleitung',
              items: [
                { text: 'Schnellstart', link: '/de/guide/' },
                { text: 'Installation', link: '/de/guide/installation' },
                { text: 'Grundlegende Nutzung', link: '/de/guide/basic-usage' },
                { text: 'Cloud-Speicher', link: '/de/guide/cloud-storage' },
                { text: 'Exportieren', link: '/de/guide/export' }
              ]
            }
          ],
          '/de/features/': [
            {
              text: 'Funktionen',
              items: [
                { text: 'Markdown-Unterstützung', link: '/de/features/markdown' },
                { text: 'Flussdiagramme', link: '/de/features/flowchart' },
                { text: 'Mathematische Formeln', link: '/de/features/math' },
                { text: 'Theme-Wechsel', link: '/de/features/themes' },
                { text: 'Tastenkürzel', link: '/de/features/shortcuts' }
              ]
            }
          ]
        }
      }
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/blankzsh/markflow-lite' }
    ],
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/blankzsh/docs-markflow-lite/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 MarkFlow Lite Contributors'
    },

    // 外部链接图标
    externalLinkIcon: true,
    
    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },

  // PWA 配置
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'favicon.svg', 'favicon-32x32.svg', 'apple-touch-icon.svg', 'icon-*.svg'],
    manifest: {
      name: 'MarkFlow Lite',
      short_name: 'MarkFlow',
      description: 'A pure front-end online Markdown editor',
      theme_color: '#3eaf7c',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/icon-72x72.svg',
          sizes: '72x72',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icon-96x96.svg',
          sizes: '96x96',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icon-144x144.svg',
          sizes: '144x144',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icon-192x192.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        },
        {
          src: '/icon-512x512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2,woff,ttf,eot}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },

  // Vite 配置
  vite: {
    plugins: [
      // 站点地图插件 - 暂时禁用直到修复 robots.txt 问题
      // sitemapPlugin({
      //   hostname: 'https://editor.currso.com',
      //   dynamicRoutes: [
      //     '/',
      //     '/guide/',
      //     '/guide/installation',
      //     '/guide/basic-usage',
      //     '/guide/cloud-storage',
      //     '/guide/export',
      //     '/features/',
      //     '/features/markdown'
      //   ]
      // }),
      // SEO 优化插件 - 暂时注释掉可能有问题的插件
      // ...createOptimizePlugins()
    ],
    server: {
      host: '0.0.0.0'
    },
    // 优化配置
    optimizeDeps: {
      include: [
        '@vueuse/core',
        'markdown-it-footnote',
        'markdown-it-deflist',
        'markdown-it-abbr',
        'markdown-it-sub',
        'markdown-it-sup',
        'markdown-it-mark',
        'markdown-it-ins',
        'markdown-it-task-lists',
        'markdown-it-container',
        'vue',
        '@vue/shared',
        '@vue/reactivity'
      ]
    },
    // 构建优化
    build: {
      chunkSizeWarningLimit: 1000
    }
  },

  // 插件配置
  plugins: [
    // 注释掉可能有问题的插件
    // Google Analytics 插件
    // googleAnalyticsPlugin({
    //   id: 'G-XXXXXXXXXX' // 替换为你的 Google Analytics ID
    // }),
    
    // RSS 插件  
    // rssPlugin({
    //   title: 'MarkFlow Lite Blog',
    //   description: 'Latest updates and news about MarkFlow Lite',
    //   id: 'https://editor.currso.com',
    //   link: 'https://editor.currso.com',
    //   language: 'zh-CN',
    //   image: 'https://editor.currso.com/logo.png',
    //   favicon: 'https://editor.currso.com/favicon.ico',
    //   copyright: 'Copyright © 2024 MarkFlow Lite Contributors',
    //   updated: Date.now(),
    //   generator: 'MarkFlow Lite',
    //   feedLinks: {
    //     json: 'https://editor.currso.com/feed.json',
    //     atom: 'https://editor.currso.com/atom.xml'
    //   },
    //   author: {
    //     name: 'MarkFlow Team',
    //     email: 'shell7@petalmail.com',
    //     link: 'https://editor.currso.com'
    //   }
    // })
  ],

  // 最后更新时间
  lastUpdated: {
    text: {
      zh: '最后更新于',
      en: 'Last updated'
    },
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  }
}))