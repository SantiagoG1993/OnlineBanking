<template>
    <div class="add_card_main_container" v-if="props.isVisible == true" ref="container">
        <h1>Add new card</h1>
        <form action="">
            <select name="" id="">
            <option value="">PLATINUM</option>
            <option value="">TITANIUM</option>
            <option value="">GOLD</option>
        </select>
        <select name="" id="">
            <option value="">DEBIT</option>
            <option value="">CREDIT</option>
        </select>
            <button>Confirm</button>
        </form>
    </div>
</template>

<script setup>
import { ref,defineProps,defineEmits} from 'vue';
import { onClickOutside } from '@vueuse/core';
import 'animate.css';

const container = ref(null)
const emit = defineEmits(
    ['close-add-form']
)

onClickOutside(container,()=>{
    emit('close-add-form')
})

const props = defineProps(
    {
        isVisible:Boolean
    }
)


</script>

<style scoped>
.add_card_main_container{
    animation: slideInDown 0.3s;
    position: absolute;
    align-self: center;
    width: 80%;
    height: 45vh;
    background-color: rgb(220, 220, 220);
    border-radius: 10px;
    box-shadow: 2px 1px 6px 0px rgb(152, 152, 152);
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 20px;
    color: grey;
    margin-top: 20px;
}
form{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 30px;
    margin-top: 15px;
}
select{
    width: 70%;
    height: 45px;
    padding-left: 10px;
    border: none;
    border-radius: 4px;
}
button{
    width: 40%;
    height: 40px;
    border: none;
    background-color: #12b1c7;
    align-self: flex-end;
    color: white;
    border-radius: 4px;
    margin-right: 10%;
}
@media (min-width:1000px){
.add_card_main_container{
    width: 40%;
    top: 20%;
} 
button:hover{
    cursor: pointer;
    background-color: #5a979f;
} 
}

</style>