<template>
    <div class="loan_form_main_container">
        <form action="">
            <label for="">Tipo de prestamo
                <select name="" id="">
                    <option value="">Prestamo 1</option>
                    <option value="">Prestamo 2</option>
                    <option value="">Prestamo 3</option>
                    <option value="">Prestamo 4</option>
                </select>
            </label>
            <label for="">Cuenta destino
                <select name="" id="">
                    <option value="">Cuenta 1</option>
                    <option value="">Cuenta 2</option>
                    <option value="">Cuenta 3</option>
                    <option value="">Cuenta 4</option>
                </select>
                <label for="">Monto
                    <input type="number" class="monto">
                </label>
                <label for="">Cantidad de cuotas
                    <select name="" id="cuotas">
                        <option value="">6</option>
                        <option value="">12</option>
                        <option value="">24</option>
                        <option value="">36</option>
                        <option value="">64</option>
                    </select>
                </label>
            </label>
            <button id="confirm_btn">Solicitar</button>
        </form>
    </div>
</template>

<script setup>

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