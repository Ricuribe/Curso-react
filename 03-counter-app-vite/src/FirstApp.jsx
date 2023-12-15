// <> = Componente padre
//React no puede devolver objetos

import PropTypes from "prop-types";
const Mensaje = () => {
    return 'holaaaa'
}
export const FirstApp = ( {title, subTitle, name} ) => {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title"> {title} </h1>
            {/* <code> { JSON.stringify(newMessage)} </code> */}
            <p> {subTitle} </p>
            <p> {name} </p>
        </>
);
}

FirstApp.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string
}
FirstApp.defaultProps = {
    subTitle: 'No hay subtitulo',
    name: 'Pepe'
}