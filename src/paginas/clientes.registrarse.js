//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importamos el logo de MAD Enterprise para Clientes.
import madforclientsLOGO from '../images/madforclients.png';
//-- Importamos Iconos React.
import { BiHome } from 'react-icons/bi';
import { HiArrowCircleLeft } from 'react-icons/hi';

//-- Exportación de Registrarse del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function clientesRegistrarse() {
    return(
        <div className='fondoRegistrarseCliente'>
            <div className='registrarse'>
                <h1>Darse de alta como Cliente: </h1>
                <img src={madforclientsLOGO} alt='madenterpriseLOGO' className='madenterpriseLOGO'/>
                <form method="post" className='formRegistroCliente'>
                    <label>
                        Nombre: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeNombre'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Apellidos: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeApellidos'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Género: <span className='genero'>
                                    <input type='radio' name='genero' value='Hombre'></input>
                                    <label>Hombre</label>
                                    <input type='radio' name='genero' value='Mujer' className='separacionMujer'></input>
                                    <label className='separacionMujer'>Mujer</label>
                                    <input type='radio' name='genero' value='Otro' className='separacionOtro'></input>
                                    <label className='separacionOtro'>Otro</label>
                                </span>
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
                    <label>
                        Dirección: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeDireccion'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Población: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopePoblacion'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Región: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopeRegion'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        País: <span><input type='text' className='anchoCamposRegistro' id='distanciaTopePais'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Código Postal - CP: <span><input type='number' className='anchoCamposRegistro' id='distanciaTopeCP'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <button type='submit' className='btnDarseAltaCliente'><a href='/'>Darse de alta</a></button>
                </form>
                <button className='btnTransparente'><a href='/'><BiHome className='btnesPantallaRegistro' id='posAInicioCliente'/></a></button>
                <button className='btnTransparente'><a href='/registrarse'><HiArrowCircleLeft className='btnesPantallaRegistro' id='posAatrasCliente'/></a></button>
            </div>
        </div>
    );
}