<template>
  <main id="add-card">
    <Top :top="{title: 'Add New Card', type: 'New Card'}" />
    <Card :card="newCard"/>
    <CardForm 
    @formCard="mergeCards"/>
    <a class="cta" @click="pushCard">Add Card</a>
    <a class="cta" @click="routerPush">Cancel</a>
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
      this.routerPush()
    },
    routerPush() {
      this.$router.push('/');
    }
  }
  
  
}
</script>
