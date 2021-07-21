export default {
    setCartItems(state, data) {
        state.cartItems = data
    },
    addCartItem(state, data) {
        console.log(data)
        let currentItems = state.cartItems
        let newItems = currentItems.push(data)
        console.log(newItems)
        state.cartItems = newItems
    }
}