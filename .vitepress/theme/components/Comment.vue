<template>
  <div class="comment-section" v-if="showComments">
    <h3 class="comment-title">💬 评论与反馈</h3>
    <div class="comment-info">
      <p>如果您有任何问题、建议或反馈，欢迎通过以下方式联系我们：</p>
      <div class="contact-links">
        <a 
          href="https://github.com/blankzsh/markflow-lite/issues" 
          target="_blank" 
          rel="noopener noreferrer"
          class="contact-link github"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub Issues
        </a>
        
        <a 
          href="mailto:shell7@petalmail.com" 
          class="contact-link email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          邮件反馈
        </a>
        
        <a 
          href="https://editor.currso.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="contact-link website"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          在线体验
        </a>
      </div>
    </div>
    
    <div class="feedback-form" v-if="showFeedbackForm">
      <h4>快速反馈</h4>
      <form @submit.prevent="submitFeedback">
        <div class="form-group">
          <label for="feedback-type">反馈类型：</label>
          <select id="feedback-type" v-model="feedbackType" required>
            <option value="">请选择...</option>
            <option value="bug">问题反馈</option>
            <option value="feature">功能建议</option>
            <option value="docs">文档建议</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="feedback-content">反馈内容：</label>
          <textarea 
            id="feedback-content" 
            v-model="feedbackContent" 
            rows="4" 
            placeholder="请详细描述您的反馈..."
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="contact-info">联系方式（可选）：</label>
          <input 
            id="contact-info" 
            type="text" 
            v-model="contactInfo" 
            placeholder="邮箱或GitHub用户名"
          >
        </div>
        
        <div class="form-actions">
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? '提交中...' : '提交反馈' }}
          </button>
          <button type="button" class="cancel-btn" @click="showFeedbackForm = false">
            取消
          </button>
        </div>
      </form>
    </div>
    
    <div class="feedback-actions" v-else>
      <button class="feedback-btn" @click="showFeedbackForm = true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
        </svg>
        提交反馈
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showComments = ref(true)
const showFeedbackForm = ref(false)
const feedbackType = ref('')
const feedbackContent = ref('')
const contactInfo = ref('')
const isSubmitting = ref(false)

const submitFeedback = async () => {
  if (!feedbackType.value || !feedbackContent.value) {
    alert('请填写必填项')
    return
  }
  
  isSubmitting.value = true
  
  try {
    // 这里可以集成实际的反馈提交逻辑
    // 比如发送到 GitHub Issues API 或邮件服务
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('感谢您的反馈！我们会尽快处理。')
    
    // 重置表单
    feedbackType.value = ''
    feedbackContent.value = ''
    contactInfo.value = ''
    showFeedbackForm.value = false
    
  } catch (error) {
    console.error('反馈提交失败:', error)
    alert('提交失败，请稍后重试或使用其他联系方式。')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.comment-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.comment-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.comment-info {
  margin-bottom: 1.5rem;
}

.comment-info p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.contact-link.github {
  color: #333;
  background: #f6f8fa;
}

.contact-link.github:hover {
  background: #e1e4e8;
}

.contact-link.email {
  color: #d93025;
  background: #fce8e6;
}

.contact-link.email:hover {
  background: #f9d7d3;
}

.contact-link.website {
  color: #3eaf7c;
  background: #e6f7f0;
}

.contact-link.website:hover {
  background: #d1f0e4;
}

.feedback-form {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.feedback-form h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.875rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px rgba(62, 175, 124, 0.2);
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-btn,
.cancel-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn {
  background: var(--vp-c-brand);
  color: white;
}

.submit-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-dark);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cancel-btn {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.cancel-btn:hover {
  background: var(--vp-c-bg-mute);
}

.feedback-actions {
  margin-top: 1rem;
}

.feedback-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feedback-btn:hover {
  background: var(--vp-c-brand-dark);
}

@media (max-width: 768px) {
  .contact-links {
    flex-direction: column;
  }
  
  .contact-link {
    width: 100%;
    justify-content: center;
  }
  
  .form-actions {
    flex-direction: column;
  }
}

.dark {
  .contact-link.github {
    color: #e6edf3;
    background: #21262d;
    border-color: #30363d;
  }
  
  .contact-link.github:hover {
    background: #30363d;
  }
  
  .contact-link.email {
    background: #3c1e1a;
    border-color: #8b4a47;
  }
  
  .contact-link.email:hover {
    background: #4c2420;
  }
  
  .contact-link.website {
    background: #1a332d;
    border-color: #3eaf7c;
  }
  
  .contact-link.website:hover {
    background: #214139;
  }
  
  .feedback-form {
    background: var(--vp-c-bg-mute);
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    background: var(--vp-c-bg);
    border-color: var(--vp-c-divider);
  }
}
</style>