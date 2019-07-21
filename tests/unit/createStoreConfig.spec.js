import createStoreConfig from "../../src/store/createStoreConfig";
import Vuex from "vuex";
import fetchData from "../../src/api";
import { createLocalVue } from "@vue/test-utils";
import { createItems } from "../helper/utils";

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock("../../src/api");

test("returns first 5 posts", async () => {
  const posts = createItems(5);
  fetchData.mockResolvedValue(posts);

  const storeConfig = createStoreConfig();
  const store = new Vuex.Store(storeConfig);

  await store.dispatch("getPosts");

  expect(store.getters.displayPosts).toEqual(posts.slice(0, 5));
});
