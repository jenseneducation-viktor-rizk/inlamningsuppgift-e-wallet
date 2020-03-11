<template>
  <main class="home">
    <Top v-if="activeCard" 
    :top="{title: 'E-Wallet', type: 'Active Card'}" />
    <Top v-else 
    :top="{title: 'E-Wallet', type: ''}" />
    <Card v-if="activeCard"
    :card="activeCard"/>
    <a class="cta" 
    v-if="activeCard"
    @click="removeCard(activeIndex)">Remove</a>
    <h2 v-else>No Cards</h2>
    <CardStack :cards="cards"
    @cardClicked="changeActive"/>
    <router-link class="cta" to="/addcard">Add New Card</router-link>
  </main>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack'
// import Router from '@/router'
export default {
  name: 'Home',
  components: {Top, Card, CardStack},
  data(){return{
    activeIndex: 0
  }},
  created() {
    if (JSON.parse(localStorage.getItem('cards')).length > 0) {
      try {
        this.$store.dispatch('readThisLocalStorage')
      } catch(e) {
        localStorage.removeItem('cards');
      }
    } else {
      this.$router.push('/addcard')
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards
        },
    activeCard() {
      return this.cards[this.activeIndex]
        }
  },
  methods: {
    removeCard(activeIndex){
      this.$store.dispatch('removeThisCard', activeIndex)
      // this.$root.removeCard(activeIndex)
      this.activeIndex = 0;
    },
    changeActive(id) {
      this.activeIndex = this.cards.findIndex((card) => card.id == id )
    }
    
  }  
}
</script>
