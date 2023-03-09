//-- Importación del Elemento React para poder programar.
import React from 'react';

//-- Exportación de Registrarse del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function Registrarse() {
    return(
        <div className='pantallaOpcion'>
            <h1 className='tituloOpcion'>REGISTRARSE COMO:</h1>
            <button className='btnEleccion'><a href='/registrarse/cliente'>Cliente</a></button>
            <button className='btnEleccion' id='btnEleccionEmpresa'><a href='/registrarse/empresa'>Empresa</a></button>
        </div>
    );
}