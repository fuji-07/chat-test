<template>
  <b-col sm="2">
    <b-input-group>
      <b-form-input v-model='message'></b-form-input>
      <b-button>aa</b-button>
    </b-input-group>
  </b-col>
</template>

<script>
export default {
  name: "ChatForm",
  emits: ["submit"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onClick() {
      this.$emit("submit", this.message);
    },
  },
};
</script>

<style scoped>
</style>