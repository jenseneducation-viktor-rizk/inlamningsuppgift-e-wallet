<template>
    <section class="card-form" @input="emitNewCard" >
      <label for="number" class="col-2">Card Number</label>
      <input 
      type="text" 
      name="number" 
      maxlength="16" 
      placeholder="XXXX XXXX XXXX XXXX" 
      class="col-2"
      v-model="card.number">
      <label for="cardholder" class="col-2">Cardholder Name</label> 
      <input 
      type="text" 
      name="cardholder" 
      maxlength="32" 
      placeholder="Firstname Lastname" 
      class="col-2" 
      v-model="card.name"> 
      <label for="month" class="col-1">Month</label> 
      <label for="year" class="col-1">Year</label> 
      <select name="month" class="col-1" v-model="card.month">
        <option value="01">01</option> 
        <option value="02">02</option> 
        <option value="03">03</option> 
        <option value="04">04</option> 
        <option value="05">05</option> 
        <option value="06">06</option> 
        <option value="07">07</option> 
        <option value="08">08</option> 
        <option value="09">09</option> 
        <option value="10">10</option> 
        <option value="11">11</option> 
        <option value="12">12</option>
      </select> 
      <select name="year" class="col-1" v-model="card.year">
        <option value="21">21</option> 
        <option value="22">22</option> 
        <option value="23">23</option> 
        <option value="24">24</option> 
        <option value="25">25</option>
      </select> 
      <label for="vendor" class="col-2">Vendor</label> 
      <select name="vendor" class="col-2" v-model="card.vendor">
        <option value="bitcoin">Bitcoin Inc</option> 
        <option value="blockchain">Blockchain Inc</option> 
        <option value="evil">Evil Corp</option> 
        <option value="ninja">Ninja Bank</option>
        </select>
        </section>
</template>
<script>
export default {
  data() {return{
    card: {
        name: "",
        number: "",
        valid: "",
        vendor: "bitcoin"
      }
  }},
  methods: {
    emitNewCard() {
      return this.$emit('formCard', this.card)
    }
  }
}
</script>