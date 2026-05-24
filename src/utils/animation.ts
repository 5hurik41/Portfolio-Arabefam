import { type MotionVariants } from '@vueuse/motion'

export const getSlideUp = (delayMs: number): MotionVariants<any> => ({
  initial: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: delayMs, duration: 800 },
  },
  leave: {
    opacity: 0,
    y: 100,
    transition: { duration: 0 },
  },
  // @ts-ignore
  visibleOnce: false,
})

export const getSlideLeft = (delayMs: number): MotionVariants<any> => ({
  initial: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay: delayMs, duration: 800 } },
  leave: { opacity: 0, x: -100, transition: { duration: 300 } },
  // @ts-ignore
  visibleOnce: false,
})

export const getSlideRight = (delayMs: number): MotionVariants<any> => ({
  initial: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: delayMs, duration: 800 } },
  leave: { opacity: 0, x: 100, transition: { duration: 300 } },
  // @ts-ignore
  visibleOnce: false,
})

export const getPop = (delayMs: number): MotionVariants<any> => ({
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delayMs,
      type: 'spring',
      stiffness: 150,
      damping: 10,
      mass: 1,
    },
  },
  leave: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 300 },
  },
  // @ts-ignore
  visibleOnce: false,
})

export const scrollIntoSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
