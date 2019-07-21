import fetchData from "../api";

export default {
  async getPosts({ commit }) {
    return fetchData().then(items => commit("getPosts", items));
  }
};
