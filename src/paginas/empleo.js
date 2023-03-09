//-- Importación del Elemento React para poder programar.
import React from 'react';
//-- Importación de la Cabecera del Comercio Electrónico.
import Cabecera from '../componentes/cabecera.js';
//-- Importación del Pie de Página del Comercio Electrónico.
import PiePagina from '../componentes/piepagina.js';

function Empleo() {
    return(
        <div>
            <Cabecera/>
            <p className='fondoEmpleo'>
                <h2 className='tituloEmpleo'>¡Envíanos tu CV!</h2>
                <form className='formEmpleo'>
                    <label>
                        Nombre: <span className='espaciadoCV'><input type='text' id='nombreCV'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Apellidos: <span className='espaciadoCV'><input type='text' id='apellidosCV'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Email: <span className='espaciadoCV'><input type='email' id='emailCV'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Fecha de nacimiento: <span className='espaciadoCV'><input type='date' id='birthdayCV'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        CV, títulos y/o otros: <span className='espaciadoCV'><input type="file" accept=".pdf" multiple></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label className='argumentacionCV'>
                        Asunto: <span className='espaciadoCV'><input type='text' maxLength='50' id='asuntoCV'></input></span>
                    </label>
                    <br/>
                    <br/>
                    <label className='argumentacionCV'>
                        Mensaje: <span className='espaciadoCV'><textarea id='cartaPresentacion' rows="10" cols="40"></textarea></span>
                    </label>
                    <br/>
                    <br/>
                    <button type='submit' className='argumentacionCV'><a href='/' id='elboton'>Enviar</a></button>
                </form>
            </p>
            <br/>
            <br/>
            <br/>
            <PiePagina/>
        </div>
    );
}

export default Empleo;