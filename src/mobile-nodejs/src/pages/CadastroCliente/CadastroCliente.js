import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import { addCliente } from '../Store/clientesSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const backendUrl = 'https://backend-puc-diarista.onrender.com'; // Definir o URL do backend

export default function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [local, setLocal] = useState('');
  const [clientes, setClientes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

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

  const handleTelefoneChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    setTelefone(cleaned);
  };

  const handleSubmit = async () => {
    if (telefone.length < 10 || telefone.length > 11) {
      Alert.alert('Erro', 'O telefone deve ter entre 10 e 11 dígitos.');
      return;
    }

    const cliente = { nome, telefone, local };

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
        dispatch(addCliente(newCliente));
        setNome('');
        setTelefone('');
        setLocal('');
        Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar cliente:', response.statusText);
        Alert.alert('Erro', 'Erro ao cadastrar cliente.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
    }
  };

  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Clientes</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={handleTelefoneChange}
          keyboardType="numeric"
          maxLength={11}
        />
        <TextInput
          style={styles.input}
          placeholder="Local da Diária"
          value={local}
          onChangeText={setLocal}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar Cliente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Cliente"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="magnify" size={20} color="#000" style={styles.searchIcon} />
      </View>
      <Text style={styles.subtitle}>Clientes Cadastrados</Text>
      <FlatList
        data={filteredClientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.clienteItem}>
            <Text style={styles.clienteText}><Text style={styles.bold}>Nome:</Text> {item.nome}</Text>
            <Text style={styles.clienteText}><Text style={styles.bold}>Telefone:</Text> {item.telefone}</Text>
            <Text style={styles.clienteText}><Text style={styles.bold}>Local da Diária:</Text> {item.local}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#072B23',
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#072B23',
    textAlign: 'center',
  },
  clienteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  clienteText: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});
