<template>
    <div class="accounts_movements_main_container" v-if="props.isVisible == true" ref="main_cont_ref">
        <div class="data_container">
            <p id="account_number">{{props.number}}</p>
            <i class="fa-solid fa-wallet"></i>
            <p id="amount">${{props.balance.toLocaleString()}}</p>
            <p id="account_type">C.A</p>
            <p id="date">{{props.creationDate}}</p>
            <i class="fa-solid fa-caret-down" @click="showDeleteOption =!showDeleteOption"></i>
            <div id="delete_account" v-if="showDeleteOption == true" ref="delete_container" @click="deleteAccount(props.number)">
            <p>Eliminar cuenta</p>
        </div>
        </div>

        <table>
            <thead>
            <tr>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Hora</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="transaction of props.transactionsArray" :key="transaction.amount">
                <td>{{transaction.type}}</td>
                <td>${{transaction.amount.toLocaleString()}}</td>
                <td>{{transaction.date.slice(0,-16)}}</td>
                <td>{{transaction.date.slice(11,-7)}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps,defineEmits,ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import Swal from 'sweetalert2'
import 'animate.css';
import AccountService from '@/services/AccountService';

const emit = defineEmits(['close-movements'])

const props = defineProps(
    {
        isVisible:Boolean,
        number:String,
        balance:String,
        creationDate:String,
        transactionsArray:[]
    }
)
const showDeleteOption = ref(false)
const delete_container = ref(null)
const main_cont_ref = ref(null)
onClickOutside(delete_container,()=>{
    showDeleteOption.value=true
})
onClickOutside(main_cont_ref,()=>{
    emit('close-movements')
})

const deleteAccount = (id)=>{
Swal.fire(
    {
        title:'Eliminar cuenta',
        text:"Esta seguro que desea eliminar esta cuenta?",
        icon:'question',
        showDenyButton:true,
        showConfirmButton:true
    }
)
.then(result=>{
    if(result.isDenied){
        Swal.fire('Cancelado','La operacion fue cancelada','info')
    }else{
        if(result.isConfirmed){
            AccountService.deleteAccount(id)
            Swal.fire('Account succesfully deleted','','success')
                setTimeout(()=>{
                window.location.reload()
                },1500)
        }
    }
})
}
</script>

<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}
.accounts_movements_main_container{
    animation:slideInRight 0.1s;
    min-height: 70%;
    position: fixed;
    top: 0;
    right: 0px;
    width: 100%;
    background-color: #114a51;
    display: flex;
    flex-direction: column;
    z-index: 4;
    user-select: none;
}

.fa-caret-down{
    position: absolute;
    right: 20px;
    bottom: 50px;
    font-size: 20px;
    color: white;
}
#delete_account{
    position: absolute;
    right: 20px;
    bottom: 10px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 4px;
    color: black;
    font-size: 14px;
    cursor: pointer;
}
.data_container{
    width:100%;
    height: 130px;
    margin-top: 30px;
    position: relative;
    background-color: #ffffff;
    color: #114a51
}
#account_number{
text-align: center;
margin-top: 17px;
margin-bottom: 10px;
}

#amount{
    text-align: center;
    font-size: 30px;
    margin-bottom: 12px;
    font-weight: bold;
}
#account_type{
    color: #114a51;
    font-size: 40px;
    position: absolute;
    top: 5px;
    right: 15px;
    font-weight: bold;
}
.fa-wallet{
    font-size: 50px;
    position: absolute;
    left: 20px;
    top: 38px;
}
#date{
    text-align: center;
    font-size: 14px;
}
/* TABLA */
table{
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
}
td{
        color: white;
        text-align: center;
        border: none;
        border-bottom: 1px solid white;
        padding: 10px;
        font-size: 13px;
}
tr:hover{
    background-color: #f1f1f1;
    transition: .6s all ease;
    cursor: pointer;
    }
th{
    border: none;
    padding: 10px;
    color: white;
    border-bottom: 1px solid white;
}
@media (min-width:1000px){
.accounts_movements_main_container{
    width:70%;
    border-radius:20px;
    background-color: white;
    box-shadow: -1px 1px 8px 0px rgba(180, 180, 180, 0.75);

}   
.data_container{
    width:100%;
    height: 130px;
    margin-top: 30px;
    position: relative;
    background-color: #12B1C7;
    color: white;
}
.fa-wallet{
    left: 30%;
}
#account_type{
    right: 30%;
    top: 40px;
}
#x:hover{
    color: #12B1C7;
    cursor: pointer;
}
.fa-caret-down{
    position: absolute;
    top: 20px;
    font-size: 22px;
    right: 40px;
}
.fa-caret-down:hover{
    color: grey;
}
#delete_account:hover{
    color: grey;
}
#delete_account{
    top: 45px;
    right: 45px;
    height: 38px;
}
td,tr,th{
    color: black;
}
td,th{
    border-bottom: 1px solid black;
}
}
</style>