const assert = require('assert');

const { getPeople } = require('./services')
const nock = require('nock');

describe('Star wars Teste', function (){
        this.beforeEach(()=>{
            const res = {
                
                    count: 1,
                    next: null,
                    previous: null,
                    results: [{
                        name: 'R2-D2',
                        height: '96',
                        mass: '32',
                        hair_color: 'n/a',
                        skin_color: 'white, blue',
                        eye_color: 'red',
                        birth_year: '33BBY',
                        gender: 'n/a',
                        homeworld: 'http://swapi.dev/api/planets/8/',
                        vehicles: [],
                        starships: [],
                        created: '2014-12-10T15:11:50.376000Z',
                        edited: '2014-12-20T21:17:50.311000Z',
                        url: 'http://swapi.dev/api/people/3/'
                    } ]  
            }

            nock('http://swapi.dev/api/people')
            .get('/?search=r2-d2&format=json')
            .reply(200, res)
        })


    it('Deve buscar o R2-D2 com o formato correto', async () => {
        const expected = [{name: 'R2-D2', mass: '32'}];
        const nameBase = `r2-D2`;

        const result = await getPeople(nameBase);

        assert.deepEqual(result, expected)
    });

})
