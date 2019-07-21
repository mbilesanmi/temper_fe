import fetchData from "../api";

export default {
  async getPosts({ commit }) {
    return fetchData().then(items => commit("getPosts", items));
  },

  moveUp({ commit, state }, { index, id }) {
    state.posts.splice(index - 1, 0, state.posts[index]);
    state.posts.splice(index + 1, 1);
    const msg = [id, index, index - 1];
    commit("setMessage", msg);
  }
};
