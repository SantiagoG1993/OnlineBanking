const API_URL = 'http://localhost:8080/api/';

const AccountService ={

    createAccount(){
        fetch(`${API_URL}clients/current/accounts`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('error creating account')
            }else{
                return res
            }
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    },
    deleteAccount(number){
        fetch(`${API_URL}account/delete?number=${number}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('error creating account')
            }else{
                return res
            }
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

}
export default AccountService;