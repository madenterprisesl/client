//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de la Cabecera del Comercio Electrónico.
import Cabecera from '../componentes/cabecera.js';
//-- Importación del Pie de Página del Comercio Electrónico.
import PiePagina from '../componentes/piepagina.js';

//-- Exportación del Inicio del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
function Categorias() {
    return(
        <div>
            <Cabecera/>
            <p className='nothing'>
                <table className='agrupacion'>
                    <h3 id='agrupacion2'>Consolas</h3>
                    <h3 id='agrupacion3'>Videojuegos</h3>
                    <h3 id='agrupacion4'>Películas</h3>
                </table>
            </p>
            <br/>
            <br/>
            <br/>
            <PiePagina/>
        </div>
    );
}

export default Categorias;