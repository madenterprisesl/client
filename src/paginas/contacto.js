//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de la Cabecera del Comercio Electrónico.
import Cabecera from '../componentes/cabecera.js';
//-- Importación del Pie de Página del Comercio Electrónico.
import PiePagina from '../componentes/piepagina.js';
//-- Importación de la imagen de contacto.
import ContactoImg from '../images/contacto.png';

function Contacto() {
    return(
        <div>
            <Cabecera/>
            <p className='fondoCont'>
                <h2 className='contacto'>Para más información....</h2>
                <br/>
                <p className='contacto' id='datosEmail'>Escríbenos al email: 
                    <span className='contacto' id='email'>shop.mad@yahoo.com</span>
                </p>
                <img src={ContactoImg} alt='contactoImg' id='contactoImg'/>
            </p>
            <br/>
            <br/>
            <br/>
            <PiePagina/>
        </div>
    );
}

export default Contacto;