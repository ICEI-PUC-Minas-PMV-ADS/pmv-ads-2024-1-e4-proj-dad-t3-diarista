import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

export default function BuscarClientes() {
  const clientes = useSelector((state) => state.clientes);
  const [search, setSearch] = useState('');
  const [filteredClientes, setFilteredClientes] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredClientes(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Clientes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do cliente"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredClientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.local}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#072B23',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
