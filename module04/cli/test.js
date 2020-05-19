const {
    deepEqual,
    ok,
} = require('assert');

const dataBase = require('./database');

const DEFAULT_ITEM_REGISTER = {
    name: 'Flash',
    power:'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {

    before ( async () =>{
         await dataBase.register(DEFAULT_ITEM_REGISTER)
    })

    it('Deve pesquisar um Heroi usando arquivo', async ()=>{

        const expected = DEFAULT_ITEM_REGISTER;
        const [result] = await dataBase.list( expected.id)
        ok(result, expected);
        deepEqual(result, expected);
    })

    it('Deve cadastrar um Heroi, usando arquivos', async () =>{
        
        const expected = DEFAULT_ITEM_REGISTER;
        const result =  await dataBase.register(DEFAULT_ITEM_REGISTER);
        const [current] = await dataBase.list(DEFAULT_ITEM_REGISTER.id)

        ok(current, expected)
    })

    it('Dever remover um heroi por id', async () =>{

        const expected = true;
        const result = await dataBase.remove(DEFAULT_ITEM_REGISTER);
        deepEqual(expected, result)

    })
})