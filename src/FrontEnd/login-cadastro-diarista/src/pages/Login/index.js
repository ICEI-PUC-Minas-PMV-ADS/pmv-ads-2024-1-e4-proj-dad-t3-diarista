import React from 'react';
import { LoginContainer, LoginForm, Title, Input, Button } from './style'; 

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicou em entrar');
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Title>LOGIN</Title>
                <Input type="text" placeholder="Nome de Usuário" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
