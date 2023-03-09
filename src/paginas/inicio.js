//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de la Cabecera del Comercio Electrónico.
import Cabecera from '../componentes/cabecera.js';
//-- Importación de los vídeos/GIFs a usar en la parte cuerpo/principal del Comercio Electrónico.
import GifMadShop from '../videosGIFs/GifPortadaMADShop.gif';
//-- Importación del Pie de Página del Comercio Electrónico.
import PiePagina from '../componentes/piepagina.js';

//-- Exportación del Inicio del Comercio Electrónico para enrrutarlo y enlazarlo con todas las páginas.
export default function Inicio() {
    return(
        <div>
            <Cabecera/>
            <img href='/' src={GifMadShop} alt="Portada_gif_madshop" className='gifms'/>
            <button className='botonCategorias'><a href='/categorias'>Categorias</a></button>
            <PiePagina/>
        </div>
    );
}