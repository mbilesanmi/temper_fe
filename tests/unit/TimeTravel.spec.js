import { shallowMount } from "@vue/test-utils";
import TimeTravel from "@/components/TimeTravel.vue";

describe("TimeTravel.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(TimeTravel);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
