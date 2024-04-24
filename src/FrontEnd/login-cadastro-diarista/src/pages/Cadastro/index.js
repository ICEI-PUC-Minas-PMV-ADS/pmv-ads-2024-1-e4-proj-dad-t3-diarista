import React from 'react';
import { CadastroContainer, FormWrapper, Title, CadastroForm, Input, Button } from './style'; 

const Cadastro = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicou em cadastrar')
    };

    return (
        <CadastroContainer>
            <FormWrapper>
                <Title>CADASTRO</Title>
                <CadastroForm onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Nome" required />
                    <Input type="text" placeholder="Endereço" required />
                    <Input type="date" placeholder="Data de Nascimento" required />
                    <Input type="password" placeholder="Senha" required />
                    <Input type="password" placeholder="Confirme sua Senha" required />
                    <Button type="submit">CADASTRAR</Button>
                </CadastroForm>
            </FormWrapper>
        </CadastroContainer>
    );
};

export default Cadastro;
