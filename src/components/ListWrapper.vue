<template>
  <div class="container mx-auto bg-green">
    <div class="flex mb-4">
      <div class="w-1/2 h-12">
        <PostList />
      </div>
      <div class="w-1/2 h-12">
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
