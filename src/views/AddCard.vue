<template>
  <main id="add-card">
    <Top />
    <Card />
    <CardForm />
    <router-link class="cta" to="/">Add Card</router-link>
  </main>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card' 
import CardForm from '../components/CardForm'

export default {
  name: 'AddCard',
  components: {Top, Card, CardForm}
  
}
</script>
