import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login'); 
  };

  const handleNavigateToSobreNos = () => {
    navigation.navigate('SobreNos'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../../img/painel.png')} style={styles.backImage} blurRadius={0} />
      <View style={styles.fotoContainer}>
        <Image source={require('../../img/foto.png')} style={styles.foto} blurRadius={0} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToLogin} 
        >
          <Text style={styles.buttonsText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToSobreNos} 
        >
          <Text style={styles.buttonsText}>Sobre nós</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    borderColor: '#000',
  },
  fotoContainer: {
    marginTop: 40,
  },
  foto: {
    width: 250,
    height: 330,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    width: 120,
    height: 42,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonsText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
