import getters from "../../src/store/getters";
import { createItems } from "../helper/utils";

test("returns first 5 items from fetch", () => {
  const posts = createItems();

  const state = {
    posts
  };

  const result = getters.displayPosts(state);

  expect(getters.displayPosts(state).length).toEqual(5);
  expect(result).toEqual(posts.slice(0, 5));
});
