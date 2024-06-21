import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Alert } from 'react-native';

export default function AboutUs({ navigation }) {

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../../img/painel.png')} style={styles.backImage} blurRadius={0} />
      <Text style={styles.title}>SOBRE NÓS</Text>
      <View style={styles.box}>
        <Text style={styles.sobreNs}>
          Somos uma plataforma dedicada a facilitar a vida das diaristas, oferecendo uma maneira simples e eficiente de organizar suas rotinas e finanças. Com recursos de agendamento e registro financeiro, DiaristaApp é o parceiro ideal para diaristas que buscam praticidade e sucesso em seu dia-a-dia.
        </Text>
      </View>
      <TouchableOpacity onPress={handleNavigateToHome}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
  },
  title: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 70,
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    margin: 20,
    padding: 10,
    borderColor: '#4CAF50#4CAF50',
  },
  sobreNs: {
    textAlign: "justify",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 16,
    width: 294,
    height: 363,
    margin: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: -10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
