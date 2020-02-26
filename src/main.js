import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {return{
    cards: [
      {
        name: "Viktor Rizk",
        number: "0321 0321 0321 0321",
        month: "01",
        year: "21",
        vendor: "bitcoin",
        id: 0
      },
      {
        name: "Adin Ehnsiö",
        number: "0006 0006 0006 0006",
        month: "01",
        year: "21",
        vendor: "ninja",
        id: 1
      },
      {
        name: "Nico Andersson",
        number: "1234 5678 9000 8000",
        month: "01",
        year: "21",
        vendor: "blockchain",
        id: 2
      },
      {
        name: "Viktor Baurne",
        number: "4343 2444 5668 8899",
        month: "01",
        year: "21",
        vendor: "evil",
        id: 3
      }
    ]
  }},
  render: h => h(App)
}).$mount('#app')
