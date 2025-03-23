<template>
  <div :class="['message', type]">
    <div class="message-header" v-if="type === 'incoming'">
      <span class="user-initials">AA</span>
      <span class="user-name">Александр, айти-наставник</span>
      <span class="user-role">https://www.youtube.com/@BurmAlex</span>
    </div>
    <div class="message-content">
      <p>{{ content }}</p>
      <span class="message-time">{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    time: String,
    type: String
  }
};
</script>

<style scoped>
.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.incoming {
  background-color: #fff;
}
.outgoing {
  background-color: #dcf8c6;
  align-self: flex-end;
}
.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.user-initials {
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.user-name {
  font-weight: bold;
  margin-right: 5px;
}
.user-role {
  color: #888;
}
.message-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.message-time {
  color: #888;
  font-size: 12px;
}
</style>
