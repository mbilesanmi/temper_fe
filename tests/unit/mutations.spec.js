import mutations from "../../src/store/mutations";

test("getPosts updates state with posts in payload", () => {
  const state = {
    posts: []
  };
  const posts = [{}, {}];
  mutations.getPosts(state, posts);
  expect(state.posts).toBe(posts);
});

test("setMessage updates state with message in payload", () => {
  const state = {
    messages: []
  };
  const msg = [1, 2, 3];
  mutations.setMessage(state, msg);
  expect(state.messages).toEqual([msg]);
});
