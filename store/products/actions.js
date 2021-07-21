export default {
    async getProducts({commit}) {
        await this.$axios.get('https://api.zameria.com/market_place/product/')
        .then(res => {
            commit('setProducts', res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}