<template>
    <div class="main_container_loan">
        <div id="amount_container">
                <p id="loan_type">Hipotecario</p>
                <p id="loan_amount">$40.000.000</p>
        </div>
        <div id="payments_container">
            <i class="fa-solid fa-caret-down" @click="showPayOption = !showPayOption"></i>
            <p id="payment_title">Cuotas</p>
            <p id="payment_number">12/64</p>
            <div id="pay" v-if="showPayOption == true" ref="pay_container">
                <p>Pagar cuota</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const showPayOption = ref(false)
const pay_container = ref(null)

onClickOutside(pay_container,()=>{
    showPayOption.value =false
})
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.main_container_loan{
    width: 90%;
    height: 80px;
    border-radius: 8px;
    display: flex;
    background-color: #12B1C7;
}
#amount_container{
    width: 60%;
    height: 100%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
#loan_amount{
    font-size: 22px;
}
#payments_container{
    height: 100%;
    width:40%;
    border-radius: 50px 8px 8px 50px;
    background-color: #106772; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;   
    gap: 3px;
    position: relative;
}
#payment_number{
    font-size: 22px;
}
#loan_type,#payment_title{
    font-size: 14px;
}
.fa-caret-down{
    position: absolute;
    top: 8px;
    right: 15px;
}
.fa-caret-down:active{
    color: #12B1C7;
}
.fa-caret-down:hover{
    color: #12B1C7;
    cursor: pointer;
}
@media (min-width:1000px){
    .main_container_loan{
    width: 350px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    background-color: #12B1C7;
}
.main_container_loan:hover{
    cursor: pointer;
    box-shadow: 1px 4px 1px 0px rgb(197, 197, 197);
}
#pay{
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    position: absolute;
    text-align: center;
    right: 35px;
    top: 20px;
    width: 130px;
    font-size: 14px;
    color: black;
    box-shadow: 1px 1px 4px 0px rgb(217, 217, 217);
}
#pay:hover{
    color: grey;
}
}
</style>