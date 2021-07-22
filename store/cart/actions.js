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
  async removeCartItem({ commit }, id) {
    await this.$axios
      .delete(`https://api.zameria.com/market_place/cart/${id}`)
      .then(res => {
          console.log(res)
        commit("removeCartItem", id);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
