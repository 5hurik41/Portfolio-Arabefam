import { ref } from 'vue'

export type ChatMessage = {
  role: 'user' | 'ai'
  text: string
}

export function useChatbot() {
  const isOpen = ref(false)
  const input = ref('')
  const messages = ref<ChatMessage[]>([
    { role: 'ai', text: "Hello! I'm Andyh's virtual assistant. Ask me anything about his skills, background, or projects!" }
  ])
  const isTyping = ref(false)

  const toggleChat = () => {
    isOpen.value = !isOpen.value
  }

  const sendMessage = async () => {
    if (!input.value.trim() || isTyping.value) return

    const userMessage = input.value
    messages.value.push({ role: 'user', text: userMessage })
    input.value = ''
    isTyping.value = true

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
      let buffer = '' // Robust SSE chunk buffering to prevent JSON parsing errors

      while (!isDone) {
        const { value, done } = await reader.read()
        isDone = done
        if (value) {
          buffer += decoder.decode(value, { stream: true })
          const events = buffer.split('\n\n')
          
          // The last element is either an incomplete event or an empty string. Keep it in the buffer.
          buffer = events.pop() || ''

          for (const event of events) {
            const lines = event.split('\n')
            for (const line of lines) {
              if (line.startsWith('data: ') && line.trim() !== 'data: [DONE]') {
                try {
                  const data = JSON.parse(line.slice(6))
                  if (data.text) {
                    // Update state, mutating the array triggers reactivity if deep tracked, but modifying array elements works directly in vue
                    messages.value[aiMessageIndex].text += data.text
                  }
                  if (data.error) {
                    messages.value[aiMessageIndex].text = data.error
                  }
                } catch (e) {
                  console.error('Failed to parse SSE JSON chunk:', line, e)
                }
              }
            }
          }
        }
      }
    } catch (e) {
      messages.value.push({ role: 'ai', text: "Sorry, I'm having trouble connecting right now." })
    } finally {
      isTyping.value = false
    }
  }

  return {
    isOpen,
    input,
    messages,
    isTyping,
    toggleChat,
    sendMessage
  }
}
