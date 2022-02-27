// import Vue from "vue"
const cart = {
  state: () => ({
    cart: {
      // 购物车中的商品 id 数组
      productIdsInCart: [],
      // 每个 id 对应的商品买了几个
      quantityById: {},
    },
  }),
  mutations: {
    addToCart(state, id) {
      const { productIdsInCart, quantityById } = state.cart
      if (!productIdsInCart.includes(id)) {
        productIdsInCart.push(id)
        //数据改变，视图不更新，重新给对象赋值或者使用vue的set方法（深入响应式原理）
        state.cart.quantityById = { ...quantityById, [id]: 1 }
        // Vue.set(obj, propertyName, value)
      } else {
        quantityById[id]++
        // state.cart.quantityById = {
        //   ...quantityById,
        //   [id]: quantityById[id] + 1,
        // }
      }
    },
    checkout(state) {
      state.cart.productIdsInCart = []
      state.cart.quantityById = {}
    },
  },
  getters: {
    cartList(state, getters, rootState) {
      console.log(rootState)
      const { productIdsInCart, quantityById } = state.cart
      const { products } = rootState.products
      return productIdsInCart.reduce((res, ele) => {
        res.push({
          ...products.find((item) => item.id === ele),
          quantity: quantityById[ele],
        })
        return res
      }, [])
    },
    getTotal(state, getters) {
      return getters.cartList.reduce(
        (res, ele) => res + ele.price * ele.quantity,
        0
      )
    },
    getQuantityById(state) {
      return (id) => state.cart.quantityById[id] || 0
    },
  },
}
export default cart
