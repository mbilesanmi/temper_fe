<template>
  <div id="app">
    <ListWrapper />
  </div>
</template>

<script>
import ListWrapper from "./components/ListWrapper.vue";

export default {
  name: "app",
  components: {
    ListWrapper
  }
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: linear-gradient(
    170deg,
    rgba(100, 87, 181, 1) 24%,
    rgba(246, 246, 246, 1) 24%,
    rgba(246, 246, 246, 1) 100%
  );
  height: 100vh;
}
</style>
