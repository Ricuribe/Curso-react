import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";


describe('Pruebas en componente CounterApp', ()=> {

    const initialValue = 10;

    test('La app debe coincidir con el snapshot', () => {
        const {container} = render(< CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();

    });

    test('El valor inicial debe ser igual a 100', () => {
        render( <CounterApp value={100} /> );

        expect(screen.getByText(100).innerHTML).toContain( '100' );

    });

    test('debe incremetar con el botón +1', ()=> {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('11')).toBeTruthy();


    });

    test('debe decrementar con el botón -1', ()=> {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText('9')).toBeTruthy();


    });

    test('debe de funcionar el boton de reset', ()=>{
        render( <CounterApp value={355} /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        //fireEvent.click( screen.getByText('Reset') );
        screen.getByRole('button', {name: 'btn-reset'});

        expect(screen.getByText(355)).toBeTruthy();
        //expect(screen.getByText(355)).toBeTruthy();

    });

});