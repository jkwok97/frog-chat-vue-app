<template>
  <div id="app">
    <app-header></app-header>
    <app-chat-box></app-chat-box>
    <app-chat-line v-if="brotherChosen"></app-chat-line>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ChatBox from './components/ChatBox.vue';
import ChatLine from './components/ChatLine.vue';
import { eventBus } from './main';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-chat-box': ChatBox,
    'app-chat-line': ChatLine,
  },
  data() {
    return {
      brotherChosen: false,
    }
  },
  created() {
    eventBus.$on('brotherWasSelected', (data) => {
                if (data) {
                  this.brotherChosen = true;
                }
            });
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("./assets/background-scene.jpg");
  background-size: cover;
  height: 100vh;
}
html {
  background-color: black;
}
</style>
