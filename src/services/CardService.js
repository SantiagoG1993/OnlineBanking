const API_URL = 'http://localhost:8080/api/';

const CardServices = {

    createCard(cardColor,cardType){
        fetch(`${API_URL}clients/current/cards?cardColor=${cardColor}&cardType=${cardType}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('Error creating card')
            }else{
                if(res.ok){
                    return res
                }
            }
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    },

    deleteCard(number){
        fetch(`${API_URL}card/delete?number=${number}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if (!res.ok) {
                throw new Error('Error deleting card')
            }else{
                if(res.ok){
                    return res
                }
            }
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

    }

}
export default CardServices