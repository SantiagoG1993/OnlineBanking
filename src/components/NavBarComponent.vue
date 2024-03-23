<template>
    <div class="main_container_navbar" v-if="props.isVisible == true" ref="main_container_ref">
        <img src="../assets/logo.png" alt="logo-nav" id="logo">
        <div class="options_container">
            <p @click="toggleSection('accounts')"><i class="fa-solid fa-wallet"></i>Cuentas</p>
            <p @click="toggleSection('cards')"><i class="fa-regular fa-credit-card"></i>Tarjetas</p>
            <p @click="toggleSection('transactions')"><i class="fa-solid fa-arrows-left-right-to-line"></i>Transacciones</p>
            <p @click="toggleSection('loans')"><i class="fa-solid fa-hand-holding-dollar"></i>Prestamos</p>
        </div>
        <button @click="logOut" >Salir<i class="fa-solid fa-door-open"></i></button>
    </div>    
</template>

<script setup>
import { defineProps, ref,defineEmits } from 'vue';
import { onClickOutside } from '@vueuse/core'
import AuthService from '../services/AuthServices'
import 'animate.css';

const main_container_ref = ref(null)

const emit = defineEmits(['close-navbar','toggle-section'])
const props =defineProps(
    {
        isVisible:Boolean
    }
)
const toggleSection = (section) => {
    emit('toggle-section', section);
}


onClickOutside(main_container_ref,()=>{
    emit('close-navbar')
})

const logOut = ()=>{
    AuthService.logout()
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.main_container_navbar{
animation: slideInLeft 0.1s; 
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(244, 244, 244);
    position: absolute;
    z-index:10;
}
#logo{
    width: 60%;
    margin-top: 70px;
    margin-right: 10%;
}
.options_container{
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 16px;
    width: 90%;
    margin-top: 70px;
    }
p{
    margin-left: 5%;
}
button{
    width: 70%;
    height: 45px;
    border: none;
    border-radius: 3px;
    background-color:#226068;
    color: white;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
button i{
    color: white;
}
button:hover{
  background-color:#49676b;
  cursor: pointer;
  transition: .4s all ease;  
}
i{
    color: #226068;
    margin-right: 20px;
}
@media (min-width:1000px){
    .main_container_navbar{
        width: 320px;
        position: relative;
    }
    .options_container{
        width: 100%;
        gap: 20px;
    }
    p{
        width: 100%;
        margin: 0;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
    p:hover{
        background-color: #41abb7;
        color: white;
        transition: .4s all ease;
        cursor: pointer;
    }
    button{
        margin-top: 90px;
        height: 45px;
    }
}
</style>