import React, { useState, useEffect } from 'react';
import Header from '../../../src/components/HeaderSaory5';
import * as S from './styles';

const backendUrl = 'https://backend-puc-diarista.onrender.com'; // Definir o URL do backend

function ClienteForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, telefone, local });
    setNome('');
    setTelefone('');
    setLocal('');
  };

  return (
    <S.FormContainer>
      <h1>CADASTRO DE CLIENTES</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <label>
          Local da Diária:
          <input
            type="text"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
          />
        </label>
        <button type="submit">CADASTRAR CLIENTE</button>
      </form>
    </S.FormContainer>
  );
}

function CadastroCliente() {
  const [clientes, setClientes] = useState([]);

  const fetchClientes = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/clientes`); // Utilize o backendUrl
      if (response.ok) {
        const data = await response.json();
        setClientes(data);
      } else {
        console.error('Erro ao buscar clientes:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleClienteSubmit = async (cliente) => {
    try {
      const response = await fetch(`${backendUrl}/api/clientes`, { // Utilize o backendUrl
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      });

      if (response.ok) {
        const newCliente = await response.json();
        fetchClientes(); // Recarrega a lista de clientes após a adição de um novo cliente
      } else {
        console.error('Erro ao cadastrar cliente:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <ClienteForm onSubmit={handleClienteSubmit} />
          <h2>CLIENTES CADASTRADOS</h2>
          <S.ListaClientes>
            {clientes.map((cliente, index) => (
              <li key={index}>
                <strong>Nome:</strong> {cliente.nome}, <strong>Telefone:</strong>{' '}
                {cliente.telefone}, <strong>Local da Diária:</strong> {cliente.local}
              </li>
            ))}
          </S.ListaClientes>
        </S.Content>
      </S.Container>
    </>
  );
}

export default CadastroCliente;
