export default {
  async getWishlist({ commit }) {
    await this.$axios
      .get("https://api.zameria.com/market_place/wish_list/")
      .then(res => {
        commit("setWishlistItems", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async addWishlist({ commit }, data) {
    await this.$axios
      .post("https://api.zameria.com/market_place/wish_list/add/", data)
      .then(res => {
          console.log(res)
        commit("addWishlistItem", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async removeWishlistItem({ commit }, id) {
    await this.$axios
      .delete(`https://api.zameria.com/market_place/wish_list/${id}`)
      .then(res => {
          console.log(res)
        commit("removeWishlistItem", id);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
