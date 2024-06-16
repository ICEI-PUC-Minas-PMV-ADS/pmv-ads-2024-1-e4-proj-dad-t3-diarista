import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Button, Table, Th, Td, RadioGroup } from './styles';
import Header from '../../components/HeaderSaory1';

const apiUrl = 'https://backend-puc-diarista.onrender.com';

const App = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState(''); // Adicionando estado para o nome do usuário
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [userList, setUserList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalEntradas, setTotalEntradas] = useState(0);
  const [totalSaidas, setTotalSaidas] = useState(0);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
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

  const fetchUserData = async () => {
    if (!userId) {
      return;
    }

    try {
      const [totalResponse, entradasResponse, saidasResponse] = await Promise.all([
        axios.get(`${apiUrl}/user/${userId}/total`),
        axios.get(`${apiUrl}/user/${userId}/total-entradas`),
        axios.get(`${apiUrl}/user/${userId}/total-saidas`),
      ]);

      setTotal(totalResponse.data.total);
      setTotalEntradas(entradasResponse.data.totalEntradas);
      setTotalSaidas(saidasResponse.data.totalSaidas);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const handleSearchUser = async () => {
    setLoadingUser(true);
    setError('');

    try {
      const response = await axios.get(`${apiUrl}/user?name=${userName}`);
      const user = response.data.find((user) => user.name === userName);

      if (user) {
        setUserId(user._id);
        setUserName(user.name); // Atualizando userName com o nome do usuário encontrado
      } else {
        setError('Usuário não encontrado.');
      }
    } catch (error) {
      setError('Erro ao buscar usuário.');
    } finally {
      setLoadingUser(false);
    }
  };

  const handleAddTransaction = async () => {
    setLoadingTransaction(true);
    setError('');

    try {
      await axios.post(`${apiUrl}/user/${userId}/transactions`, { amount, type });
      setAmount('');
      setType('');

      // Após adicionar a transação, atualiza os dados do usuário
      await fetchUserData();
    } catch (error) {
      setError('Erro ao adicionar transação.');
    } finally {
      setLoadingTransaction(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="search-container">
          <label htmlFor="userName">Selecione o Usuário:</label>
          <select
            id="userName"
            value={userId}
            onChange={(e) => {
              const selectedUserId = e.target.value;
              setUserId(selectedUserId);

              // Encontrar o nome do usuário correspondente ao _id selecionado
              const selectedUser = userList.find(user => user._id === selectedUserId);
              if (selectedUser) {
                setUserName(selectedUser.name); // Atualizando userName com o nome correspondente
              }
            }}
          >
            <option value="">Selecione um usuário</option>
            {userList.map((user) => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
          <Button onClick={handleSearchUser} disabled={loadingUser}>
            {loadingUser ? 'Carregando...' : 'Selecionar'}
          </Button>
        </div>
        {error && <p>{error}</p>}
        {userId && (
          <div>
            <label>ID do Usuário Selecionado:</label>
            <span>{userId}</span>
          </div>
        )}
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
        <Button onClick={handleAddTransaction} disabled={!userId || loadingTransaction}>
          {loadingTransaction ? 'Adicionando...' : 'Adicionar Transação'}
        </Button>
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
              <Td>{userName}</Td> {/* Exibindo o nome do usuário selecionado */}
              <Td>{totalEntradas}</Td>
              <Td>{totalSaidas}</Td>
              <Td style={{ fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>{total}</Td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default App;
