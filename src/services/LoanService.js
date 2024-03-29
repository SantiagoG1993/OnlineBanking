const API_URL = 'http://localhost:8080/api/';

const LoanServices = {

        requestLoan(datos){
            const options = {
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(datos)
            }
            fetch(`${API_URL}loans`,options)
            .then(res=>{
                if(!res.ok){
                    console.log(res)
                    throw new Error('Error requesting loan')
                }else{
                    return res.json()
                }
            })
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        }
}

export default LoanServices