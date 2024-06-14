import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

// Importe apenas os estilos necessários
import { Container, Input, Button, Table, Th, Td, RadioGroup  } from './styles'; // Certifique-se de ajustar o caminho conforme necessário

const App = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [userList, setUserList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalEntradas, setTotalEntradas] = useState(0);
  const [totalSaidas, setTotalSaidas] = useState(0);

  useEffect(() => {
    // Defina a URL do seu backend aqui - substitua pela URL do seu ambiente de produção
    const apiUrl = 'https://backend-puc-diarista.onrender.com';

    // Função para buscar a lista de usuários disponíveis
    const fetchUserList = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user`);
        setUserList(response.data);
      } catch (error) {
        console.error('Erro ao buscar lista de usuários:', error);
      }
    };

    fetchUserList();
  }, []);

  useEffect(() => {
    if (userId) {
      // Defina a URL do seu backend aqui - substitua pela URL do seu ambiente de produção
      const apiUrl = 'https://backend-puc-diarista.onrender.com';

      // Função para buscar o total do usuário selecionado
      const fetchTotal = async () => {
        try {
          const response = await axios.get(`${apiUrl}/user/${userId}/total`);
          setTotal(response.data.total);
        } catch (error) {
          console.error('Erro ao buscar o total:', error);
        }
      };

      // Função para buscar as entradas do usuário selecionado
      const fetchEntradas = async () => {
        try {
          const response = await axios.get(`${apiUrl}/user/${userId}/total-entradas`);
          setTotalEntradas(response.data.totalEntradas);
        } catch (error) {
          console.error('Erro ao buscar as entradas:', error);
        }
      };

      // Função para buscar as saídas do usuário selecionado
      const fetchSaidas = async () => {
        try {
          const response = await axios.get(`${apiUrl}/user/${userId}/total-saidas`);
          setTotalSaidas(response.data.totalSaidas);
        } catch (error) {
          console.error('Erro ao buscar as saídas:', error);
        }
      };

      fetchTotal();
      fetchEntradas();
      fetchSaidas();
    }
  }, [userId]);

  const handleAddTransaction = async () => {
    // Defina a URL do seu backend aqui - substitua pela URL do seu ambiente de produção
    const apiUrl = 'https://backend-puc-diarista.onrender.com';

    try {
      await axios.post(`${apiUrl}/user/${userId}/transactions`, { amount, type });
      // Atualize o saldo após adicionar a transação
      setAmount('');
      setType('');
    } catch (error) {
      console.error('Erro ao adicionar transação:', error);
    }
  };

  const handleSearchUser = () => {
    const user = userList.find(user => user.name === userName);
    if (user) {
      setUserId(user._id);
    } else {
      alert('Usuário não encontrado!');
    }
  };

  return (
    <Container>
      <div>
        <label htmlFor="userName">Digite o Nome do Usuário:</label>
        <Input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button onClick={handleSearchUser}>Pesquisar</Button>
      </div>
      <div>
        <label htmlFor="userId">ID do Usuário Selecionado:</label>
        <span>{userId}</span>
      </div>
      <div>
        <label htmlFor="amount">Valor:</label>
        <Input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo:</label>
        <RadioGroup>
          <input
            type="radio"
            id="entrada"
            value="entrada"
            checked={type === 'entrada'}
            onChange={() => setType('entrada')}
          />
          <label htmlFor="entrada">Entrada</label>
          <input
            type="radio"
            id="saida"
            value="saida"
            checked={type === 'saida'}
            onChange={() => setType('saida')}
          />
          <label htmlFor="saida">Saída</label>
        </RadioGroup>
      </div>
      <Button onClick={handleAddTransaction}>Adicionar Transação</Button>
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Total de Entradas</Th>
            <Th>Total de Saídas</Th>
            <Th>Total</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{userName}</Td>
            <Td>{totalEntradas}</Td>
            <Td>{totalSaidas}</Td>
            <Td>{total}</Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
