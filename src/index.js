//-- TFG de Alejandro Fernández Pérez: Parte FrontEnd.

//-- Importación de dependencias React para la parte FrontEnd.
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
//-- Importación de los estilos CSS del FrontEnd.
import './index.css';
//-- Importación del inicio del Comercio Electrónico.
import Ecommerce from './ecommerce.js';
//-- Importación de dependencias y funciones para posicionar mejor el Comercio Electrónico en Google.
import reportWebVitals from './reportWebVitals';

//-- Punto de entrada a la renderización del Comercio Electrónico en el Navegador.
const madshop = ReactDOM.createRoot(document.getElementById('mainMADshop'));
madshop.render(<StrictMode><Ecommerce/></StrictMode>);

//-- Para dar publicidad en Google sobre el Comercio Electrónico y lo posicione mejor.
reportWebVitals();
