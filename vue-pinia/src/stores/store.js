import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    },
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
    tripleCount() {
      return this.count * 3
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  }
})