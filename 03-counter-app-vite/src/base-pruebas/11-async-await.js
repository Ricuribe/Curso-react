

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

import {fetch} from "whatwg-fetch";

export const getImagen = async() => {

    try {
        console.log('pre api')
        const apiKey = '289KF9k6EaPYE84dFyMOWZmR8siQj0cI';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=289KF9k6EaPYE84dFyMOWZmR8siQj0cI`) ;
        const { data } = await resp.json(); 
        console.log(data)
        const { url } = data.images.original;
        console.log(url)

        return url;

    } catch (error) {
        // manejo del error
        console.log(error)
        return 'hubo un error'
    }
    
    
    
}

 getImagen();



