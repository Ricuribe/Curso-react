import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones.js'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()
        console.log(user);

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () =>{

        const name = 'Pepe'
        // const name2 = getUsuarioActivo(name)
        const user = getUsuarioActivo(name)

        // expect(name2.username).toEqual(name)

        expect(user).toStrictEqual({
           uid: 'ABC567',
           username: name
        });
    });

});