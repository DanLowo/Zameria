export default {
    setProducts(state, {results, count, next, previous}){
        state.allProducts.products = results
        state.allProducts.noOfProducts = count
        state.allProducts.next = next
        state.allProducts.previous = previous
    },
    setProduct(state, id){
        let allProducts = [
            ...state.allProducts.products
        ]
        const getProduct = allProducts.find(product => product.id == id)
        state.product = getProduct   
    }
}