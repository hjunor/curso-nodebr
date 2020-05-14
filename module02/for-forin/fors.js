//for forin forof
const service = require('./service');

async function main(){
    try {
        const result =  await service.getPeople('a');
        const names = [];
        console.time('for')
        
        for( let i = 0; i<= result.results.length -1; i++){
            const people = result.results[i];
            names.push(people.name)

        }

        console.timeEnd('for')

        console.time('forin')

        for(let i in result.results){
            const people = result.results[i];
            names.push(people.name)
        }
        console.timeEnd('forin')

        console.time('forof')

        for( pessoas of result.results){
            names.push(pessoas.name)
        }

        console.timeEnd('forof')



        console.log(names);

    } catch (error) {
        console.log('erro intermo', error)
    }
}


main()