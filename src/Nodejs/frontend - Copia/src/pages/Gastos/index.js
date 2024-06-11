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
  const [totalEntradas, setTotalEntradas] = useState(0);
  const [totalSaidas, setTotalSaidas] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    // Defina a URL do seu backend aqui
    const apiUrl = 'http://localhost:3000'; // Altere conforme necessário

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
      // Defina a URL do seu backend aqui
      const apiUrl = 'http://localhost:3000'; // Altere conforme necessário

      // Função para buscar o saldo do usuário selecionado
      const fetchBalance = async () => {
        try {
          const response = await axios.get(`${apiUrl}/user/${userId}/balance`);
          setTotalEntradas(response.data.totalEntradas);
          setTotalSaidas(response.data.totalSaidas);
          setSaldo(response.data.saldo);
        } catch (error) {
          console.error('Erro ao buscar o saldo:', error);
        }
      };

      fetchBalance();
    }
  }, [userId]);

  const handleAddTransaction = async () => {
    // Defina a URL do seu backend aqui
    const apiUrl = 'http://localhost:3000'; // Altere conforme necessário

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
      {userId && (
        <>
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
                <Th>Email</Th>
                <Th>Total de Entradas</Th>
                <Th>Total de Saídas</Th>
                <Th>Saldo</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>{userName}</Td>
                <Td>{totalEntradas}</Td>
                <Td>{totalSaidas}</Td>
                <Td>{saldo}</Td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default App;
