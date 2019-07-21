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

  it("renders posts in the #postList and .post div", () => {
    const wrapper = shallowMount(PostList, {
      store
    });
    expect(wrapper.contains("#postList")).toBe(true);
    expect(wrapper.findAll(".post").length).toBe(3);
  });

  it("renders post with moveUp buttons", () => {
    const wrapper = shallowMount(PostList, {
      store
    });
    expect(wrapper.contains(".moveUp")).toBe(true);
    expect(wrapper.findAll(".moveUp").length).toBe(2);
  });

  it("renders post with moveDown buttons", () => {
    const wrapper = shallowMount(PostList, {
      store
    });
    expect(wrapper.contains(".moveDown")).toBe(true);
    expect(wrapper.findAll(".moveDown").length).toBe(2);
  });

  it("dispatches an action when moveUp button is clicked", () => {
    const mockStore = {
      ...store,
      dispatch: jest.fn()
    };

    const wrapper = shallowMount(PostList, {
      mocks: {
        $store: mockStore
      }
    });

    wrapper.find(".moveUp").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith("moveUp", {
      index: 1,
      id: 2
    });
  });

  it("dispatches an action when moveDown button is clicked", () => {
    const mockStore = {
      ...store,
      dispatch: jest.fn()
    };

    const wrapper = shallowMount(PostList, {
      mocks: {
        $store: mockStore
      }
    });

    wrapper.find(".moveDown").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith("moveDown", {
      index: 0,
      id: 1
    });
  });
});
