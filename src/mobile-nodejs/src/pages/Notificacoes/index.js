import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as Notifications from "expo-notifications";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,

    }),
});

export  default function Notificacoes() {
const handleCallNotifications = async () =>{
const {status} = await Notifications.getPermissionsAsync();

if (status !== 'granted'){
    Alert.Alert("Você não deixou as notificações ativas");
    return;
}
const token = await Notifications.getExpoPushTokenAsync();

console.log(token);

};
    return(
<View style= {styles.container}>
    <Text style= {styles.title}>Notificacoes</Text>
    <Button title= "Tarefa agendada" style={styles.button}
    onPress={handleCallNotifications}/>
   
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
    },
    button: {
     padding: 20,
     fontSize: 20,
     fontWeight: "bold",
    },
});