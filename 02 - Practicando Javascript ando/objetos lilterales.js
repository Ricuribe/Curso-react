const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 20091238,
        lat: 14.2232,
        lng: 34.9233321,
    }
};

console.log(persona);
const persona2 = persona;
persona2.nombre = 'Peter';
//el atributo del original será reemplazado
console.log(persona)
console.log(persona2)
//CLonar objeto y no reemplazarlo
const persona3 = {...persona}