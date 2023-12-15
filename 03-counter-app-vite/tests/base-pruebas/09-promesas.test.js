import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas', ()=>{

    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });
                done();
            });

    });

    test('getHeroeByIdAsync debe de obtener un error', (done) => {
        const id = 1000;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {

                console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`)
                done();
            });

    });

});