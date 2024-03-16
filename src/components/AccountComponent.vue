<template>
    <div class="main_container_account">
        <p id="account_type">C.A</p>
        <div class="data1_container">
            <p id="account_number_title">Numero de cuenta</p>
            <p id="account_number">VIN-00222556</p>
            <p id="amount_title">Saldo</p>
            <p id="amount_number">$1.054.520.00</p>
        </div>
        <div class="data2_container">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-caret-down" @click="showDeleteOption =!showDeleteOption"></i>
            <p id="created_title">Creada el</p>
            <p id="date">15/03/2024</p>
        </div>
        <div id="delete_account" v-if="showDeleteOption == true" ref="delete_container">
            <p>Eliminar cuenta</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const delete_container = ref(null)
const showDeleteOption = ref(false)

onClickOutside(delete_container,()=>{
    showDeleteOption.value=false
})
</script>

<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}
.main_container_account{
    user-select: none;
    width: 90%;
    display: flex;
    height: 130px;
    border: 2px solid rgb(203, 202, 202);
    border-radius: 10px;
    position: relative;
    justify-content: space-between;
}
#account_type{
    color: #0077876d;
    margin-top: 10px;
    margin-left: 15px;
    font-size: 30px;
}
.data1_container{
/*     border: 1px solid red; */
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
#account_number_title{
    font-size: 14px;
}
#account_number{
    color: grey;
    font-size: 14px;
}
#amount_title{
    font-size: 20px;
}
#amount_number{
    font-size: 20px;
    color: grey;    
}
.data2_container{
    width: 25%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.fa-caret-down{
    display: none;
}
#created_title{
    font-size: 12px;
    position: absolute;
    bottom: 20%;
    right: 20%;
}
#date{
    font-size: 12px;
    color: gray;
    position: absolute;
    bottom: 10%;
    right: 20%;
}
.fa-bars{
    position: absolute;
    right: 20%;
    top: 10%;
    font-size: 25px;
    color: #007787;
}
.fa-bars:active{
  color: #4f9da7;  
}
@media (min-width:1000px){
    .main_container_account{
    height: 100px;
}
.main_container_account:hover{
    cursor: pointer;
    box-shadow: 1px 1px 4px 0px rgb(217, 217, 217);
}
.data1_container{
    flex-direction: row;
    gap: 15px;
}
.data2_container{
    justify-content: center;
    align-items: center;
    background-color: rgb(236, 236, 236);
    border-radius: 50px 0px 0px 50px;
}
.fa-bars{
    display: none;
}
#created_title{
    font-size: 16px;
    position: unset;
}
#date{
    font-size: 14px;
    position: unset;
}
#account_number_title{
    font-size: 20px;
}
#account_number{
    color: grey;
    font-size: 14px;
}
#amount_title{
    font-size: 20px;
}
#amount_number{
    font-size: 22px;
}
.fa-caret-down{
    display: unset;
    position: absolute;
    top: 10px;
    font-size: 22px;
    right: 20px;
}
.fa-caret-down:hover{
    color: grey;
}
#delete_account{
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    position: absolute;
    right: 35px;
    top: 32px;
    font-size: 14px;
    box-shadow: 1px 1px 4px 0px rgb(217, 217, 217);
}
#delete_account:hover{
    color: grey;
}
}
</style>