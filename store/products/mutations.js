export default {
    setProducts(state, {results, count, next, previous}){
        state.allProducts.products = results
        state.allProducts.noOfProducts = count
        state.allProducts.next = next
        state.allProducts.previous = previous
    }
}