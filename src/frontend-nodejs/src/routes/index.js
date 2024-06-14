import React, { Fragment } from "react"; 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import Cadastro from '../pages/Cadastro'; 
import CadastroCliente from '../pages/CadastroCliente'; 
import Gastos from '../pages/Gastos'; 
import Agendamento from '../pages/Agendamento'; 
import Services from '../pages/Services'; 

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
                    <Route path="/gastos" element={<Gastos />} /> 
                    <Route path="/agendamento" element={<Agendamento />} /> 
                    <Route path="/cadastrocliente" element={<CadastroCliente />} /> 
                    <Route path="/services" element={<Services />} /> 
                    <Route path="*" element={<Navigate to="/home" />} /> 
                </Routes> 
            </Fragment> 
        </BrowserRouter> 
    ); 
}; 

export default RoutesApp; 
