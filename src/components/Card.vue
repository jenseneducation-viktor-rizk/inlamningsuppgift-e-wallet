<template>
<article class="card" :class="card.vendor">
    <header>
        <img src="@/assets/chip-light.svg" alt="chip">
        <img v-bind:src="require(`@/assets/vendor-${card.vendor}.svg`)" alt="vendor">
    </header>
    <section class="number"> {{card.number}} </section>
    <section class="info">
        <aside class="holder">
            <span>Cardholder Name</span>
            <p> {{card.name}} </p>
        </aside>
        <aside class="valid">
            <span>Valid Until</span>
            <p> {{card.month}}/{{card.year}} </p>
        </aside>
    </section>
</article>
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: Object
    }
}
</script>

<style>

</style>