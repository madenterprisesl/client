//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación del botón inicio por si quiere volver al Inicio sin darse de alta.
import BtnInicio from '../images/btnInicio.png';
//-- Importamos el logo de MAD Shop.
import madshopLOGO from '../images/madshop.png';
//-- Importación del botón retroceder por si quiere volver a la pantalla anterior.
import Retroceso from '../images/retroceso.png';

//-- Exportación de Registrarse del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function empresasRegistrarse() {
    return(
        <div className='fondoRegistrarseEmpresa'>
            <div className='registrarse'>
                <h1>Darse de alta como Empresa: </h1>
                <img src={madshopLOGO} alt='madshopLOGO' className='madshopLOGO' id='posLogoRegistro'/>
                <form method="post" className='formRegistroEmpresa'>
                    <label>
                        Nombre de la Empresa: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeEmpresa'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Tipo de empresa: <span className='tipoEmpresa'>
                                            <input type='radio' name='tipoEmpresa' value='PYME'></input>
                                            <label>PYME</label>
                                            <input type='radio' name='tipoEmpresa' value='Multinacional' className='separacionMujer'></input>
                                            <label className='separacionMujer'>Multinacional</label>
                                            <input type='radio' name='tipoEmpresa' value='StartUp' className='separacionOtro'></input>
                                            <label className='separacionOtro'>StartUp</label>
                                        </span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Código CIF: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeCIF'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        E-mail: <span><input type='email' className='anchoCamposRegistro' id='distanciaTopeEmail'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Nueva contraseña: <span><input type='password' className='anchoCamposRegistro' id='distanciaTopePassword' pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="La contraseña debe estar compuesta de mínimo 15 caracteres, letras minúsculas y mayúsculas y, de números." required></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Confirmación de la contraseña: <span><input type='password' className='anchoCamposRegistro' pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="La contraseña debe estar compuesta de mínimo 15 caracteres, letras minúsculas y mayúsculas y, de números." required></input></span>
                    </label>
                    <br/>
                    <br/>
                    <button type='submit' className='btnDarseAltaEmpresa'><a href='/'>Darse de alta</a></button>
                </form>
                <button className='btnTransparente'><a href='/'><img src={BtnInicio} alt='boton_inicio' className='btnesPantallaRegistro' id='posAInicioEmpresa'/></a></button>
                <button className='btnTransparente'><a href='/registrarse'><img src={Retroceso} alt='Retroceso' className='btnesPantallaRegistro' id='posAatrasEmpresa'/></a></button>
            </div>
        </div>
    );
}