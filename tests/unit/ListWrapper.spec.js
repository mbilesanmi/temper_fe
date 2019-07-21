import { shallowMount } from "@vue/test-utils";
import ListWrapper from "../../src/components/ListWrapper.vue";

describe("ListWrapper.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(ListWrapper);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
