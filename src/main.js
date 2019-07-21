import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import createStoreConfig from "./store/createStoreConfig";

Vue.config.productionTip = false;

Vue.use(Vuex);

const storeConfig = createStoreConfig();

const store = new Vuex.Store(storeConfig);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
