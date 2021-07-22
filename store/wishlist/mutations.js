export default {
    setWishlistItems(state, data) {
        state.wishlistItems = data
    },
    addWishlistItem(state, data) {
        let currentItems = state.wishlistItems
        let newItems = currentItems.push(data)
        console.log(newItems)
        state.wishlistItems = newItems
    },
    getWishlistItems(state, data){
        let allProducts = [...data];
        let allWishlistItem = [...state.wishlistItems]
        let originWishlist = []
        allWishlistItem.map(item => {
            let findItem = allProducts.find(i => i.id == item.product)
            // originCart = findItem
            // console.log(findItem)
            // originCart.push(findItem)
            originWishlist = [
                ...originWishlist,
                {
                    product: findItem,
                    details: item
                }
            ]
        })
        state.items = originWishlist
    },
    removeWishlistItem(state, id) {
        let cartWishlist = [...state.wishlistItems]
        let items = [...state.items]

        let newWishlistItems = wishlistItems.filter(item => item.id !== id);
        let newItems = items.filter(item => item.details.id !== id)

        state.wishlistItems = newWishlistItems;
        state.items = newItems;
    }
}
