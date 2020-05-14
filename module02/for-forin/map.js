//map Array prototype
const service = require('./service');

Array.prototype.myMap = function(callback){
    const newArray = []

    for( let index = 0 ; index <=this.length -1; index++){
        const result =  callback (this[index], index);
        newArray.push(result);
    }

    return newArray;
}

async function main(){
    try {
        const names = [];
        const result = await service.getPeople(`a`);

        result.results.forEach(result => {
            names.push(result.name)
        });

        const name = result.results.map((people) => people.name )

        const newNames = result.results.myMap((people) => people.name)

        console.log('names',newNames)

        // name = names

    } catch (error) {
        console.log('erro ', erro)
    }
}
main()