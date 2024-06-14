import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaClientes() {
  const clientes = useSelector((state) => state.clientes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
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
