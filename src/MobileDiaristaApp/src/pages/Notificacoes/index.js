import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export  default function Notificacoes()



{
    return(
<View style= {styles.container}>
    <Text style= {styles.title}>Notificacoes</Text>
   
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
    }
});