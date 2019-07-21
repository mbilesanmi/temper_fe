<template>
  <div class="max-w-lg rounded overflow-hidden shadow-lg">
    <div class="bg-gray-100 p-4">
      <div>
        List of actions committed
      </div>
      <ul id="msgList" class="max-w-lg rounded overflow-hidden shadow-lg">
        <transition-group
          enter-active-class="animated bounceInDown"
          leave-active-class="animated bounceOutRight"
        >
          <li
            v-for="(msg, index) in messages"
            :key="index + '-' + msg[0]"
            class="msg block text-gray-700 bg-white flex justify-between px-4 py-4 border-b items-center"
          >
            <span>
              Moved post {{ msg[0] }} from index {{ msg[1] }} to {{ msg[2] }}
            </span>
            <button
              class="timeTravel bg-green-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
            >
              Time travel
            </button>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    messages() {
      return this.$store.getters.displayMsgs;
    }
  }
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
