<template>
    <div class="loan_form_main_container">
        <form action="" @submit.prevent="handleRequestLoan">
            <label for="">Tipo de prestamo
                <select name="" id="" v-model="loanSelected">
                    <option :value="loan.name"  v-for="loan of loans" :key="loan">{{loan.name}}</option>

                </select>
            </label>
            <label for="">Cuenta destino
                <select name="" id="" v-model="selectedDestinyAccount">
                    <option :value="account" v-for="account of accounts" :key="account">{{account}}</option>
                </select>
                <label for="">Monto
                    <input type="number" class="monto" v-model="amount">
                </label>
                <label for="">Cantidad de cuotas
                    <select name="" id="cuotas" v-model="paymentsSelected">
                        <option :value="payment" v-for="payment of loanPaymentsFilter" :key="payment">{{payment}}</option>

                    </select>
                </label>
            </label>
            <button id="confirm_btn">Solicitar</button>
        </form>
    </div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import LoanService from '../services/LoanService'
import Swal from 'sweetalert2'


const loanSelected = ref('')
const paymentsSelected = ref(0)
const selectedDestinyAccount = ref('')
const amount = ref(0)
const loans = ref([])
const accounts = ref([])


const loanPaymentsFilter = computed(() => {
    const selectedLoan = loans.value.find(loan => loan.name === loanSelected.value);
    return selectedLoan ? selectedLoan.payments : [];
});

const handleRequestLoan = ()=>{
                        const ss = {
                    originAccount:selectedDestinyAccount.value,
                    name:loanSelected.value,
                    amount:amount.value,
                    payments:paymentsSelected.value
                }
    console.log(ss)
    Swal.fire(
        {
            title:'Solicitar prestamo',
            text:'Desea solicitar el siguiente prestamo?',
            icon:'question',
            showDenyButton:true,
            showConfirmButton:true
        }
    )
    .then(result=>{
        if(result.isDenied){
            Swal.fire('Cancelado','La operacion ha sido cancelada','info')
        }else{
            if(result.isConfirmed){
                    const data = {
                    originAccount:selectedDestinyAccount.value,
                    name:loanSelected.value,
                    amount:amount.value,
                    payments:paymentsSelected.value
                }
                LoanService.requestLoan(data)
                Swal.fire('Prestamo solicitado correctamente','','success')
                setTimeout(()=>{
                    window.location.reload()
                },1500)
            }
        }
    })

}

onMounted(()=>{
    //FETCH LOANS//////////////////////////////
            fetch(`http://localhost:8080/api/loans`,{method:'GET',credentials:'include'})
            .then(res=>{
                if(!res.ok){
                    throw new Error('Error fetching loans')
                }else{
                    return res.json()
                }
            })
            .then(data=> {
                console.log(data)
                loans.value  = data
            })
            .catch(err=>console.log(err))
//FETCH ACCOUNTS//////////////////////////////
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
        }
        )
</script>

<style scoped>
.loan_form_main_container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
label{
    gap: 15px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
}
select{
    height: 45px;
    background-color: rgb(232, 232, 232);
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding-left: 20px;
    
}
form{
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    user-select: none;
    z-index: 2;

}
.monto{
    width: 40%;
    height: 45px;
}
#cuotas{
    width: 20%;
}
#confirm_btn{
    width: 50%;
    height: 40px;
    background-color: #12B1C7;
    align-self: end;
    margin-top: 15px;
    border: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
}
#confirm_btn:hover{
    background-color: #528e96;
    cursor: pointer;
}
#confirm_btn:active{
    background-color: #528e96;    
}
@media (min-width:1000px){
    .loan_form_main_container{
        width: 40%;
    }

}
</style>