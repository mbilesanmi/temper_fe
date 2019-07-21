import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const createStore = () => {
  const state = {
    messages: [],
    posts: []
  };

  return {
    state,
    actions,
    getters,
    mutations
  };
};

export default createStore;
