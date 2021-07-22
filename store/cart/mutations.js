export default {
    setCartItems(state, data) {
        state.cartItems = data
    },
    addCartItem(state, data) {
        let currentItems = state.cartItems
        let newItems = currentItems.push(data)
        console.log(newItems)
        state.cartItems = newItems
    },
    getCartItems(state, data){
        let allProducts = [...data];
        let allCartItem = [...state.cartItems]
        let originCart = []
        allCartItem.map(item => {
            let findItem = allProducts.find(i => i.id == item.product)
            // originCart = findItem
            // console.log(findItem)
            // originCart.push(findItem)
            originCart = [
                ...originCart,
                {
                    product: findItem,
                    details: item
                }
            ]
        })
        state.items = originCart
    },
    removeCartItem(state, id) {
        let cartItems = [...state.cartItems]
        let items = [...state.items]

        let newCartItems = cartItems.filter(item => item.id !== id);
        let newItems = items.filter(item => item.details.id !== id)

        state.cartItems = newCartItems;
        state.items = newItems;
    }
}