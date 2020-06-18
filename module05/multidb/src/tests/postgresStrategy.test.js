const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());
const HEROI_HEROI_CADASTRAR = { nome: 'Gavião Negro', poder: 'flexas' };
var result;
async function cad() {
  result = await context.create(HEROI_HEROI_CADASTRAR);
}

// describe('Postgres Strategy', function () {
//   this.timeout(Infinity);
//   it('PostgresSQL Connection', async function () {
//     const result = await context.isConnected();

//     assert.equal(result, undefined);
//     console.log(result);
//   });
// });
cad();
console.log(result);
