import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    }
  }
})

export default useCounterStore
