<script setup lang="ts">
import { useChatbot } from '@/composables/useChatbot'
import ChatbotButton from './ChatbotButton.vue'
import ChatbotWindow from './ChatbotWindow.vue'

const { isOpen, input, messages, isTyping, toggleChat, sendMessage } = useChatbot()
</script>

<template>
  <div class="fixed right-6 bottom-20 z-50 flex flex-col items-end gap-4 lg:right-8 lg:bottom-10">
    <ChatbotWindow
      :is-open="isOpen"
      :messages="messages"
      :is-typing="isTyping"
      v-model="input"
      @submit="sendMessage"
      @close="toggleChat"
    />
    <ChatbotButton :is-open="isOpen" @toggle="toggleChat" />
  </div>
</template>
