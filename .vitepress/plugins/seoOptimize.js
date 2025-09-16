// SEO 优化插件
export function seoOptimizePlugin() {
  return {
    name: 'seo-optimize',
    transformIndexHtml(html) {
      // 添加结构化数据
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MarkFlow Lite",
        "description": "一个纯前端在线 Markdown 编辑器",
        "url": "https://editor.currso.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://editor.currso.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "首页",
            "item": "https://editor.currso.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "指南",
            "item": "https://editor.currso.com/guide"
          }
        ]
      }

      const jsonLdScript = `
        <script type="application/ld+json">
          ${JSON.stringify(structuredData)}
        <\/script>
        <script type="application/ld+json">
          ${JSON.stringify(breadcrumbData)}
        <\/script>
      `

      return html.replace('</head>', `${jsonLdScript}</head>`)
    }
  }
}

// 图片优化插件
export function imageOptimizePlugin() {
  return {
    name: 'image-optimize',
    transform(code, id) {
      if (id.includes('.md')) {
        // 添加图片懒加载和响应式
        const enhancedCode = code.replace(
          /!\[([^\]]*)\]\(([^)]+)\)/g,
          (match, alt, src) => {
            const isExternal = src.startsWith('http')
            const loadingAttr = isExternal ? 'loading="lazy"' : ''
            const srcset = isExternal ? `srcset="${src} 1x, ${src.replace(/\.(\w+)$/, '@2x.$1')} 2x"` : ''
            
            return `
              <figure class="image-container">
                <img 
                  src="${src}" 
                  alt="${alt}" 
                  ${loadingAttr}
                  ${srcset}
                  class="optimized-image"
                  decoding="async"
                />
                ${alt ? `<figcaption>${alt}</figcaption>` : ''}
              </figure>
            `
          }
        )
        return enhancedCode
      }
      return code
    }
  }
}

// 链接优化插件
export function linkOptimizePlugin() {
  return {
    name: 'link-optimize',
    transform(code, id) {
      if (id.includes('.md')) {
        // 为外部链接添加安全属性
        const enhancedCode = code.replace(
          /\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g,
          (match, text, url) => {
            return `[${text}](${url}){target="_blank" rel="noopener noreferrer nofollow"}`
          }
        )
        return enhancedCode
      }
      return code
    }
  }
}

// 性能监控插件
export function performancePlugin() {
  return {
    name: 'performance-monitor',
    transformIndexHtml(html) {
      const performanceScript = `
        <script>
          // 性能监控
          if ('performance' in window) {
            window.addEventListener('load', function() {
              setTimeout(function() {
                const perfData = window.performance.timing
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
                const connectTime = perfData.responseEnd - perfData.requestStart
                const renderTime = perfData.domComplete - perfData.domLoading
                
                console.log('页面加载时间:', pageLoadTime + 'ms')
                console.log('网络连接时间:', connectTime + 'ms')
                console.log('页面渲染时间:', renderTime + 'ms')
                
                // 可以发送到分析服务
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'page_performance', {
                    page_load_time: pageLoadTime,
                    connect_time: connectTime,
                    render_time: renderTime
                  })
                }
              }, 0)
            })
          }
          
          // 错误监控
          window.addEventListener('error', function(e) {
            console.error('页面错误:', e.message, e.filename, e.lineno, e.colno)
            if (typeof gtag !== 'undefined') {
              gtag('event', 'exception', {
                description: e.message,
                fatal: false
              })
            }
          })
        <\/script>
      `
      
      return html.replace('</head>', `${performanceScript}</head>`)
    }
  }
}

// 页面加载优化插件
export function loadingOptimizePlugin() {
  return {
    name: 'loading-optimize',
    transformIndexHtml(html) {
      const loadingScript = `
        <script>
          // 预加载关键资源
          function preloadCriticalResources() {
            const criticalResources = [
              '/assets/style.css',
              '/assets/app.js',
              '/assets/framework.js'
            ]
            
            criticalResources.forEach(resource => {
              const link = document.createElement('link')
              link.rel = 'preload'
              link.href = resource
              if (resource.endsWith('.css')) {
                link.as = 'style'
              } else if (resource.endsWith('.js')) {
                link.as = 'script'
              }
              document.head.appendChild(link)
            })
          }
          
          // 图片懒加载
          function lazyLoadImages() {
            const images = document.querySelectorAll('img[loading="lazy"]')
            const imageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const img = entry.target
                  img.src = img.dataset.src || img.src
                  img.classList.remove('lazy')
                  observer.unobserve(img)
                }
              })
            })
            
            images.forEach(img => imageObserver.observe(img))
          }
          
          // 资源提示
          function addResourceHints() {
            const dnsPrefetch = [
              'https://fonts.googleapis.com',
              'https://fonts.gstatic.com'
            ]
            
            dnsPrefetch.forEach(domain => {
              const link = document.createElement('link')
              link.rel = 'dns-prefetch'
              link.href = domain
              document.head.appendChild(link)
            })
          }
          
          document.addEventListener('DOMContentLoaded', function() {
            preloadCriticalResources()
            lazyLoadImages()
            addResourceHints()
          })
        <\/script>
      `
      
      return html.replace('</head>', `${loadingScript}</head>`)
    }
  }
}

// 缓存策略插件
export function cacheStrategyPlugin() {
  return {
    name: 'cache-strategy',
    transformIndexHtml(html) {
      const cacheScript = `
        <script>
          // Service Worker 缓存策略
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('ServiceWorker registration successful')
                })
                .catch(function(error) {
                  console.log('ServiceWorker registration failed')
                })
            })
          }
          
          // 浏览器缓存策略
          function setCacheHeaders() {
            const meta = document.createElement('meta')
            meta.httpEquiv = 'Cache-Control'
            meta.content = 'public, max-age=31536000'
            document.head.appendChild(meta)
            
            const meta2 = document.createElement('meta')
            meta2.httpEquiv = 'Expires'
            meta2.content = new Date(Date.now() + 31536000000).toUTCString()
            document.head.appendChild(meta2)
          }
          
          setCacheHeaders()
        <\/script>
      `
      
      return html.replace('</head>', `${cacheScript}</head>`)
    }
  }
}

// 无障碍访问插件
export function accessibilityPlugin() {
  return {
    name: 'accessibility',
    transformIndexHtml(html) {
      const accessibilityScript = `
        <script>
          // 无障碍访问增强
          document.addEventListener('DOMContentLoaded', function() {
            // 添加跳转到主内容的链接
            const skipLink = document.createElement('a')
            skipLink.href = '#main-content'
            skipLink.textContent = '跳转到主内容'
            skipLink.className = 'skip-link'
            skipLink.style.cssText = '
              position: absolute;
              top: -40px;
              left: 6px;
              background: #000;
              color: #fff;
              padding: 8px;
              text-decoration: none;
              border-radius: 4px;
              z-index: 1000;
              transition: top 0.3s;
            '
            
            skipLink.addEventListener('focus', function() {
              this.style.top = '6px'
            })
            
            skipLink.addEventListener('blur', function() {
              this.style.top = '-40px'
            })
            
            document.body.insertBefore(skipLink, document.body.firstChild)
            
            // 为所有图片添加 alt 属性
            const images = document.querySelectorAll('img:not([alt])')
            images.forEach(img => {
              img.alt = '图片'
            })
            
            // 为所有视频添加字幕
            const videos = document.querySelectorAll('video:not([track])')
            videos.forEach(video => {
              const track = document.createElement('track')
              track.kind = 'captions'
              track.label = '中文字幕'
              track.srclang = 'zh'
              video.appendChild(track)
            })
          })
        <\/script>
        
        <style>
          .skip-link:focus {
            top: 6px !important;
          }
          
          /* 高对比度模式支持 */
          @media (prefers-contrast: high) {
            :root {
              --vp-c-brand: #0066cc;
              --vp-c-text-1: #000000;
              --vp-c-bg: #ffffff;
            }
          }
          
          /* 减少动画支持 */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        </style>
      `
      
      return html.replace('</head>', `${accessibilityScript}</head>`)
    }
  }
}

// 导出所有插件
export default {
  seoOptimizePlugin,
  imageOptimizePlugin,
  linkOptimizePlugin,
  performancePlugin,
  loadingOptimizePlugin,
  cacheStrategyPlugin,
  accessibilityPlugin
}

// 默认导出所有插件的组合
export function createOptimizePlugins() {
  return [
    seoOptimizePlugin(),
    imageOptimizePlugin(),
    linkOptimizePlugin(),
    performancePlugin(),
    loadingOptimizePlugin(),
    cacheStrategyPlugin(),
    accessibilityPlugin()
  ]
}