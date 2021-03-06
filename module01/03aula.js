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
                id : idUser ,
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
                id: idUser,
                strit: 'Valdita',
                number: 45
                })
            
        }, 1000);
    })

}
async function main(){
    try {
        console.time('medida-promise')

        const user = await getUser()

        const result = await Promise.all([
            getAdress(user.id),
            getPhone(user.id)
        ])

        const adress = result[0]
        const phone = result[1]
        
        console.log(
            { 
                user:{
                    name : user.name,
                    id: user.id,
                },
                adress:{
                    id: adress.id,
                    strit:adress.strit,
                    number : adress.number
                },
                phone:{ 
                    id: phone.id,
                    ddd: phone.ddd,
                    munber: phone.number}
                })

    console.timeEnd('medida-promise')
        
    } catch (error) {
        console.log('Erro', error )
    }
}

main()