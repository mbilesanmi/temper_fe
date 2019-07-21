import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList.vue";

describe("PostList.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(PostList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
