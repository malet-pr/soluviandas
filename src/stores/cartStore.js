import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    addItem (item) {
      this.cartItems.push(item)
    },
    removeItem (id) {
      const objWithIdIndex = this.cartItems.findIndex((obj) => obj.id === id);
      this.cartItems.fsplice(objWithIdIndex, 1);
    },
    removeAll () {
      this.cartItems = []
    },
    getCost () {
      let cost = 0
      this.cartItems.forEach(i => cost = cost + i.price)
      return cost
    }
  }
})
