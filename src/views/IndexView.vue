<template>
    <div class="main_container_index">
        <NavBarComponent
        :isVisible="navBarVisible"
        @close-navbar ="handleCloseNavBar" />
        <AccountAndLoanSection :isVisible="isVisibleAccountAndLoanSection" />
        <CardsSection />
    </div>
</template>

<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import AccountAndLoanSection from '../components/AccountAndLoanSection.vue'
import CardsSection from '../components/CardsSection.vue'
import {ref} from 'vue';

const navBarVisible =ref(true)
const isVisibleAccountAndLoanSection = ref(false)

const handleCloseNavBar = ()=>{
    if(window.innerWidth <999){
        navBarVisible.value = false;
    }
}

</script>

<style scoped>
.main_container_index{
    position: relative;

}
@media (min-width:1000px){
.main_container_index{
    display: flex;
    flex-direction: row;
}

}
</style>