<template>
    <div class="transactionform_main_container">
        <div class="propio_tercero_container">
            <p  id="propio" @click="handleClick('propio')">Propio</p>
            <p id="tercero" @click="handleClick('tercero')">Tercero</p>
        </div>
        <hr>
        <form action="" @submit.prevent="handleTransfer">
            <label for="">Cuenta de origen
                <select name="" id="" v-model="originAccountSelected">
                    <option :value="account" v-for="account of accounts" :key="account">{{account}}</option>

                </select>
            </label>
            <label for="">Cuenta destino
                <input v-if="selectedType == 'tercero'" type="text" class="input_text" v-model="destinyAccountSelected">
                <select v-else name="" id="" v-model="destinyAccountSelected">
                    <option :value="account" v-for="account of filteredAccounts" :key="account">{{account}}</option>

                </select>
            </label>
            <label for="">Monto
                <input type="number" class="input_text amount" v-model="amount">
            </label>
            <label for="">Descripcion
                <input type="text" class="input_text description" v-model="description">
            </label>
            <button id="transfer_btn" >Transferir</button>
        </form>

    </div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue';
import TransactionServices from '../services/TransactionService'
import Swal from 'sweetalert2'

const selectedType = ref('')
const accounts = ref([])
const originAccountSelected = ref('')
const destinyAccountSelected = ref('')
const amount = ref(0)
const description = ref('')

const filteredAccounts = computed(()=>{
    return accounts.value.filter(a=>a != originAccountSelected.value)
})

const handleClick = (id)=>{
    selectedType.value=id;
    if(id == 'propio'){
        const tercero = document.querySelector('#tercero')
        tercero.classList.remove('--selected')
    }else if(id == 'tercero'){
       const propio = document.querySelector('#propio')
        propio.classList.remove('--selected') 
    }
    const element = document.querySelector(`#${id}`)
    element.classList.add('--selected')
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
        accounts.value = data.accounts.filter(a=>a.deleted == false).map(a=>a.number)
        })
        .catch(err=>console.log(err))
    })

    const handleTransfer = ()=>{
        Swal.fire(
            {
                title:'Transferir a cuenta',
                text:'Esta seguro que desa transferir el dinero?',
                icon:'question',
                showConfirmButton:true,
                showDenyButton:true,
            }
        )
        .then(result=>{
            if(result.isDenied){
                Swal.fire('Cancelado','La operacion ha sido cancelada','info')
            }else{
                if(result.isConfirmed){
                            const data = {
            originAccountNumber:originAccountSelected.value,
            destinationAccountNumber:destinyAccountSelected.value,
            amount:amount.value,
            description:description.value
            }
            TransactionServices.transfer(data)
            Swal.fire('Transferencia realizada correctamente','','success')
            setTimeout(()=>{
                window.location.reload()
            },2000)
                }
            }
        })
    } 
</script>

<style scoped>
.transactionform_main_container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.propio_tercero_container{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}
.propio_tercero_container p{
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
        cursor: pointer;

}

.--selected{
    color: white;
    transition: .3s all ease;
    background-color: #12B1C7;
}

hr{
    margin-top: 10px;
    color: #12B1C7;
    width: 90%;
}
form{
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    user-select: none;
    z-index: 2
    ;
}
label{
    gap: 15px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
}
.input_text, select{
    height: 45px;
    background-color: rgb(232, 232, 232);
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding-left: 20px;
}
.input_text:focus{
    outline: none;
}
.description{
    height: 100px;
}
.amount{
    width: 40%;
}
#transfer_btn{
    width: 50%;
    height: 40px;
    background-color: #12B1C7;
    align-self: end;
    margin-top: 15px;
    border: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
    z-index: 2;
}
#transfer_btn:hover{
    background-color: #528e96;
    cursor: pointer;
}
@media (min-width:1000px){
    .transactionform_main_container{
        width: 40%;
    }
}
</style>