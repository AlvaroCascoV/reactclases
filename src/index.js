import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Contador from './Components/Contador'
import reportWebVitals from './reportWebVitals';
// import DibujosComplejosRender from './Components/DibujosComplejosRender';
// import PadreDeportes from './Components/PadreDeportes';
// import DibujosComplejos from './Components/DibujosComplejos';
// import PadreNumeros from './Components/PadreNumeros';
import Comics from './Components/Comics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contador inicio="4"/>
    <Contador inicio="9"/> */}
    {/* <DibujosComplejos/> */}
    {/* <DibujosComplejosRender/> */}
    {/* <PadreDeportes/> */}
    {/* <PadreNumeros/> */}
    <Comics/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
