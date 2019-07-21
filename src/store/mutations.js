export default {
  getPosts(state, payload) {
    state.posts = payload;
  },

  setMessage(state, payload) {
    state.messages.splice(0, 0, payload);
  },

  timeTravelState(state, { msg }) {
    if (msg[1] < msg[2]) {
      state.posts.splice(msg[1], 0, state.posts[msg[2]]);
      state.posts.splice(msg[2] + 1, 1);
    } else {
      state.posts.splice(msg[2], 0, state.posts[msg[1]]);
      state.posts.splice(msg[1] + 1, 1);
    }
  }
};
