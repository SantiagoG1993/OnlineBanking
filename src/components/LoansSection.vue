<template>
    <div class="loans_section_main_container" v-if="props.isVisible == true  ">
        <h1>Prestamos</h1>
        <LoanForm />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#12B1C7" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,144C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import LoanForm from '../components/LoanForm.vue'
import 'animate.css';

const props = defineProps(
    {
        isVisible:Boolean
    }
)

</script>

<style scoped>
.loans_section_main_container{
    user-select: none;
    animation: fadeIn .3s ;
    width: 100%;
    height: 100vh;
}
h1{
        font-family: Arial, Helvetica, sans-serif;
        color: grey;
        text-align: center;
        font-size: 22px;
        margin-top: 20px;
}
        svg{
        position: absolute;
        bottom: 0px;
    }
@media (min-width:1000px){
    .loans_section_main_container{
        width: 80%;
    }

}
</style>