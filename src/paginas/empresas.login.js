//-- Importación del Elemento React para poder programar.
import React, {useState} from 'react';
//-- Importamos el logo de MAD Enterprise para Empresas.
import madforcompaniesLOGO from '../images/madforcompanies.png';
//-- Importamos Iconos React.
import { BiHome } from 'react-icons/bi';
import { HiArrowCircleLeft } from 'react-icons/hi';

//-- Exportación del Login del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function LoginEmpresas() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const cambiarEmail = (e) => setEmail(e.target.value);

    const cambiarPassword = (e) => setPassword(e.target.value);

    const acceder = (e) => e.preventDefault();

    return (
        <div>
            <h1 className='etiquetaLogin' id='Empresa'>Empresa</h1>
            <div className='login'>
                <div className='tituloLogin'>INICIAR SESIÓN:</div>
                <img src={madforcompaniesLOGO} alt='madenterpriseLOGO' className='madenterpriseLOGO' id='posLogoLogin'/>
                <label className='entradas'>Correo Electrónico:</label>
                <input className='entradas' id='rellenoLogin' type='email' placeholder='Correo Electrónico....' value={email} onChange={cambiarEmail}/>
                <label className='entradas'>Contraseña:</label>
                <input className='entradas' id='rellenoLogin' type='password' placeholder='Contraseña....' value={password} onChange={cambiarPassword}
                pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="La contraseña debe estar compuesta de mínimo 15 caracteres, letras minúsculas y mayúsculas y, de números" required/>
                <button type='submit' value={acceder} id='btnAcceso'><a href='/auth'>Acceder</a></button>
                <button className='btnTransparente'><a href='/'><BiHome id='iconoAinicio'/></a></button>
                <button className='btnTransparente'><a href='/login'><HiArrowCircleLeft className='btnesPantallaLogin' id='posAatrasLoginCliente'/></a></button>
            </div>
        </div>
    );
}