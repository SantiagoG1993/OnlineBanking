<template>
    <div class="main_container_index">
        <NavBarComponent
        @toggle-section="toggleSection"
        :isVisible="navBarVisible"
        @close-navbar ="handleCloseNavBar" />
        <div class="menu_container">
            <img src="../assets/logo.png" alt="main_logo" id="logo">
            <i class="fa-solid fa-bars" @click="navBarVisible =!navBarVisible"></i>
        </div>
        <AccountAndLoanSection :isVisible="isVisibleAccountAndLoanSection" />
        <CardsSection :isVisible="isVisibleCardsSection" />
        <TransactionsSection :isVisible="isVisibleTransactionsSections" />
        <LoansSection :isVisible="isVisibleLoansSection" />
    </div>
</template>

<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import AccountAndLoanSection from '../components/AccountAndLoanSection.vue'
import CardsSection from '../components/CardsSection.vue'
import TransactionsSection from '../components/TransactionsSection.vue'
import LoansSection from '../components/LoansSection.vue'
import {ref} from 'vue';

const navBarVisible =ref(false)
const isVisibleAccountAndLoanSection = ref(true)
const isVisibleCardsSection = ref(false)
const isVisibleTransactionsSections = ref(false)
const isVisibleLoansSection = ref(false)

if(window.innerWidth >999){
        navBarVisible.value = true;
    }

const handleCloseNavBar = ()=>{
    if(window.innerWidth <999){
        navBarVisible.value = false;
    }
}
const toggleSection = (section) => {
    isVisibleAccountAndLoanSection.value = section === 'accounts';
    isVisibleCardsSection.value = section === 'cards';
    isVisibleTransactionsSections.value = section === 'transactions';
    isVisibleLoansSection.value = section === 'loans';
    if(window.innerWidth < 999)
    navBarVisible.value=false
}
</script>

<style scoped>
.main_container_index{
    position: relative;

}
.menu_container{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}
#logo{
    width: 100px;
    margin-left: 60px;
}
.fa-bars{
    font-size: 32px;
    color: #12B1C7;
}
.fa-bars:active{
  color: #477177;  
}
@media (min-width:1000px){
.main_container_index{
    display: flex;
    flex-direction: row;
}
.menu_container{
    display: none;
}

}
</style>