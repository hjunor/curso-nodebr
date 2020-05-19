const { readFile , writeFile} = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
    constructor(){
        this.NAME_FILE = 'heros.json'
    }
    async getFile(){
        //const file = require('./heros.json')
       const file = await readFileAsync(this.NAME_FILE, 'utf8');
        return JSON.parse(file.toString())
    }
    async postFile(data){
        await writeFileAsync(this.NAME_FILE, JSON.toString(data));
        return true;
    }
    async register(hero){
        const data = await this.getFile();
        const id = hero.id <= 2 ? hero.id : Date.now();
        const heroWithID = {
            id,
            ...hero
        }

        const result = await this.postFile([...data, heroWithID]);

        return result;
    }
    async list(id){
        const data = await this.getFile()
        const dataFilter =  data.filter( item =>(id ? item.id === id : true));
        return dataFilter;
    }
    async remove(id){
        if(!id){
            await this.postFile([]) 
            return true;
        }
        const data = await this.getFile();
        const index = data.findIndex( item => item.id === parseInt(id));

        if(!index === -1){
            throw Error('User not found or not existing');
        }
        data.splice(index, 1);

        await this.postFile(data);

        return true;

    }
}

module.exports = new Database();