//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importamos el logo de MAD Enterprise.
import madenterpriseLOGO from '../images/madenterprise.png';
//-- Importamos Iconos React.
import {BiWorld, BiCartAdd} from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';

//-- Exportación de la Cabecera Autenticada del Comercio Electrónico para enrrutarlo y enlazarlo con su correspondiente destino.
export default function authCabecera() {
    return(
        <div>
            <a href='/'><img src={madenterpriseLOGO} alt='Logo_MAD_Shop' className='logo'></img></a>
            <button className='btnPerfil'><a href='/perfil'>Mi Perfil</a></button>
            <button className='btnCarrito'><a href='/'><BiCartAdd className='componenteAuth'/></a></button>
            <button className='btnLogoOut'><a href='/'><AiOutlineLogout className='componenteAuth'/></a></button>
            <BiWorld className='mundo' id='posMundo'/>
            <select name="Idiomas" className='selectLang' id='posSelectLang'>
                <option value="value1" selected>Español</option>
                <option value="value2">Inglés</option>
            </select>
        </div>
    );
}