import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";

describe('Pruebas en 08-imp-exp', ()=>{

/*   test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero)
       expect( hero ).toEqual({id: 1, name:'Batman', owner: 'DC' })

   });

    test('getHeroeById debe retornar undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)
        expect( hero ).toBeFalsy();

    });*/

    test('getHeroesByOwner debe retornar al menos 3 heres de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)
        expect( heroes[0].owner ).toEqual('DC')
        expect( heroes.length).toEqual(3)

    });
    test('getHeroesByOwner debe retornar al menos 2 heres de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)
        expect( heroes[0].owner ).toEqual('Marvel')
        expect( heroes.length).toEqual(2)
    });

});