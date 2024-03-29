<template>
    <div class="cards_container_main" v-if="props.isVisible == true">
        <h2>Tarjetas</h2>
        <section class="debit_cards_container cards_container">
            <h2 class="title">Debito</h2>
            <CardComponent v-for="card of debitCards" 
            :key="card.id"
            :cardColor="card.cardColor"
            :cardType="card.cardType"
            :fromDate="card.fromDate"
            :thruDate="card.thruDate"
            :number="card.number"
            :cvv="card.cvv"
            :id="card.id" />
        </section>
        <section class="credit_cards_container cards_container">
            <h2 class="title">Credito</h2>
            <CardComponent v-for="card of creditCards" 
            :key="card.id"
            :cardColor="card.cardColor"
            :cardType="card.cardType"
            :fromDate="card.fromDate"
            :thruDate="card.thruDate"
            :number="card.number"
            :cvv="card.cvv"
            :id="card.id" />

        </section>
        <button id="add_card_btn" @click="handleClick">Agregar nueva tarjeta</button>
        <AddCardForm 
        :isVisible="isVisibleAddCard"
        @close-add-form="isVisibleAddCard = false" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#12B1C7" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,144C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue'
import AddCardForm from '../components/AddCardForm.vue'
import { ref,defineProps,onMounted } from 'vue';
import 'animate.css'

const isVisibleAddCard = ref(false)
const debitCards = ref([])
const creditCards = ref([])

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
onMounted(()=>{
    fetch('http://localhost:8080/api/clients/auth',{method:'GET',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('Error fetching data')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{console.log(data)
        debitCards.value = data.cards.filter(c=>c.deleted == false && c.cardType == 'DEBITO')
        creditCards.value = data.cards.filter(c=>c.deleted == false && c.cardType == 'CREDITO')
        })
        .catch(err=>console.log(err))
    }
)

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