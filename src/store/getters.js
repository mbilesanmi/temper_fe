export default {
  displayPosts({ posts }) {
    return posts.slice(0, 5);
  },
  displayMsgs({ messages }) {
    return messages;
  }
};
