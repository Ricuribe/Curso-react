import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from "./FirstApp.jsx";
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";
// import {HelloWorldApp} from './HelloWorldApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstApp title='Tituloo' />*/}
        <CounterApp value={20}/>
    </React.StrictMode>
)