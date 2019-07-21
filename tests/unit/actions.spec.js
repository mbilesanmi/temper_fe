import actions from "../../src/store/actions";
import fetchData from "../../src/api";

jest.mock("../../src/api");

test("getPosts commits posts returned by api method", async () => {
  const posts = [1, 2, 3];
  fetchData.mockResolvedValue([1, 2, 3]);
  const commit = jest.fn();

  await actions.getPosts({ commit });
  expect(commit).toHaveBeenCalledWith("getPosts", posts);
});

test("moveUp commits setMessage with post move history", async () => {
  const state = {
    messages: [],
    posts: [1, 2, 3]
  };

  fetchData.mockResolvedValue([1, 2, 3]);
  const commit = jest.fn();

  await actions.moveUp({ commit, state }, { index: 1, id: 2 });
  expect(commit).toHaveBeenCalledWith("setMessage", [2, 1, 0]);
});

test("moveDown commits posts returned by api method", async () => {
  const state = {
    messages: [],
    posts: [1, 2, 3]
  };

  fetchData.mockResolvedValue([1, 2, 3]);
  const commit = jest.fn();

  await actions.moveDown({ commit, state }, { index: 1, id: 2 });
  expect(commit).toHaveBeenCalledWith("setMessage", [2, 1, 2]);
});

test("timeTravel commits messages", async () => {
  const state = {
    messages: [[3, 2, 1], [2, 1, 0]],
    posts: [1, 2, 3]
  };

  fetchData.mockResolvedValue([1, 2, 3]);
  const commit = jest.fn();
  const msg = state.messages[0];

  await actions.timeTravel({ commit, state }, { index: 1 });
  expect(commit).toHaveBeenCalledWith("timeTravelState", {
    i: 0,
    msg
  });
});
