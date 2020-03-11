<template>
  <main id="add-card">
    <Top :top="{title: 'Add New Card', type: 'New Card'}" />
    <Card :card="newCard"/>
    <CardForm 
    @emitFormCard="mergeCards"/>
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
        year: "YY",
        month: "MM",
        vendor: "bitcoin",
        id: Date.now()
      }
  }},
  methods: {
    mergeCards(formCard) {
      this.newCard = formCard;
    },
    pushCard() {
      this.$store.dispatch('addCard', this.newCard);
      this.$router.push('/');
    },
    routerPush() {
      if (JSON.parse(localStorage.getItem('cards')).length > 0){
        this.$router.push('/');
      }
      
    }
  }
  
  
}
</script>
