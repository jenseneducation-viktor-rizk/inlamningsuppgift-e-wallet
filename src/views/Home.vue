<template>
  <main class="home">
    <Top v-if="activeCard" :top="{title: 'E-Wallet', type: 'Active Card'}" />
    <Top v-else :top="{title: 'E-Wallet', type: 'No Cards'}" />
    <Card v-if="activeCard" :card="activeCard"/>
    <a class="cta" v-if="activeCard" @click="removeCard(activeIndex)">Remove</a>
    <CardStack :cards="cards" @cardClicked="changeActive"/>
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
    cards() {
      return this.$root.$data.cards
        },
    activeCard() {
      return this.cards[this.activeIndex]
        }
  },
  methods: {
    removeCard(activeIndex){
      this.$root.removeCard(activeIndex)
      this.activeIndex = 0;
    },
    changeActive(id) {
      this.activeIndex = this.cards.findIndex((card) => card.id == id )
    }
    
  }  
}
</script>
