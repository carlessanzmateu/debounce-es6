export default class DebounceES6 {
  constructor() {
    this.timeoutId = undefined;
  }

  debounce(callback, wait, immediate = false) {
    const defaultWait = 0;
    this.clearTimeoutStack();

    wait = immediate ? defaultWait : wait;

    const executionTimeoutValue = setTimeout(() => callback(), wait);
    this.setTimeoutValue(executionTimeoutValue);
  }

  clearTimeoutStack() {
    clearTimeout(this.getTimeoutValue());
  }

  setTimeoutValue(value) {
    this.timeoutId = parseInt(value.toString());
  }

  getTimeoutValue() {
    return this.timeoutId;
  }
}
