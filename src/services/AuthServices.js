import router from '../router/index'
const API_URL = 'http://localhost:8080/api/';

const AuthService = {

    login(dni,password){
        fetch(`${API_URL}login?dni=${dni}&password=${password}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                
                throw new Error('Error Login')
            }
            else{
                return res
            }
        })
        .then(data=>{console.log(data);
            router.push('/index')
        })
        .catch(err=>console.log(err+'entra aca'))
    },

    logout(){
        fetch(`${API_URL}logout`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('Error Loggin out')
            }
            else{
                return res
            }
        })
        .then(data=>{console.log(data);
            router.push('/')})
        .catch(err=>console.log(err))
    },

    getAuthCLient(){
        fetch(`${API_URL}clients/auth`,{method:'GET',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('Error fetching data')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{console.log(data)
        })
        .catch(err=>console.log(err))
    },
    registerClient(dni,password){
        const options = {
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    dni:dni,
                    password:password
                }
            )
        }
        fetch(`${API_URL}clients`,options)
        .then(res=>{
            if(!res.ok){
                throw new Error('error creating account')
            }else return res
        })
        .then(data=>{
            console.log(data)
            this.login(dni,password)
        })
        .catch(err=>console.log(err))
    }
}
export default AuthService ;