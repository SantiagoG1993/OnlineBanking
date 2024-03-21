<template>
    <div class="cards_container_main" v-if="props.isVisible == true">
        <h2>Tarjetas</h2>
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
        <button id="add_card_btn" @click="handleClick">Add new card</button>
        <AddCardForm 
        :isVisible="isVisibleAddCard"
        @close-add-form="isVisibleAddCard = false" />
    </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue'
import AddCardForm from '../components/AddCardForm.vue'
import { ref,defineProps } from 'vue';
import 'animate.css'

const isVisibleAddCard = ref(false)
const props =defineProps(
    {
        isVisible:Boolean
    }
)

const handleClick = ()=>{
    isVisibleAddCard.value = true
    if(window.innerWidth <999){
        window.scrollTo(
            {
                top:0,
                behavior:'smooth'
            }
        )
    }
}


</script>

<style scoped>
.cards_container_main{
    display: flex;
    flex-direction: column;
    user-select: none;
    animation:fadeIn 0.4s;
    width: 100%;
    min-height: 100vh;
}
h2{
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
    color: grey;
    font-size: 22px;
    text-align: center;
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
#add_card_btn{
    width: 155px;
    height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 4px;
    background-color: #12b1c7;
    color: white;
    margin-top: 20px;
    align-self: flex-end;
    margin-right: 30px;
}
#add_card_btn:active{
    background-color: #61afb9;  
}

@media (min-width:1000px){
    .cards_container{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: end;
    margin-top: 20px;
    width: 80%;


}
.cards_container_main{
    width: 80%;
    min-height: 100vh;
}
.title{
    display: none;
}
#add_card_btn:hover{
    cursor: pointer; 
    background-color: #5a979f;
}
    }
</style>