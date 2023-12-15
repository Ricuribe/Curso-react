import {usContext} from "../../src/base-pruebas/06-deses-obj.js";

describe('Prueba del archivo 06-deses-obj', () => {
   test('El usContext debe retornar un objeto', ()=>{
      const usuario = {
        clave: 'Ironman',
        nombre: 'Tony',
        edad: 42,
      };
      const eltipo = usContext(usuario);
      expect( eltipo ).toEqual({
          anios: usuario.edad,
          latlng: {
              lat: 14.1232,
              lng: -12.3232
          },
          nombreClave: usuario.clave
      });
   });
});