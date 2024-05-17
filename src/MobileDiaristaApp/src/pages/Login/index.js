import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',      
    },
    text: {
        fontSize: 24,
    },
});
