//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importamos el logo de MAD Enterprise.
import madenterpriseLOGO from '../images/madenterprise.png';
//-- Importamos Iconos React.
import {BiWorld} from 'react-icons/bi';
//-- Importamos el icono del carrito de compra.
import Carrito from '../images/carrito.png';
//-- Importamos el icono del cerrar sesión.
import LogoOut from '../images/logoout.png';

//-- Exportación de la Cabecera Autenticada del Comercio Electrónico para enrrutarlo y enlazarlo con su correspondiente destino.
export default function authCabecera() {
    return(
        <div>
            <a href='/'><img src={madenterpriseLOGO} alt='Logo_MAD_Shop' className='logo'></img></a>
            <button className='btnesAuth'><a href='/perfil'>Mi Perfil</a></button>
            <button className='btnesAuth' id='btnCarrito'><a href='/'><img src={Carrito} alt='Carrito' className='componenteAuth'/></a></button>
            <button className='btnesAuth' id='btnLogoOut'><a href='/'><img src={LogoOut} alt='LogoOut' className='componenteAuth'/></a></button>
            <img src={BiWorld} alt='BiWorld' className='mundo' id='posMundo'/>
            <select name="Idiomas" className='selectLang' id='posSelectLang'>
                <option value="value1" selected>Español</option>
                <option value="value2">Inglés</option>
            </select>
        </div>
    );
}