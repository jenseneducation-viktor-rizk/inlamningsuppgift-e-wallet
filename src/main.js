import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    cards: [
      {
        name: "Viktor Rizk",
        number: "0321 0321 0321 0321",
        valid: "01/21",
        id: 0
      },
      {
        name: "Tiktor Frizk",
        number: "0221 0321 0321 0321",
        valid: "01/21",
        id: 1
      }
    ]
  }),
  render: h => h(App)
}).$mount('#app')
