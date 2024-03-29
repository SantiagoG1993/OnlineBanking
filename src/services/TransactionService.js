const API_URL = 'http://localhost:8080/api/';

const TransactionServices = {

    transfer(datos){
        const options = {
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(datos)
        }
        fetch(`${API_URL}transaction`,options)
        .then(res=>{
            if(!res.ok){
                throw new Error("Error transfering")
            }
            else{
                return res
            }
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

}
export default TransactionServices