import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList.vue";

Vue.use(Vuex);

describe("PostList.vue", () => {
  let store, actions, getters, mutations, state, dispatch;

  beforeEach(() => {
    state = { posts: [{ id: 1 }, { id: 2 }, { id: 3 }] };

    actions = {
      getPosts: jest.fn(),
      moveUp: jest.fn(),
      moveDown: jest.fn()
    };

    getters = {
      displayPosts: jest.fn(() => state.posts)
    };

    mutations = {
      setMessage: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions,
      mutations,
      getters,
      dispatch
    });
  });

  it("is a Vue instance", () => {
    const wrapper = shallowMount(PostList, { store });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("dispatches a getPosts action", () => {
    const wrapper = shallowMount(PostList, {
      store
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(actions.getPosts.mock.calls).toHaveLength(1);
  });
});
