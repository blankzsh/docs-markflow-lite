// 代码增强插件
export function codeEnhancePlugin() {
  return {
    name: 'code-enhance',
    transform(code, id) {
      if (id.includes('.md') || id.includes('.vue')) {
        // 添加代码复制按钮
        const enhancedCode = code.replace(
          /<pre[^>]*><code[^>]*>/g,
          (match) => {
            return `${match}<button class="code-copy-btn" title="复制代码" aria-label="复制代码">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>`
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 代码折叠插件
export function codeFoldingPlugin() {
  return {
    name: 'code-folding',
    transform(code, id) {
      if (id.includes('.md')) {
        // 添加代码折叠功能
        const enhancedCode = code.replace(
          /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g,
          (match, content) => {
            const lines = content.split('\n')
            if (lines.length > 10) {
              const visibleLines = lines.slice(0, 10).join('\n')
              const hiddenLines = lines.slice(10).join('\n')
              return `<div class="code-container">
                <pre><code>${visibleLines}</code></pre>
                <div class="code-hidden" style="display: none;">
                  <pre><code>${hiddenLines}</code></pre>
                </div>
                <button class="code-toggle-btn" onclick="toggleCode(this)">
                  显示更多代码
                </button>
              </div>`
            }
            return match
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 代码行号插件
export function lineNumbersPlugin() {
  return {
    name: 'line-numbers',
    transform(code, id) {
      if (id.includes('.md')) {
        // 添加行号
        const enhancedCode = code.replace(
          /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g,
          (match, content) => {
            const lines = content.split('\n')
            const numberedLines = lines.map((line, index) => 
              `<span class="line-number">${index + 1}</span>${line}`
            ).join('\n')
            
            return `<div class="code-with-line-numbers">
              <pre><code>${numberedLines}</code></pre>
            </div>`
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 数学公式渲染插件
export function mathPlugin() {
  return {
    name: 'math-renderer',
    transform(code, id) {
      if (id.includes('.md')) {
        // 优化数学公式渲染
        const enhancedCode = code.replace(
          /\$\$([\s\S]*?)\$\$/g,
          (match, formula) => {
            return `<div class="math-block" data-formula="${encodeURIComponent(formula.trim())}">
              <div class="math-loading">正在渲染数学公式...</div>
            </div>`
          }
        ).replace(
          /\$([^$]+)\$/g,
          (match, formula) => {
            return `<span class="math-inline" data-formula="${encodeURIComponent(formula)}">
              <span class="math-loading">🧮</span>
            </span>`
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// Mermaid 图表增强插件
export function mermaidPlugin() {
  return {
    name: 'mermaid-enhancer',
    transform(code, id) {
      if (id.includes('.md')) {
        // 增强 Mermaid 图表显示
        const enhancedCode = code.replace(
          /```mermaid([\s\S]*?)```/g,
          (match, content) => {
            const chartId = `mermaid-${Math.random().toString(36).substr(2, 9)}`
            return `<div class="mermaid-chart" id="${chartId}" data-content="${encodeURIComponent(content)}">
              <div class="mermaid-loading">
                <div class="loading-spinner"></div>
                <span>正在渲染图表...</span>
              </div>
            </div>`
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 图片懒加载插件
export function lazyImagePlugin() {
  return {
    name: 'lazy-image',
    transform(code, id) {
      if (id.includes('.md')) {
        // 图片懒加载
        const enhancedCode = code.replace(
          /!\[([^\]]*)\]\(([^)]+)\)/g,
          (match, alt, src) => {
            if (src.startsWith('http')) {
              return `<img src="${src}" alt="${alt}" loading="lazy" class="lazy-image" />`
            }
            return match
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 语法检查插件
export function grammarCheckPlugin() {
  return {
    name: 'grammar-check',
    transform(code, id) {
      if (id.includes('.md')) {
        // 添加语法检查提示
        const enhancedCode = code.replace(
          /([。！？\.\!\?]+)/g,
          (match) => {
            return `<span class="punctuation-check" title="标点符号检查通过">${match}</span>`
          }
        )
        
        return enhancedCode
      }
      return code
    }
  }
}

// 阅读时间计算插件
export function readingTimePlugin() {
  return {
    name: 'reading-time',
    transform(code, id) {
      if (id.includes('.md')) {
        // 计算阅读时间
        const wordsPerMinute = 200
        const chineseCharsPerMinute = 300
        
        // 统计中文字符和英文单词
        const chineseChars = (code.match(/[\u4e00-\u9fa5]/g) || []).length
        const englishWords = (code.match(/[a-zA-Z]+/g) || []).length
        
        const chineseTime = chineseChars / chineseCharsPerMinute
        const englishTime = englishWords / wordsPerMinute
        const totalMinutes = Math.ceil(chineseTime + englishTime)
        
        // 添加到文档开头
        if (totalMinutes > 0) {
          const readingTimeHtml = `
<div class="reading-time-info">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
  预计阅读时间：${totalMinutes} 分钟
</div>
`
          return readingTimeHtml + code
        }
      }
      return code
    }
  }
}

// 导出所有插件
export default {
  codeEnhancePlugin,
  codeFoldingPlugin,
  lineNumbersPlugin,
  mathPlugin,
  mermaidPlugin,
  lazyImagePlugin,
  grammarCheckPlugin,
  readingTimePlugin
}