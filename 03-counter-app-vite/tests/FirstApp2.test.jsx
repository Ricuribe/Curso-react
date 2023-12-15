import {render, screen} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp.jsx";

describe('Pruebas en FirstApp', () => {

    const title = 'Hola, soy Goku'
    const subTitle = 'Redactado'

    test('debe de hacer match con el snapshot', () => {

       const {container} = render( <FirstApp title={title}/> );
       expect(container).toMatchSnapshot();

    });

    test('debe mostrar el mensaje "Hola, soy Goku" ', () => {

        render( <FirstApp title={title} />);
        screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    });

    test('debe de mostrar el titulo en un h1', ()=>{
       render( <FirstApp title={title}/> );
       expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

    });

    test('debe mostrar el subtitulo enviado por props', () => {
        render( <FirstApp title={title} subTitle={subTitle} /> );

        expect(screen.getAllByText(subTitle).length ).toBe(1)

    });

});