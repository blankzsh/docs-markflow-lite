<template>
  <div
    class="reading-progress"
    :style="{ transform: `scaleX(${progress})` }"
    v-if="isVisible"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const isVisible = ref(false)

const updateProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  
  if (scrollHeight > 0) {
    progress.value = scrollTop / scrollHeight
    isVisible.value = scrollTop > 100 && scrollTop < scrollHeight - 100
  } else {
    progress.value = 0
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3eaf7c, #42b883);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 100;
}
</style>