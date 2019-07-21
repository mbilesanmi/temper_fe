export default {
  getPosts(state, payload) {
    state.posts = payload;
  },

  setMessage(state, payload) {
    state.messages.splice(0, 0, payload);
  }
};
