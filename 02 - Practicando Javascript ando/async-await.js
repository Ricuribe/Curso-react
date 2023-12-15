// const getImagenPromesa = () => new Promise(resolve => resolve('https//www.aaowdujosad.com'))
// getImagenPromesa().then(console.log)

const getImagen = async () => {

    const apiKey= '289KF9k6EaPYE84dFyMOWZmR8siQj0cI';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = await data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

}
getImagen()

// Recreado codigo de Fetch API.js