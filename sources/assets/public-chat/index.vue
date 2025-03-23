<template>
  <div class="chat-container">
    <Header />
    <h2>Live chat</h2>
    <div class="chat-box">
      <Message
        v-for="(msg, index) in messages"
        :key="index"
        :content="msg.content"
        :time="msg.time"
        :type="msg.type"
      />
    </div>
    <MessageInput @send="addMessage" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Message from './components/Message.vue';
import MessageInput from './components/MessageInput.vue';
import { Centrifuge } from 'centrifuge';

export default {
  components: {
    Header,
    Message,
    MessageInput
  },
  data() {
    return {
      messages: [
        { content: 'Hello, how can I help you?', time: '15:45', type: 'incoming' }
      ]
    };
  },
  mounted() {
    this.setupCentrifugo();
  },
  methods: {
    setupCentrifugo() {
      this.centrifuge = new Centrifuge('ws://localhost:8018/connection/websocket', {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiZXhwIjoxNzQyNzQ4OTU1LCJpYXQiOjE3NDI3NDUzNTUsImNoYW5uZWxzIjpbInVzZXIjMTIzIl19.xdCvGEoaZq65Bj82RYDlw-C0UJ_5bkKeq8nn-hNqgoY'
      });

      const sub = this.centrifuge.newSubscription('user#123');
      sub.on('publication', ctx => {
        const { data } = ctx;
        this.messages.push({
          content: data.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'incoming'
        });
      });

      this.centrifuge.on('connect', () => {
        console.log('Connected to Centrifugo');
      });
      this.centrifuge.on('disconnect', (ctx) => {
        console.log('Disconnected from Centrifugo', ctx);
      });
     
      this.centrifuge.connect();
    },
    addMessage(content) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.messages.push({ content, time, type: 'outgoing' });
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
  margin: 0 0 20px;
  font-size: 20px;
  color: red;
}
.chat-box {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 4px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
}
</style>
