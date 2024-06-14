import React, { useState } from 'react';
import Header from '../../../src/components/Header';
import * as S from './styles';

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

  const handleClienteSubmit = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <>
      <Header/>
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
