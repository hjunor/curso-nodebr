const { getPeople } = require('./service');

Array.prototype.myReduce = function( callback , value){
    let final = typeof value !== undefined ? value : this[0];
    let index = typeof value !== undefined ? 0 : 1 ;
    for( index ; index  <= this.length -1 ; index++){
          final = final + callback(value,this[index], this);
    }

    return final;
}

async function main(){
    try {
        const { results } = await getPeople(`a`);
        
        const wheight = results.map((peoples) => {
          
              return parseInt(peoples.mass)
            
        }).filter((people ) => {
            
            return people > 0;
        
        })

        console.log(wheight);
        const mass = wheight.reduce((mass, accumulator)=>{
           
          return mass + accumulator ;
         }, 0) 

         const massTwo = wheight.myReduce((mass, accumulator) =>{
             return mass + accumulator;
         }, 0)
        console.log('memu reduce ', massTwo)
        console.log(mass);
        
    } catch (error) {
        console.log('ERRO');
    }
}

main();