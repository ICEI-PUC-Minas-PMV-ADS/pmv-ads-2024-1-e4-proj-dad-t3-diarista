import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Notificacoes() {
  const navigation = useNavigation();

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Você não deixou as notificações ativas');
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();

    console.log(token);
  };

  const navigateToAgendamento = () => {
    navigation.navigate('Agendamento'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]} 
        onPress={navigateToAgendamento} 
      >
        <Text style={styles.buttonText}>Tarefa agendada</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 0,
    backgroundColor: '#89b364',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
