//-- Importación del Elemento React para poder programar.
import React from 'react';

//-- Exportación del Login del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function Login() {
    return(
        <div className='pantallaOpcion'>
            <h1 className='tituloOpcion' id='iniciarSesionComo'>INICIAR SESIÓN COMO:</h1>
            <button className='btnEleccion'><a href='/login/cliente'>Cliente</a></button>
            <button className='btnEleccion' id='btnEleccionEmpresa'><a href='/login/empresa'>Empresa</a></button>
        </div>
    );
}