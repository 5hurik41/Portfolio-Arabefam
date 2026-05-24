import { type MotionVariants } from '@vueuse/motion'

export const getSlideUp = (delayMs: number): MotionVariants<any> => ({
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delayMs,
      duration: 800,
      type: 'spring',
      stiffness: 250,
    },
  },
})

export const getSlideLeft = (delayMs: number): MotionVariants<any> => ({
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0, transition: { delay: delayMs, duration: 800 } },
})

export const getSlideRight = (delayMs: number): MotionVariants<any> => ({
  initial: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0, transition: { delay: delayMs, duration: 800 } },
})

export const getPop = (delayMs: number): MotionVariants<any> => ({
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  enter: {
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
