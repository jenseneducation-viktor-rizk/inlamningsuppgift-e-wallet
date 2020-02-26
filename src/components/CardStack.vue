<template>
    <section class="card-stack">
        <Card v-for="card in cards"
        v-bind:key="card.id"
        v-bind:card="card"
        v-on:click.native="emitCardId(card.id)"/>
    </section>
</template>
<script>
import Card from './Card'
export default {
    name: 'CardStack',
    components: {Card},
    props: {
        cards: Array
    },
    methods: {
        emitCardId(id) {
            console.log("Hello")
            this.$emit('emitId', id)
        }
    } 
}
</script>