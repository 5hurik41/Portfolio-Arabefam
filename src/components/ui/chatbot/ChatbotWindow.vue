<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { getPop } from '@/utils/animation'
import { marked } from 'marked'
import type { ChatMessage } from '@/composables/useChatbot'
import star from '@/assets/star.svg'

marked.setOptions({
  breaks: true
})

const props = defineProps<{
  isOpen: boolean
  messages: ChatMessage[]
  isTyping: boolean
  modelValue: string // For v-model input
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'submit'): void
  (e: 'close'): void
}>()

const chatContainer = ref<HTMLElement | null>(null)

// Watch messages deeply to scroll to bottom when AI streams
watch(() => props.messages, async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}, { deep: true })

// Also scroll when opened
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    await nextTick()
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  }
})
</script>

<template>
  <div 
    v-if="isOpen" 
    v-motion="getPop(0)"
    class="w-[90vw] sm:w-[400px] h-[550px] max-h-[75vh] flex flex-col bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_20px_40px_#5a25fb26] overflow-hidden"
  >
    <!-- Header -->
    <div class="bg-brand-primary p-4 flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
          <img :src="star" class="w-5 h-5 animate-[bounce_2s_linear_infinite]" />
        </div>
        <div>
          <h3 class="text-white font-bold leading-tight">Andyh's Assistant</h3>
          <p class="text-white/70 text-xs">Always online</p>
        </div>
      </div>
      <button @click="$emit('close')" class="text-white/80 hover:text-white transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Messages Area -->
    <div ref="chatContainer" class="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scroll-smooth">
      <div 
        v-for="(msg, i) in messages" 
        :key="i"
        class="max-w-[85%] rounded-2xl px-4 py-3 text-sm font-medium markdown-content"
        :class="[
          msg.role === 'user' 
            ? 'bg-gradient-to-br from-brand-dark to-brand-primary text-white self-end rounded-tr-sm shadow-md' 
            : 'bg-white border border-slate-100 text-slate-700 self-start rounded-tl-sm shadow-sm'
        ]"
      >
        <div v-if="msg.role === 'ai'" v-html="marked.parse(msg.text)"></div>
        <template v-else>{{ msg.text }}</template>
      </div>
      
      <!-- Typing Indicator -->
      <div v-if="isTyping" class="bg-white border border-slate-100 self-start rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5 h-[44px]">
        <div class="w-1.5 h-1.5 bg-brand-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div class="w-1.5 h-1.5 bg-brand-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div class="w-1.5 h-1.5 bg-brand-primary/60 rounded-full animate-bounce"></div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="p-4 bg-white/50 border-t border-white/40 backdrop-blur-md">
      <form @submit.prevent="$emit('submit')" class="relative flex items-center">
        <input 
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text" 
          placeholder="Ask me anything..." 
          class="w-full bg-white/90 border border-slate-200 rounded-full pl-5 pr-12 py-3.5 text-sm font-medium text-slate-700 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-slate-400"
        />
        <button 
          type="submit" 
          :disabled="!modelValue.trim() || isTyping"
          class="absolute right-1.5 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-0.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
:deep(.markdown-content p) { margin-bottom: 0.5rem; }
:deep(.markdown-content p:last-child) { margin-bottom: 0; }
:deep(.markdown-content strong) { font-weight: 800; color: #0f172a; }
:deep(.markdown-content ul) { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 0.5rem; }
:deep(.markdown-content ol) { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 0.5rem; }
:deep(.markdown-content a) { text-decoration: underline; color: var(--color-brand-primary); }
</style>
