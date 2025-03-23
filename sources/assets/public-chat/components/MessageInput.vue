<template>
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Write your message..." />
    </template>

    <script>
    export default {
      data() {
        return {
          message: ''
        };
      },
      methods: {
        sendMessage() {
          if (this.message.trim() !== '') {
            this.$emit('send', this.message);
            this.message = '';
          }
        }
      }
    };
    </script>

    <style scoped>
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    </style>
