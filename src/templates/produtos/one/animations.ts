export const wrapper = {
  transition: { duration: 2 },
  initial: { opacity: 0, x: -150, y: -150 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -150, y: -150 }
}

export const wrapperFade = {
  transition: { duration: 1.2 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const rotate = {
  transition: { duration: 1.9 },
  initial: { rotate: '360deg' },
  animate: { rotate: '0deg' },
  exit: { rotate: '360deg' }
}
