export const state = () => ({
  fixedNavBar: "",
  searchText: "",
  sorts: {
    Popularity: false,
    "Newest Arrivals": false,
    "Price: Low to High": false,
    "Price: Hight to Low": false
  },
  contactUs: "",
  states: [],
  cities: [],
  faqsList: []
});

export const mutations = {
  navBarToFixed(state, data) {
    state.fixedNavBar = "fixed";
  },
  setStates(state, data) {
    state.states = data;
  },
  setCities(state, data) {
    state.cities = data;
  },
  setFaqs(state, data){
    state.faqsList = data
  },
  setSearch(state, data) {
    state.searchText = data;
  },
  setSorts(state, data) {
    state.sorts = {
      Popularity: false,
      "Newest Arrivals": false,
      "Price: Low to High": false,
      "Price: Hight to Low": false
    };
    state.sorts[data] = !state.sorts[data];
  },
  setContactUs(state, data) {
    state.contactUs = data;
  }
};
