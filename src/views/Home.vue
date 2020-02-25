<template>
  <main class="home">
    <Top />
    <Card />
    <CardStack />
    <router-link class="cta" to="/addcard">Add New Card</router-link>
  </main>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card.vue'
import CardStack from '../components/CardStack'

export default {
  name: 'Home',
  components: {Top, Card, CardStack}  
}
</script>
