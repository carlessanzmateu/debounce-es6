export default class DebounceES6 {
  timeOutId = undefined

  debounce(callback, wait = 0, immediate = false) {
    this.clearTimeOutStack()

    if (immediate) {
      wait = 0
    }

    const executionTimeoutId = setTimeout(() => {
      callback()
    }, wait)

    this.setTimeOutId(executionTimeoutId)
  }

  clearTimeOutStack() {
    clearTimeout(this.getTimeOutId())
  }

  setTimeOutId(id) {
    this.timeOutId = parseInt(id.toString())
  }

  getTimeOutId() {
    return this.timeOutId
  }
}
