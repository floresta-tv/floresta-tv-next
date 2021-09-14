export const wrapper = {
  transition: { duration: 0.8 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const text = {
  transition: { delay: 0.4, duration: 0.7 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 200,
    x: 200,
    transition: {
      delay: 0.2,
      duration: 3
    }
  }
}
