import styled from 'styled-components';

export const CadastroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinhamento no topo do contêiner */
  min-height: 100vh; /* Use min-height em vez de height para permitir rolagem */
  background-color: #fff;
  padding-top: 50px; /* Espaçamento superior */
  padding-bottom: 50px; /* Espaçamento inferior */
`;

export const FormWrapper = styled.div`
  background-color: #f0fff0;
  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 80%;
  max-width: 600px;
  transition: all 0.3s ease;
`;

export const Title = styled.h2`
  color: #333333;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const CadastroForm = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 1.6rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4a90e2;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
