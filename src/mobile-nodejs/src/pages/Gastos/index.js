import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [isExpense, setIsExpense] = useState(null);

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await AsyncStorage.getItem('transactions');
      if (data) {
        setTransactionsList(JSON.parse(data));
      }
    };
    loadTransactions();
  }, []);

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
      setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
    };

    updateTransactionData();
  }, [transactionsList]);

  const handleAddTransaction = async (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    await AsyncStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
    setIsExpense(null); 
  };

  const handleDeleteTransaction = async (id) => {
    const newArray = transactionsList.filter((transaction) => transaction.id !== id);
    setTransactionsList(newArray);
    await AsyncStorage.setItem('transactions', JSON.stringify(newArray));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.summaryContainer}>
        <ResumeItem label="Entradas:" value={income} />
        <ResumeItem label="Saídas:" value={expense} />
        <ResumeItem label="Total:" value={total} />
      </View>
      <TransactionForm handleAdd={handleAddTransaction} isExpense={isExpense} setIsExpense={setIsExpense} />
      <FlatList
        data={transactionsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={() => handleDeleteTransaction(item.id)} />
        )}
      />
    </View>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Controle Financeiro</Text>
  </View>
);

const ResumeItem = ({ label, value }) => (
  <View style={styles.resumeItem}>
    <Text style={styles.resumeLabel}>{label}</Text>
    <Text style={styles.resumeValue}>{value}</Text>
  </View>
);

const TransactionForm = ({ handleAdd, isExpense, setIsExpense }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    if (!desc || !amount) {
      Alert.alert('Erro', 'Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      Alert.alert('Erro', 'O valor tem que ser positivo!');
      return;
    }

    const amountValue = parseFloat(amount.replace(',', '.'));

    if (isNaN(amountValue)) {
      Alert.alert('Erro', 'O valor informado não é válido!');
      return;
    }

    if (isExpense === null) {
      Alert.alert('Erro', 'Selecione se é uma Entrada ou Saída!');
      return;
    }

    const transaction = {
      id: new Date().getTime(),
      desc: desc,
      amount: amountValue.toFixed(2),
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount('');
  };

  const isFormValid = desc && amount && isExpense !== null;

  return (
    <View style={styles.form}>
      <View style={styles.inputContent}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={desc}
          onChangeText={setDesc}
        />
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
        />
      </View>
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => setIsExpense(false)} style={[styles.radioButton, isExpense === false && styles.selectedButtonIncome]}>
          <Text style={[styles.radioText, isExpense === false && styles.selectedText]}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsExpense(true)} style={[styles.radioButton, isExpense === true && styles.selectedButtonExpense]}>
          <Text style={[styles.radioText, isExpense === true && styles.selectedText]}>Saída</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSave} style={[styles.addButton, !isFormValid && styles.addButtonDisabled]} disabled={!isFormValid}>
        <Text style={styles.addButtonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const TransactionItem = ({ item, onDelete }) => (
  <View style={styles.transactionItem}>
    <View style={{ flex: 1 }}>
      <Text>{item.desc}</Text>
      <Text>{item.amount}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {item.expense ? (
        <Ionicons name="arrow-down" size={24} color="red" />
      ) : (
        <Ionicons name="arrow-up" size={24} color="green" />
      )}
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resumeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '30%', 
  },
  resumeLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  resumeValue: {
    fontSize: 16,
  },
  form: {
    marginBottom: 20,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 5px #ccc',
    borderRadius: 5,
    padding: 15,
  },
  inputContent: {
    marginBottom: 10,
  },
  label: {},
  input: {
    outline: 'none',
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  radioButton: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f0f0', 
  },
  selectedButtonIncome: {
    backgroundColor: '#A5D6A7', 
  },
  selectedButtonExpense: {
    backgroundColor: '#EF9A9A', 
  },
  radioText: {
    color: '#333', 
    textAlign: 'center',
  },
  selectedText: {
    color: '#fff', 
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#9E9E9E', 
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteText: {
    color: 'red',
  },
});

export default App;
