// 客户端增强
import { inBrowser } from 'vitepress'

// 代码复制功能
function setupCodeCopy() {
  if (!inBrowser) return
  
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('code-copy-btn')) {
      const codeBlock = e.target.previousElementSibling
      const code = codeBlock.textContent
      
      navigator.clipboard.writeText(code).then(() => {
        const originalText = e.target.innerHTML
        e.target.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          已复制
        `
        e.target.classList.add('copied')
        
        setTimeout(() => {
          e.target.innerHTML = originalText
          e.target.classList.remove('copied')
        }, 2000)
      }).catch(err => {
        console.error('复制失败:', err)
      })
    }
  })
}

// 代码折叠功能
function setupCodeFolding() {
  if (!inBrowser) return
  
  window.toggleCode = function(button) {
    const hiddenCode = button.previousElementSibling
    if (hiddenCode.style.display === 'none') {
      hiddenCode.style.display = 'block'
      button.textContent = '收起代码'
    } else {
      hiddenCode.style.display = 'none'
      button.textContent = '显示更多代码'
    }
  }
}

// 数学公式渲染
function setupMathRendering() {
  if (!inBrowser) return
  
  // 延迟加载 MathJax
  const mathElements = document.querySelectorAll('.math-block, .math-inline')
  if (mathElements.length > 0) {
    const script = document.createElement('script')
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6'
    document.head.appendChild(script)
    
    const mathjaxScript = document.createElement('script')
    mathjaxScript.id = 'MathJax-script'
    mathjaxScript.async = true
    mathjaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    document.head.appendChild(mathjaxScript)
    
    // 渲染数学公式
    mathjaxScript.onload = () => {
      mathElements.forEach(element => {
        const formula = decodeURIComponent(element.dataset.formula)
        element.innerHTML = `$$${formula}$$`
        
        // 移除加载中的样式
        const loading = element.querySelector('.math-loading')
        if (loading) loading.remove()
      })
      
      if (window.MathJax) {
        window.MathJax.typeset()
      }
    }
  }
}

// Mermaid 图表渲染
function setupMermaidRendering() {
  if (!inBrowser) return
  
  const mermaidCharts = document.querySelectorAll('.mermaid-chart')
  if (mermaidCharts.length > 0) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js'
    document.head.appendChild(script)
    
    script.onload = () => {
      window.mermaid.initialize({ 
        startOnLoad: true,
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
      })
      
      mermaidCharts.forEach(chart => {
        const content = decodeURIComponent(chart.dataset.content)
        chart.innerHTML = `<div class="mermaid">${content}</div>
          <div class="mermaid-controls">
            <button onclick="zoomMermaid('${chart.id}')" title="放大">🔍</button>
            <button onclick="downloadMermaid('${chart.id}')" title="下载">💾</button>
          </div>
        `
        
        // 移除加载中的样式
        const loading = chart.querySelector('.mermaid-loading')
        if (loading) loading.remove()
      })
      
      window.mermaid.init()
    }
  }
}

// 图片懒加载
function setupLazyLoading() {
  if (!inBrowser) return
  
  const images = document.querySelectorAll('img[loading="lazy"]')
  if ('IntersectionObserver' in window) {
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
}

// 页面滚动效果
function setupScrollEffects() {
  if (!inBrowser) return
  
  // 平滑滚动到锚点
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(e.target.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })
  
  // 滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)
  
  // 观察所有需要动画的元素
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach(el => observer.observe(el))
}

// 键盘快捷键
function setupKeyboardShortcuts() {
  if (!inBrowser) return
  
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      const searchButton = document.querySelector('.VPNavBarSearchButton')
      if (searchButton) searchButton.click()
    }
    
    // Ctrl/Cmd + / 显示快捷键帮助
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault()
      showShortcutsHelp()
    }
  })
}

// 显示快捷键帮助
function showShortcutsHelp() {
  const helpModal = document.createElement('div')
  helpModal.className = 'shortcuts-help-modal'
  helpModal.innerHTML = `
    <div class="shortcuts-help-content">
      <h3>⌨️ 键盘快捷键</h3>
      <div class="shortcuts-list">
        <div class="shortcut-item">
          <span class="shortcut-key">Ctrl/Cmd + K</span>
          <span class="shortcut-desc">打开搜索</span>
        </div>
        <div class="shortcut-item">
          <span class="shortcut-key">Ctrl/Cmd + /</span>
          <span class="shortcut-desc">显示快捷键帮助</span>
        </div>
      </div>
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">关闭</button>
    </div>
  `
  document.body.appendChild(helpModal)
}

// 错误处理
function setupErrorHandling() {
  if (!inBrowser) return
  
  window.addEventListener('error', (e) => {
    console.error('页面错误:', e.message, e.filename, e.lineno, e.colno)
    
    // 显示友好的错误提示
    const errorToast = document.createElement('div')
    errorToast.className = 'error-toast'
    errorToast.textContent = '页面出现错误，请刷新重试'
    document.body.appendChild(errorToast)
    
    setTimeout(() => {
      errorToast.remove()
    }, 3000)
  })
  
  window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的 Promise 错误:', e.reason)
  })
}

// 性能监控
function setupPerformanceMonitoring() {
  if (!inBrowser || !('performance' in window)) return
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
      
      console.log(`页面加载完成，耗时: ${pageLoadTime}ms`)
      
      // 如果加载时间超过 3 秒，显示优化建议
      if (pageLoadTime > 3000) {
        console.warn('页面加载较慢，建议优化')
      }
    }, 0)
  })
}

// 主题切换增强
function setupThemeToggle() {
  if (!inBrowser) return
  
  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addListener((e) => {
    // 如果用户没有手动设置主题，跟随系统
    if (!localStorage.getItem('vitepress-theme-appearance')) {
      document.documentElement.classList.toggle('dark', e.matches)
    }
  })
}

// 导出初始化函数
export function enhanceApp({ app, router, siteData }) {
  if (!inBrowser) return
  
  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements)
  } else {
    initEnhancements()
  }
  
  function initEnhancements() {
    setupCodeCopy()
    setupCodeFolding()
    setupMathRendering()
    setupMermaidRendering()
    setupLazyLoading()
    setupScrollEffects()
    setupKeyboardShortcuts()
    setupErrorHandling()
    setupPerformanceMonitoring()
    setupThemeToggle()
    
    // 添加全局方法
    window.zoomMermaid = function(chartId) {
      const chart = document.getElementById(chartId)
      if (chart) {
        chart.classList.toggle('zoomed')
      }
    }
    
    window.downloadMermaid = function(chartId) {
      const chart = document.getElementById(chartId)
      if (chart) {
        const svg = chart.querySelector('svg')
        if (svg) {
          const svgData = new XMLSerializer().serializeToString(svg)
          const blob = new Blob([svgData], { type: 'image/svg+xml' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'mermaid-diagram.svg'
          a.click()
          URL.revokeObjectURL(url)
        }
      }
    }
  }
}

// 添加 CSS 样式
const style = document.createElement('style')
style.textContent = `
  .shortcuts-help-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .shortcuts-help-content {
    background: var(--vp-c-bg);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 90%;
  }
  
  .shortcuts-list {
    margin: 1rem 0;
  }
  
  .shortcut-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }
  
  .shortcut-key {
    font-family: monospace;
    background: var(--vp-c-bg-soft);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .close-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: var(--vp-c-brand);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .error-toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4757;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }
  
  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .mermaid-chart {
    position: relative;
    margin: 1rem 0;
  }
  
  .mermaid-controls {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 5px;
  }
  
  .mermaid-controls button {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    padding: 5px 8px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .mermaid-chart.zoomed {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    z-index: 1000;
    background: var(--vp-c-bg);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }
  
  .code-copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .vp-doc div[class*='language-']:hover .code-copy-btn {
    opacity: 1;
  }
  
  .code-copy-btn.copied {
    background: #10b981;
    color: white;
  }
  
  .reading-time-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: var(--vp-c-bg-soft);
    border-radius: 4px;
  }
`
document.head.appendChild(style)

export default enhanceApp

// 添加 CSS 变量支持
document.documentElement.style.setProperty('--vp-font-family-base', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif')
document.documentElement.style.setProperty('--vp-font-family-mono', 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')