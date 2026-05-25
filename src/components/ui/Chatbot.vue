<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { getPop, getSlideUp } from '@/utils/animation'
import { marked } from 'marked'
import star from '../../assets/star.svg'
import flower from '../../assets/flower.svg'

marked.setOptions({
  breaks: true, // Parse newlines as <br>
})

const isOpen = ref(false)
const input = ref('')
const messages = ref<{role: 'user' | 'ai', text: string}[]>([
  { role: 'ai', text: "Hello! I'm Andyh's virtual assistant. Ask me anything about his skills, background, or projects!" }
])
const isTyping = ref(false)
const chatContainer = ref<HTMLElement | null>(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!input.value.trim() || isTyping.value) return

  const userMessage = input.value
  messages.value.push({ role: 'user', text: userMessage })
  input.value = ''
  isTyping.value = true
  scrollToBottom()

  try {
    const response = await fetch('http://localhost:3002/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    })

    if (!response.ok) throw new Error('API Error')
    
    if (!response.body) throw new Error('No body in response')

    messages.value.push({ role: 'ai', text: '' })
    const aiMessageIndex = messages.value.length - 1

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    
    let isDone = false
    while (!isDone) {
      const { value, done } = await reader.read()
      isDone = done
      if (value) {
        const chunk = decoder.decode(value, { stream: true })
        // parse SSE
        const lines = chunk.split('\n')
        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.text) {
                messages.value[aiMessageIndex].text += data.text
                scrollToBottom()
              }
              if (data.error) {
                 messages.value[aiMessageIndex].text = data.error
              }
            } catch (e) {
              // Ignore parse errors on incomplete chunks
            }
          }
        }
      }
    }
  } catch (e) {
    messages.value.push({ role: 'ai', text: "Sorry, I'm having trouble connecting right now." })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}
</script>

<template>
  <div class="fixed bottom-24 right-6 lg:bottom-10 lg:right-8 z-50 flex flex-col items-end gap-4">
    <!-- Chat Window -->
    <div 
      v-if="isOpen" 
      v-motion="getPop(0)"
      class="w-[90vw] sm:w-[400px] h-[550px] max-h-[75vh] flex flex-col bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_20px_40px_rgba(90,31,257,0.15)] overflow-hidden"
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
        <button @click="toggleChat" class="text-white/80 hover:text-white transition-colors">
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
        <form @submit.prevent="sendMessage" class="relative flex items-center">
          <input 
            v-model="input" 
            type="text" 
            placeholder="Ask me anything..." 
            class="w-full bg-white/90 border border-slate-200 rounded-full pl-5 pr-12 py-3.5 text-sm font-medium text-slate-700 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-slate-400"
          />
          <button 
            type="submit" 
            :disabled="!input.trim() || isTyping"
            class="absolute right-1.5 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-0.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Floating Action Button Orb -->
    <button 
      @click="toggleChat"
      class="relative flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark shadow-[0_10px_25px_rgba(38,37,41,0.4)] transition-transform duration-300 hover:scale-110 group"
      v-motion="getPop(1000)"
    >
      <!-- Orb glow -->
      <div class="absolute inset-0 bg-brand-primary rounded-full opacity-40 blur-md animate-pulse"></div>
      
      <!-- Core Icon -->
      <div v-if="!isOpen" class="relative z-10 w-8 h-8 flex items-center justify-center">
        <img :src="star" class="w-full h-full animate-[spin_10s_linear_infinite]" />
      </div>
      <div v-else class="relative z-10 text-white transition-all transform hover:rotate-90">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </div>
    </button>
  </div>
</template>

<style scoped>
:deep(.markdown-content p) {
  margin-bottom: 0.5rem;
}
:deep(.markdown-content p:last-child) {
  margin-bottom: 0;
}
:deep(.markdown-content strong) {
  font-weight: 800;
  color: #0f172a; /* slate-900 */
}
:deep(.markdown-content ul) {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}
:deep(.markdown-content ol) {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}
:deep(.markdown-content a) {
  text-decoration: underline;
  color: var(--color-brand-primary);
}
</style>
