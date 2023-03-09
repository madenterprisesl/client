//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importamos Iconos React.
import {BiWorld} from 'react-icons/bi';
//-- Importamos el logo de MAD Shop.
import madenterpriseLOGO from '../images/madenterprise.png';

//-- Exportación de la Cabecera del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function Cabecera() {
    return(
        <div>
            <a href='/'><img src={madenterpriseLOGO} alt='Logo_MAD_Shop' className='logo'/></a>
            <button className='btnesInicio'><a href='/login'>Iniciar Sesión</a></button>
            <button className='btnesInicio' id='btnRegistrarse'><a href='/registrarse'>Registrarse</a></button>
            <img src={BiWorld} alt='BiWorld' className='mundo'/>
            <select name="Idiomas" className='selectLang'>
                <option value="value1" selected>Español</option>
                <option value="value2">Inglés</option>
            </select>
        </div>
    );
}