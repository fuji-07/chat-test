<template>
  <chat-parts>こんにちは</chat-parts><br />
  <chat-form @submit="addChat"></chat-form>
</template>

<script>
import ChatParts from "./components/parts/ChatParts.vue";
import ChatForm from "./components/parts/ChatForm.vue";

export default {
  name: "App",
  components: {
    ChatParts,
    ChatForm,
  },
  methods: {
    addChat(message) {
      console.log(message);
    },
  },
};
</script>

<style>
</style>
