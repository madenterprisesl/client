//-- Importación de dependencias React para la parte FrontEnd y las rutas.
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//-- Importación de todas las páginas del Comercio Electrónico.
import Inicio from './paginas/inicio.js';
import Contacto from './paginas/contacto.js';
import Sobrenosotros from './paginas/sobreNosotros.js';
import Empleo from './paginas/empleo.js';
import Login from './paginas/login.js';
import Registrarse from './paginas/registrarse.js';
import Categorias from './paginas/categorias.js';
import ClienteRegistrarse from './paginas/clientes.registrarse.js';
import EmpresaRegistrarse from './paginas/empresas.registrarse.js';
import AuthInicio from './paginas/authInicio.js';
import LoginClientes from './paginas/clientes.login.js';
import LoginEmpresas from './paginas/empresas.login.js';
//-- Importamos el Error 404, cuando se produzca un error de página en el Comercio Electrónico.
import Error404 from './paginas/Error404.js';

export default function Ecommerce() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/empleo" element={<Empleo/>}/>
          <Route exact path="/sobrenosotros" element={<Sobrenosotros/>}/>
          <Route exact path="/categorias" element={<Categorias/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/login/cliente" element={<LoginClientes/>}/>
          <Route exact path="/login/empresa" element={<LoginEmpresas/>}/>
          <Route exact path="/registrarse" element={<Registrarse/>}/>
          <Route exact path='/registrarse/cliente' element={<ClienteRegistrarse/>}/>
          <Route exact path='/registrarse/empresa' element={<EmpresaRegistrarse/>}/>
          <Route exact path='/:id' element={<AuthInicio/>}/>
          <Route exact path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}
