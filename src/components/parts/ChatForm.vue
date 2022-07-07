<template>
  <input type="text" v-model="message" />
  <button class="button-1">送信</button>
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
.button-1 {
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-1:hover,
.button-1:focus {
  background-color: #f082ac;
}
</style>