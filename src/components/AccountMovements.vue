<template>
    <div class="accounts_movements_main_container" v-if="isVisible == true">
        <i id="x" @click="emit('close-movements')" class="fa-regular fa-x"></i>
        <div class="data_container">
            <p id="account_number">VIN-00005687</p>
            <i class="fa-solid fa-wallet"></i>
            <p id="amount">$1.000.005.00</p>
            <p id="account_type">C.A</p>
            <p id="date">12/02/2020</p>
            <i class="fa-solid fa-caret-down" @click="showDeleteOption =!showDeleteOption"></i>
            <div id="delete_account" v-if="showDeleteOption == true" ref="delete_container">
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
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
            <tr>
                <td>DEBITO</td>
                <td>$54.200.25</td>
                <td>12/12/24</td>
                <td>19:00:26</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps,defineEmits,ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import 'animate.css';
const emit = defineEmits(['close-movements'])

const props = defineProps(
    {
        isVisible:Boolean
    }
)
const showDeleteOption = ref(false)
const delete_container = ref(null)

onClickOutside(delete_container,()=>{
    showDeleteOption.value=true
})
</script>

<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}
.accounts_movements_main_container{
    animation:fadeIn 0.4s;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    z-index: 3;
    user-select: none;
}
#x{
    align-self: flex-end;
    margin-right: 30px;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    color: #138b9b;
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
    background-color: #12B1C7;
    color: white;
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
    color: #1491a1d8;
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
        color: black;
        text-align: center;
        border: none;
        border-bottom: 1px solid rgb(214, 214, 214);
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
    color: rgb(99, 99, 99);
    border-bottom: 1px solid black;
}
@media (min-width:1000px){
.accounts_movements_main_container{
    width: 80%;
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
}
</style>