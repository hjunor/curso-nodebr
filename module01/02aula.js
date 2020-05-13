/*
Script asincrono usando Callbacks
0 Obter um usuário.
1 presiso obter o numero de telefone a partir do seu id.
2 obter o endereço do usuário pelo id.
*/

// import module is nodeJs


const util = require('util');

const getAdressAsync = util.promisify( getAdress);

function getUser (callback){
    return new Promise( function resolvePromise (resolve, reject){
        setTimeout (function(){
        return resolve({
            id: 1,
            name: 'Brian',
            date: new Date()
        })
    }, 1000) 
    })
  
}

function getPhone(idUser, callback){
    return new Promise( function resolvePromise (resolve, reject){

        setTimeout(function(){
            return resolve({
                number: '3899967771',
                ddd: 38
            })
        }, 2000)
    })
}

function getAdress(idUser, callback){
    return new Promise( function resolvePromise (resolve, reject){

        setTimeout(()=>{
            return resolve({
                strit: 'Valdita',
                number: 45
                })
            
        }, 1000)
    })

}

const stateUser = getUser();

stateUser
    .then((user) =>{
     
      return getPhone(user.id)
       .then((phone)=>{

            return getAdress(user.id)
            .then((adress)=>{
                console.log(

                    { 
                        user:{
                            name : user.name,
                            id: user.id,
                        },
                        adress:{
                            strit:adress.strit,
                            number : adress.number
                        },
                        phone:{ 
                            ddd: phone.ddd,
                            munber: phone.number}
                        })
                    })
                
            })
    })
    .catch( function (erro){
        console.error('STATUS ERROR',error)
    })


