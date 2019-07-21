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
  },

  moveDown({ commit, state }, { index, id }) {
    state.posts.splice(index, 0, state.posts[index + 1]);
    state.posts.splice(index + 2, 1);
    const msg = [id, index, index + 1];
    commit("setMessage", msg);
  },

  timeTravel({ commit, state }, { index }) {
    const msgs = state.messages;
    let i = 0;
    while (i < index) {
      const msg = msgs[i];
      commit("timeTravelState", { i, msg });
      i++;
    }
    msgs.splice(0, index);
  }
};
