<template>
  <div>
    PostList
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
