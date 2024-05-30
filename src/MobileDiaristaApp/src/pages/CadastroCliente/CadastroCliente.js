import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { addCliente } from '../Store/clientesSlice';

export default function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [local, setLocal] = useState('');
  const dispatch = useDispatch();

  const handleTelefoneChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    setTelefone(cleaned);
  };

  const handleSubmit = () => {
    if (telefone.length < 10 || telefone.length > 11) {
      Alert.alert('Erro', 'O telefone deve ter entre 10 e 11 dígitos.');
      return;
    }

    const cliente = { nome, telefone, local };
    dispatch(addCliente(cliente));
    setNome('');
    setTelefone('');
    setLocal('');
    Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#072B23',
  },
  form: {
    width: '80%',
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
});
