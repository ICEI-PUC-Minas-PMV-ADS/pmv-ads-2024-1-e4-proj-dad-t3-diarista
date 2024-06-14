import React, { useState } from 'react';
import axios from 'axios';
import {
  CadastroContainer,
  FormWrapper,
  Title,
  CadastroForm,
  Input,
  Button
} from './style';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-puc-diarista.onrender.com/user/auth/register', formData);
      console.log(response.data);
      // Limpar o formulário após o registro bem-sucedido
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: ''
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <CadastroContainer>
      <FormWrapper>
        <Title>Registro</Title>
        <CadastroForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Senha"
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar Senha"
            required
          />
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Localização"
            required
          />
          <Button type="submit">Registrar</Button>
        </CadastroForm>
      </FormWrapper>
    </CadastroContainer>
  );
};

export default RegisterForm;
