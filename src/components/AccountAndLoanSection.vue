<template>
    <div class="account_loan_container_main" v-if="props.isVisible == true">
        <h2>Cuentas</h2>
        <div class="accounts_container">
            <AccountComponent v-for="account of accounts"
            :key="account.number"
            :number="account.number"
            :balance="account.balance"
            :date="account.creationDate"
            :transactionsArray="account.transactions"
            />
        
            <button id="add_btn" @click="createAccount">Add new account</button>
        </div>
        <h2>Prestamos</h2>
        <div class="loans_container">
            <LoanComponent v-for="loan of loans" 
            :key="loan.id"
            :name="loan.name"
            :amount="loan.amount"
            :id="loan.id"
            :payments="loan.payments" />

        </div>
    </div>
</template>

<script setup>
import AccountComponent from './AccountComponent.vue'
import LoanComponent from './LoanComponent.vue'
import AccountService from '../services/AccountService'
import { defineProps,ref,onMounted } from 'vue';
import Swal from 'sweetalert2'


const accounts = ref([])
const loans = ref([])

const props = defineProps(
    {
        isVisible : Boolean
    }
)
const createAccount= ()=>{
    Swal.fire(
        {
            title:'Create new account?',
            icon:'question',
            showDenyButton:true
        }
    )
    .then(result=>{
        if(result.isDenied){
            Swal.fire('Cancelled','','info')
        }else{
            if(result.isConfirmed){
                AccountService.createAccount()
                Swal.fire('Account succesfully created','','success')
                setTimeout(()=>{
                window.location.reload()
                },1500)
            }
        }
    })

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
        accounts.value = data.accounts.filter(a=>a.deleted == false)
        loans.value = data.clientLoans
        })
        .catch(err=>console.log(err))
    }
)
</script>

<style scoped>

.account_loan_container_main{
    user-select: none;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}
h2{
    margin-top: 20px;
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