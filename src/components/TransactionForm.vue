<template>
    <div class="transactionform_main_container">
        <div class="propio_tercero_container">
            <p  id="propio" @click="handleClick('propio')">Propio</p>
            <p id="tercero" @click="handleClick('tercero')">Tercero</p>
        </div>
        <hr>
        <form action="">
            <label for="">Cuenta de origen
                <input v-if="selectedType == 'tercero'" type="text" class="input_text">
                <select v-else name="" id="">
                    <option value="">cuenta 1</option>
                    <option value="">cuenta 2</option>
                    <option value="">cuenta 3</option>
                </select>
            </label>
            <label for="">Cuenta destino
                <input v-if="selectedType == 'tercero'" type="text" class="input_text">
                <select v-else name="" id="">
                    <option value="">cuenta 1</option>
                    <option value="">cuenta 2</option>
                    <option value="">cuenta 3</option>
                </select>
            </label>
            <label for="">Monto
                <input type="number" class="input_text amount">
            </label>
            <label for="">Descripcion
                <input type="text" class="input_text description">
            </label>
            <button id="transfer_btn">Transferir</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedType = ref('')

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