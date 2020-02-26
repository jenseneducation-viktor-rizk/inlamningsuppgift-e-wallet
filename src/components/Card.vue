<template>
<article class="card">
    <header></header>
    <section class="number"> {{card.number}} </section>
    <section class="info">
        <aside class="holder">
            <span>Cardholder Name</span>
            <p> {{card.name}} </p>
        </aside>
        <aside class="valid">
            <span>Valid Until</span>
            <p> {{card.valid}} </p>
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