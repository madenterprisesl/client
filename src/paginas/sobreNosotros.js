//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de la Cabecera del Comercio Electrónico.
import Cabecera from '../componentes/cabecera.js';
//-- Importación del Pie de Página del Comercio Electrónico.
import PiePagina from '../componentes/piepagina.js';

function Sobrenosotros() {
    return(
        <div>
            <Cabecera/>
            <p className='fondoAbout'>
                <h2 className='textoAbout' id='titleAbout'>Conócenos...</h2>
                <p className='textoAbout'> Te preguntarás, ¿cómo surgió MAD Enterprise? Pues llegó un día que un alumno del Grado<br/>
                    en Ingeniería de Sistemas Audiovisuales y Multimedia de la Escuela Técnica Superior de Ingeniería de<br/>
                    Telecomunicación de la Universidad Rey Juan Carlos, tenía que hacer su TFG para finalizar la Licenciatura.<br/>
                    Al principio, no sabía que hacer, pero un día leyó en un sitio web de informática de prestigio, que los<br/>
                    Comercios Electrónicos como Amazon, guardaban todos los datos de sus usuarios en la base de datos del servidor,<br/>
                    es decir, hay en ellos una falta de privacidad. Entonces, dicho alumno, cansado de ello, decidió desarrollar un Comercio<br/>
                    Eléctrónico, donde el usuario sí tuviera privacidad sobre sus datos. Para ello, el procedimiento sobre la privacidad que se<br/>
                    llevó a cabo fue, que todos los datos que el usuario pudiera meter (salvo usuario y contraseña necesarios para iniciar sesión)<br/>
                    se guardaran en la base de datos del cliente y, no en la del servidor como hacen la mayoría de los Comercios Electrónicos<br/>
                    "mainstream". Aparte de la privacidad, otro de los motivos por el que decidió crear MAD Enterprise fue, para dar un enfoque más<br/>
                    futurible a los Comercios Electrónicos, poniendo especial énfasis en el diseño en 3D (por medio de la Tecnología A-Frame),<br/>
                    para que los iconos y todos los productos a la venta del Comercio Electrónico se vieran en 3D y, el usuario tuviera una<br/>
                    sensación de más realidad cuando estuviera comprando (hacerle ver como si estuviera en una tienda física de un Centro<br/>
                    Comercial o tienda de barrio). Por lo tanto, con la idea y el proyecto en mente, se puso a ello, desarrollando un esquema<br/>
                    teórico primero y luego, desarrollándolo de forma práctica. Por otro lado, hay que decir que fue un proyecto con mucha<br/>
                    investigación, sobre la Tecnología A-Frame, sobre la Tecnología mySQL y phpMyAdmin para el desarrollo<br/>
                    de la base de datos, sobre la Tecnología NodeJS para el desarrollo del BackEnd y, sobre la Tecnología<br/>
                    ReactJS para el desarrollo del FrontEnd. También la edición de fotos con Adobe Photoshop y GIFs.
                    <br/>
                    <br/>
                    Desde MAD Enterprise, si tenéis inseguridad a la hora de desarrollar un proyecto profesional,<br/>
                    o no sabéis como hacerlo y por eso, os echáis para atrás, os decimos que no tengáis miedo al fracaso<br/>
                    por el que dirán. Lo que sí que debería ser negativo y de fracaso, es no haber intentado desarrollarlo<br/>
                    y, haber "tirado la toalla", sólo por ese miedo "ficticio" a ello.
                    <br/>
                    <br/>
                    Así qué, ya sabes, lucha por tus objetivos profesionales y personales y, no dejes que guíen tu<br/>
                    vida, ya qué el dueño de ella, ¡ERES TÚ!
                </p>
            </p>
            <br/>
            <br/>
            <br/>
            <PiePagina/>
        </div>
    );
}

export default Sobrenosotros;