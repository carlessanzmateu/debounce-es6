export default class DebounceES6 {
  constructor() {
    this.timeout = undefined;
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
    this.timeout = parseInt(value.toString());
  }

  getTimeoutValue() {
    return this.timeout;
  }
}
