import React, { useState } from 'react';
import { CadastroContainer, FormWrapper, Title, CadastroForm, Input, Button } from './style'; 

const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:3000/user/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Cadastro bem-sucedido
                console.log("Cadastro bem-sucedido!");
            } else {
                // Cadastro falhou
                console.error("Falha no cadastro:", data.msg);
            }
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
        }
    };

    return (
        <CadastroContainer>
            <FormWrapper>
                <Title>CADASTRO</Title>
                <CadastroForm onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        value={formData.name}
                        onChange={handleChange} 
                        required 
                    />
                    <Input 
                        type="text" 
                        name="address" 
                        placeholder="Endereço" 
                        value={formData.address}
                        onChange={handleChange} 
                        required 
                    />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        value={formData.password}
                        onChange={handleChange} 
                        required 
                    />
                    <Input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirme sua Senha" 
                        value={formData.confirmPassword}
                        onChange={handleChange} 
                        required 
                    />
                    <Button type="submit">CADASTRAR</Button>
                </CadastroForm>
            </FormWrapper>
        </CadastroContainer>
    );
};

export default Cadastro;
