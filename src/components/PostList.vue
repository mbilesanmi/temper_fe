<template>
  <div id="postList" class="max-w-lg rounded overflow-hidden text-left">
    <h3 class="font-bold text-lg mb-2">Sortable Post List</h3>
    <div
      v-for="(data, index) in posts"
      :key="index"
      id="post"
      class="max-w-lg rounded shadow border border-gray-200 my-6"
    >
      <div class="block text-gray-700 flex justify-between px-4 py-4">
        <div class="text-md">{{ data.title }}</div>
        <div class="flex flex-col">
          <i v-if="index > 0" class="moveUp fas fa-angle-up"></i>
          <i
            v-if="posts && index < posts.length - 1"
            class="moveDown fas fa-angle-down"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getPosts");
  },

  computed: {
    posts() {
      return this.$store.getters.displayPosts;
    }
  }
};
</script>
