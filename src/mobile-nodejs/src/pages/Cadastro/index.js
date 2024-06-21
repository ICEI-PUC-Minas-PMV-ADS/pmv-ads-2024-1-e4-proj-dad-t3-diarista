import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('https://backend-puc-diarista.onrender.com/user/auth/register', formData);
      console.log(response.data);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: ''
      });
      Alert.alert('Registro bem-sucedido!', 'Você foi registrado com sucesso.');
    } catch (error) {
      if (error.response) {
        console.error('Erro ao enviar dados:', error.response.data);
        Alert.alert('Erro ao registrar', error.response.data.message || 'Ocorreu um erro ao tentar registrar.');
      } else {
        console.error('Erro ao enviar dados:', error.message);
        Alert.alert('Erro ao registrar', 'Ocorreu um erro ao tentar registrar.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={formData.confirmPassword}
        onChangeText={(value) => handleChange('confirmPassword', value)}
        secureTextEntry
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Localização"
        value={formData.location}
        onChangeText={(value) => handleChange('location', value)}
        required
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterForm;
