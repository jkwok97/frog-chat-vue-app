import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    selectBrother(brother) {
      this.$emit('brotherWasSelected', brother);
    },
    addMessage(message) {
      this.$emit('messageWasAdded', message);
    }
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
