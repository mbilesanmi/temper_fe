<template>
  <div class="container mx-auto bg-green">
    <div class="flex justify-around wrapper">
      <div class="sm:w-full md:w-5/12 h-auto mx-2 mb-3">
        <PostList />
      </div>
      <div class="sm:w-full md:w-5/12 h-auto mx-2 mb-3">
        <TimeTravel />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "./PostList";
import TimeTravel from "./TimeTravel";

export default {
  components: {
    PostList,
    TimeTravel
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
}
</style>
