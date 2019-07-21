import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import TimeTravel from "../../src/components/TimeTravel";

Vue.use(Vuex);

describe("TimeTravel.vue", () => {
  let store, actions, getters, mutations, state, dispatch;

  beforeEach(() => {
    state = { messages: [[1, 0, 1], [2, 3, 1]] };

    actions = {
      timeTravel: jest.fn()
    };

    getters = {
      displayMsgs: jest.fn(() => state.messages)
    };

    mutations = {
      timeTravelState: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions,
      getters,
      mutations,
      dispatch
    });
  });

  it("is a Vue instance", () => {
    const wrapper = shallowMount(TimeTravel, {
      store
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders messages in the #msgList and .msg ul", () => {
    const wrapper = shallowMount(TimeTravel, {
      store
    });
    expect(wrapper.contains("#msgList")).toBe(true);
    expect(wrapper.findAll(".msg").length).toBe(2);
  });

  it("renders post with timeTravel buttons", () => {
    const wrapper = shallowMount(TimeTravel, {
      store
    });
    expect(wrapper.contains(".timeTravel")).toBe(true);
    expect(wrapper.findAll(".timeTravel").length).toBe(2);
  });
});
