import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroCliente from '../pages/CadastroCliente';
import Gastos from '../pages/Gastos';
import Agendamento from '../pages/Agendamento';
import Services from '../pages/Services';

const Private = ({ Item }) => {
    const signed = true; // TODO mudar para falso para deslogar -> para aparecer a home

    return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route path="*" element={<Login />} />
                    <Route exact path="/gastos" element={<Gastos/>} />
                    <Route exact path="/agendamento" element={<Agendamento/>} />
                    <Route exact path ="/cadastrocliente" element={<CadastroCliente />} />
                    <Route exact path ="/services" element={<Services />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;