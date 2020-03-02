import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {return{
    cards: []
  }},
  created() {
    if (JSON.parse(localStorage.getItem('cards')).length > 0) {
      try {
        this.cards = JSON.parse(localStorage.getItem('cards'));
      } catch(e) {
        localStorage.removeItem('cards');
      }
    } else {
      this.$router.push('/addcard')
    }
  },
  watch: {
    cards(newCards) {
      const parsed = JSON.stringify(newCards)
      localStorage.setItem('cards', parsed)
    }
  },
  render: h => h(App)
}).$mount('#app')
