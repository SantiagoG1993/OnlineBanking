<template>
    <div class="card_container">
        <img src="../assets/logo.png" alt="logo_card" id="logo">
        <div id="card_type_container">
            <p id="type_card">DEBITO</p>
            <p id="color_card">GOLD</p>
        </div>
        <p id="card_number">4508 1225 6629 4348</p>
        <p id="valido" class="desde" >VALIDO DESDE</p>
        <p id="valid_number" class="num_desde">05/20</p>
        <p id="valido" class="hasta">VALIDO HASTA</p>
        <p id="valid_number" class="num_hasta">05/24</p>
        <p id="user_name">SANTIAGO GAMARRA</p>
        <div id="cvv_container">
            <p id="cvv">cvv</p>
            <p id="cvv_number">332</p>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
    .card_container{
        width: 270px;
        height: 145px;
        border-radius: 8px;
        background-color: #007787;
        position: relative;
    }
    #logo{
        width: 70px;
        position: absolute;
        top: 8px;
        left: 10px;
    }
    #card_type_container{
        width: 65px;
        position: absolute;
        right: 20px;
        font-size: 14px;
        top: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }
    #card_type_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #type_card{
        color: white;
    }
    #color_card{
        color: #12B1C7;
    }
    #card_number{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 4px;
        position: absolute;
        top: 53px;
        left: 15px;
    }
    #valido{
        color: #12B1C7;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 7px;
        width: 40px;
        position: absolute;
    }
    #valid_number{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        position: absolute;
        font-size: 14px;
    }
    .num_desde{
        bottom: 40px;
        left: 55px;
    }
    .num_hasta{
        bottom: 40px;
        right: 45px;
    }
    .desde{
        bottom: 40px;
        left: 20px;        
    }
    .hasta{
        position: absolute;
        right: 90px!important;
        bottom: 40px;
    }
    #user_name{
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        position: absolute;
        bottom: 12px;
        left: 10px;
        font-size: 12px;
    }
    #cvv_container{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        bottom: 12px;
        right: 20px;
        display: flex;
        gap: 3px;
        font-size:12px;
    }
    #cvv{
        color: #12B1C7;
    }

</style>