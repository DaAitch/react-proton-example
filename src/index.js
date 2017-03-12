import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './box-sizing.css';
import './index.css';

import App from './App';

import { ProtonProvider, Proton } from 'react-proton';


const resizeObservable = observer => () => {
    const handleResize = event => {
        console.log(event, window.innerWidth);
        observer(window.innerWidth);
    };
    console.log("aksjdflksad");
    observer(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
};

const proton = new Proton();
const updateSize = () => proton.setSize(window.innerWidth)
window.addEventListener('resize', updateSize);
updateSize();

ReactDOM.render(
    <ProtonProvider
        proton={proton}
    >
        <App />
    </ProtonProvider>,
    document.getElementById('root')
);
