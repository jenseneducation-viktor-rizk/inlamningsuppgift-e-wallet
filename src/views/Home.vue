<template>
  <main class="home">
    <Top :top="{title: 'E-Wallet', type: 'Active Card'}" />
    <Card :card="activeCard"/>
    <CardStack :cards="cards"
    v-on:emitId="changeActive"/>
    <router-link class="cta" to="/addcard">Add New Card</router-link>
  </main>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack'

export default {
  name: 'Home',
  components: {Top, Card, CardStack},
  data(){return{
    activeIndex: 0 
  }},
  
  computed: {
    activeCard() {
        return this.$root.$data.cards[this.activeIndex]
      },
    cards() {
      return this.$root.$data.cards
        }
  },
  methods: {
    changeActive(id) {
      this.activeIndex = this.cards.findIndex((card) => card.id == id )
    }
  }  
}
</script>
