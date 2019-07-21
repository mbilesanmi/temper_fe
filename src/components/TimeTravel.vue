<template>
  <div class="w-full rounded overflow-hidden border border-gray-200 shadow-lg">
    <div class="bg-gray-200">
      <h3 class="font-bold text-lg mb-4 p-4 bg-white text-gray-700">
        List of actions committed
      </h3>
      <ul id="msgList" class="rounded overflow-hidden shadow-lg p-4">
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
              @click="timeTravel(index)"
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
  },

  methods: {
    timeTravel(index) {
      this.$store.dispatch("timeTravel", { index });
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
