
const { getPeople } = require('./service');

Array.prototype.myFilter = function(callback){
    const list = [];
    for( index  in this ){
        const item = this[index]
        const result = callback( item,index, this)
        if (!result) continue;
        list.push(item);
        }
        return list;
}

async function main(){
     try {
         const { results } = await getPeople(`a`)
         const name = results.myFilter((people)=>{
             const name = people.name.toLowerCase().indexOf('lars') !== -1
             return name;
         })

         const names = results.filter((people) =>{
             const name = people.name.toLowerCase().indexOf('lars') !== -1;
             return name;
         })
         const familyLars2 = names.map(people => people.name)
         const familyLars = names.map( people => people.name);

         console.log('familía',familyLars)
         console.log('meu filter', familyLars2)
     } catch (error) {
         console.log('ERRO', error)
     }
}

main()