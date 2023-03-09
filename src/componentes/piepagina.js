//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de los Logos de Instagram y Twitter del Pie de Página del Comercio Electrónico.
import Instagram from '../images/Instagram.png';
import Twitter from '../images/Twitter.png';

//-- Exportación del Pie de Página del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function PiePagina() {
    return(
        <div>
            <table className='opciones'>
                <tr>
                    <td><a href='/contacto' className='enlaceNoBoton'>Contacto</a></td>
                </tr>
                <tr>
                    <td><a href='/sobrenosotros' className='enlaceNoBoton' id='about'>Sobre nosotros</a></td>
                    <td><p id='our'>Nuestras RR.SS:</p></td>
                </tr>
                <tr>
                    <td><a href='/empleo' className='enlaceNoBoton' id='empleo'>Trabaja con nosotros</a></td>
                    <td>
                        <a href='https://www.instagram.com/madshopsl/'><img src={Instagram} alt='Logo_Instagram' id='instagram'/></a>
                        <a href='https://twitter.com/madshopsl'><img src={Twitter} alt='Logo_Twitter' id='twitter'/></a>
                    </td>
                </tr>
            </table>
        </div>
    );
}