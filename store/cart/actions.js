export default {
  async getCart({ commit }) {
    await this.$axios
      .get("https://api.zameria.com/market_place/cart/")
      .then(res => {
        commit("setCartItems", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async addCart({ commit }, data) {
    await this.$axios
      .post("https://api.zameria.com/market_place/cart/add/", data)
      .then(res => {
          console.log(res)
        commit("addCartItem", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
