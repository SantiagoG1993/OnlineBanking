<template>
    <div class="main_container_login">
        <img src="../assets/logo.png" alt="banco_logo" class="logo_img">
        <form action="" @submit.prevent="login"> 
            <label for="dni" class="label_input">Dni
                <input type="text" class="input_text" v-model="dni">
            </label>
            <label for="password" class="label_input">Clave
                <input type="password" class="input_text" v-model="password">
            </label>
            <label v-if="registerIsVisible == true" for="password" class="label_input animate__animated animate__fadeIn">Confirmar clave
                <input type="password" class="input_text" v-model="confirmedPassword">
            </label>
            <label v-if="registerIsVisible == false" for="remember" >
                <input type="checkbox" name="remember" 
                id="remember_checkbox">
                Recordar usuario
            </label>
            <button v-if="registerIsVisible == false">Ingresar</button>
            <button v-else class="animate__animated animate__fadeInUp" @click="register">Registrarse</button>
        </form>
            <p class="p_text" v-if="registerIsVisible == false">Olvide mi contraseña</p>
            <p v-if="registerIsVisible == false" class="p_text" @click="registerIsVisible = true" >Soy cliente, generar usuario y clave</p>
            <p v-else class="p_text" @click="registerIsVisible = false" >Volver</p>   
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
  <path fill="#12B1C7" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,261.3C640,267,800,213,960,170.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>     
    </div>
</template>

<script setup>
import { ref } from 'vue';
import 'animate.css';
import Swal from 'sweetalert2'
import AuthService from '../services/AuthServices'

const registerIsVisible = ref(false)
const dni = ref('')
const password = ref('')
const confirmedPassword = ref('')

const login=()=>{
AuthService.login(dni.value,password.value)
}
const register = ()=>{
    if(password.value != confirmedPassword.value){
        Swal.fire('Password is incorrect','','error')
    }else{
        AuthService.registerClient(dni.value,password.value)
    }
}



</script>

<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 200;
    font-size: 12px;
}
.main_container_login{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
    animation: fadeIn 1s;
}
.logo_img{
    width: 200px;
    margin-top: 90px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 20px;
    gap: 30px;
}
.label_input{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 100;
    font-size: 14px;
}
.input_text{
    height: 45px;
    border: none;
    border-bottom: 1px solid grey;
    background-color: rgb(247, 247, 247);
    padding-left: 20px;
}
.input_text:focus{
    outline: none;
    background-color: rgb(234, 233, 233);
    transition: .4s all ease;
    cursor: pointer;
}
button{
    width: 170px;
    height: 45px;
    border: none;
    background-color: #12B1C7;
    color: white;
    border-radius: 6px;
    z-index: 2;
}
button:hover{
    cursor: pointer;
    background-color: #4bb9c8;
}
.p_text{
    color: #12B1C7;
    z-index: 2;
    margin-top: 10px;
    font-size: 13px;
}
.p_text:active{
        color: #0d7a88; 
        user-select: none;
}
.p_text:hover{
    cursor: pointer;
    color: #0d7a88; 
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}
@media (min-width:1000px){
    form{
        width: 400px;
    }
}
</style>