<template>
    <div class="account_loan_container_main" v-if="props.isVisible == true">
        <h2>Cuentas</h2>
        <div class="accounts_container">
            <AccountComponent />
            <AccountComponent />
            <AccountComponent />
            <button id="add_btn">Add new account</button>
        </div>
        <h2>Prestamos</h2>
        <div class="loans_container">
            <LoanComponent />
            <LoanComponent />
            <LoanComponent />
        </div>
    </div>
</template>

<script setup>
import AccountComponent from './AccountComponent.vue'
import LoanComponent from './LoanComponent.vue'
import { defineProps } from 'vue';

const props = defineProps(
    {
        isVisible : Boolean
    }
)
</script>

<style scoped>

.account_loan_container_main{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}
h2{
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
}
.accounts_container,.loans_container{
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}
#add_btn{
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 6px;
    background-color: #12B1C7;
    color: white;
}
#add_btn:active{
    background-color: #55b9c7;
}
#add_btn:hover{
   background-color: #55b9c7;
   cursor: pointer; 
}
@media (min-width:1000px){

    .account_loan_container_main{
    width: 80%;
    min-height: 90vh;
    align-self: flex-end;
} 
.accounts_container{
    min-height: 180px;
    max-height: 450px;
}
.loans_container{
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    width: 90%;
}
#add_btn{
    align-self: flex-end;
    margin-right: 10%;
}
}
</style>