const { get } = require('axios');

const URL = `https://swapi.dev/api/people`

async function getPeople(name){
    const url = `${URL}/?search=${name}&format=json`;
    const res = await get(url)

    return res.data.results.map(mapPeople)
} 
function mapPeople(item){
    return {
        name: item.name,
        mass: item.mass, 
    }
}
module.exports = { getPeople }
