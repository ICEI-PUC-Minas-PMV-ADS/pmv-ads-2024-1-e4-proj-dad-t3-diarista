import React, { Fragment } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Navigate } from 'react-router-dom'; 
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import Cadastro from '../pages/Cadastro'; 
import CadastroCliente from '../pages/CadastroCliente'; 
import Gastos from '../pages/Gastos'; 
import Agendamento from '../pages/Agendamento'; 
import Services from '../pages/Services'; 

 

const Private = ({ element: Element }) => { 

    const signed = false; // TODO: mudar para true quando o usuário estiver logado 

    return signed ? <Element /> : <Navigate to="/home" />; 

} 


const RoutesApp = () => { 

    return ( 

      <BrowserRouter> 
        <Fragment> 
          <Routes> 
            {/* Redireciona a rota raiz (/) para a página Home (/home) */} 
            <Route path="/" element={<Navigate to="/home" />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/cadastro" element={<Cadastro />} /> 
            <Route path="*" element={<Navigate to="/home" />} /> 
            <Route path="/gastos" element={<Private element={Gastos} />} /> 
            <Route path="/agendamento" element={<Private element={Agendamento} />} /> 
            <Route path="/cadastrocliente" element={<Private element={CadastroCliente} />} /> 
            <Route path="/services" element={<Private element={Services} />} /> 
          </Routes> 
        </Fragment> 
      </BrowserRouter> 

    ); 

  }; 

   

  export default RoutesApp; 