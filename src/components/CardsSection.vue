<template>
    <div class="cards_container_main">
        <section class="debit_cards_container cards_container">
            <h2 class="title">Debito</h2>
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </section>
        <section class="credit_cards_container cards_container">
            <h2 class="title">Credito</h2>
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </section>

    </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue'

</script>

<style scoped>
.cards_container_main{
    width: 100%;
    min-height: 100vh;
}
.cards_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.title{
    font-family: Arial, Helvetica, sans-serif;
color: grey;
}
@media (min-width:1000px){
    .cards_container{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: end;
    margin-top: 20px;
    width: 90%;

}
.cards_container_main{
    width: 70%;
    min-height: 100vh;
}
.title{
    display: none;
}
    }
</style>