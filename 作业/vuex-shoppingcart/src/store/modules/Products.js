// import axios from 'axios'
// store 内的 products 模块(modules)
// 包括 state mutations actions getters

const products = {
  // 模块内的 state 是一个函数必须返回一个对象
  state: () => ({
    products: [
      { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
      { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
      { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
    ],
  }),
  // 模块内部的 action、mutation 和 getter 是注册在全局的
  mutations: {
    checkout(state, cartList) {
      state.products.forEach((item) => {
        const currentProduct = cartList.find((ele) => ele.id === item.id)
        if (currentProduct) {
          item.inventory -= currentProduct.quantity
        }
      })
    },
  },
}
export default products
