import React, { useState } from 'react';
import { LoginContainer, LoginForm, Title, Input, Button, MessagePopup } from './style';
import Header from '../../components/HeaderSaory3';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState(''); 
    const [showMessage, setShowMessage] = useState(false); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("https://backend-puc-diarista.onrender.com/user/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login bem-sucedido!", data.token);
                setMessage("Login realizado com sucesso!");
                setShowMessage(true);
                setTimeout(() => {
                    window.location.href = '/Gastos';
                }, 1000);
            } else {
                console.error("Falha no login:", data.msg);
                setMessage(`Falha no login: ${data.msg}`);
                setShowMessage(true);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setMessage("Erro ao fazer login. Por favor, tente novamente.");
            setShowMessage(true);
        }

        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return (
        <div>
            <Header/>
            <LoginContainer>
                <LoginForm onSubmit={handleSubmit}>
                    <Title>LOGIN</Title>
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange} 
                    />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        value={formData.password}
                        onChange={handleChange} 
                    />
                    <Button type="submit">Entrar</Button>
                </LoginForm>
                {showMessage && <MessagePopup>{message}</MessagePopup>} 
            </LoginContainer>
        </div>
    );
};

export default Login;