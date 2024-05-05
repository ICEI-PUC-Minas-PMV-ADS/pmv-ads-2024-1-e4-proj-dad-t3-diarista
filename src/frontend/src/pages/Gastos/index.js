import React, { useState } from "react";
import HeaderSaory1 from '../../components/HeaderSaory1';
import GridItem from "../../components/GridItem";
import ResumeItem from "../../components/ResumeItem";
import Resume from "../../components/Resume";
import Grid from "../../components/Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  const onDelete = (ID) => {
    const newArray = transactionsList.filter((transaction) => transaction.id !== ID);
    setTransactionsList(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <>
      <HeaderSaory1/>
      <Resume/>
      <C.Container>
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
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave} style={{ fontFamily: "Poppins" }}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} onDelete={onDelete} />
    </>
  );
};

export default Form;