<template>
  <main id="add-card">
    <Top />
    <Card :card="newCard"/>
    <CardForm 
    @formCard="mergeCards"/>
    <a class="cta" @click="pushCard">Add Card</a>
  </main>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card' 
import CardForm from '@/components/CardForm'
export default {
  name: 'AddCard',
  components: {Top, Card, CardForm},
  data(){return{
    newCard: {
        name: "",
        number: "",
        valid: "",
        vendor: "bitcoin",
        id: 0
      }
  }},
  methods: {
    mergeCards(formCard) {
      this.newCard = formCard;
    },
    pushCard() {
      this.$root.$data.cards.push(this.newCard);
      this.$router.push('/');
    }
  }
  
  
}
</script>
