import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "../../styles/global";
import Header from "../../components/HeaderSaory1";
import * as C from "./styles"; 
import Grid from "../../components/Grid";

const apiUrl = "https://backend-puc-diarista.onrender.com";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateTransactionData = () => {
      const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

      const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

      const total = Math.abs(income - expense).toFixed(2);

      setIncome(`R$ ${income}`);
      setExpense(`R$ ${expense}`);
      setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    };

    updateTransactionData();
  }, [transactionsList]);

  const handleAddTransaction = async (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

    try {
      await axios.post(`${apiUrl}/user/${transaction.userId}/transactions`, transaction);
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    const newArray = transactionsList.filter((transaction) => transaction.id !== id);
    setTransactionsList(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));

    try {
      await axios.delete(`${apiUrl}/user/transaction/${id}`);
    } catch (error) {
      console.error("Erro ao deletar transação:", error);
    }
  };

  return (
    <>
      <Header />
      <C.Resume>
        <C.ResumeItem>
          <span>Entradas</span>
          <strong>{income}</strong>
        </C.ResumeItem>
        <C.ResumeItem>
          <span>Saídas</span>
          <strong>{expense}</strong>
        </C.ResumeItem>
        <C.ResumeItem>
          <span>Total</span>
          <strong>{total}</strong>
        </C.ResumeItem>
      </C.Resume>
      <C.Container>
        <TransactionForm
          handleAdd={handleAddTransaction}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
        />
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} onDelete={handleDeleteTransaction} />
      <GlobalStyle />
    </>
  );
};

const TransactionForm = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(null);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: transactionsList.length + 1,
      desc: desc,
      amount: amount,
      expense: isExpense,
      userId: "dummyUserId" 
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setIsExpense(null);
  };

  const isFormValid = desc && amount && isExpense !== null;

  return (
    <>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </C.InputContent>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rIncome"
          name="group1"
          onChange={() => setIsExpense(false)}
        />
        <C.Label htmlFor="rIncome">Entrada</C.Label>
        <C.Input
          type="radio"
          id="rExpenses"
          name="group1"
          onChange={() => setIsExpense(true)}
        />
        <C.Label htmlFor="rExpenses">Saída</C.Label>
      </C.RadioGroup>
      <C.Button onClick={handleSave} disabled={!isFormValid}>
        ADICIONAR
      </C.Button>
    </>
  );
};

export default App;
