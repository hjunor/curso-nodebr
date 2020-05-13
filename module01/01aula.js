/*
Script asincrono usando Callbacks
0 Obter um usuário.
1 presiso obter o numero de telefone a partir do seu id.
2 obter o endereço do usuário pelo id.
*/

function getUser (callback){
    setTimeout (function(){
        return callback(null, {
            id: 1,
            name: 'Brian',
            date: new Date()
        })
    }, 1000)
}

function getPhone(idUser, callback){
    setTimeout(function(){
        return callback(null, {
            number: '3899967771',
            ddd: 38
        })
    }, 2000)

}

function getAdress(IdUser, callback){

    setTimeout(()=>{
        return callback(null,{
               strit: 'Valdita',
               number: 45
            })
        
    }, 2000)


}

getUser(function resolverUser(erro, user){
    // null || '' || 0 === false
    if(erro){
        console.erro('Erro is User',erro);
        return;
    }

    getPhone( user.id, function resolverPhone( erro1, phone){
        if(erro1){
            console.erro('Erro is Phone',erro1);
            return;
        }

        getAdress(user.id , function resolverAdress ( erro2, adress, lits){
            if(erro2){
                console.erro('Erro is Adress',erro2);
                return;
            }  
        

        console.log(

        {
          name : user.name,
          adress:{
          strit:adress.strit,
          number : adress.number
          },
          phone:{ 
            ddd: phone.ddd,
            munber: phone.number}
        }
            )
        })
    })
});


//const phone  = getPhone();


//console.log('telefone',phone)