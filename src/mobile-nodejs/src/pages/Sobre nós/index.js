import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';

export  default function AboutUs(){
    return(
<View style= {styles.container}>
  <StatusBar style="auto" />
  <Image source={require('../../img/painel.png')} style={styles.backImage} blurRadius={0}>
  </Image>
       <Text style={styles.container.title}>SOBRE NÓS</Text>
      <View style={styles.container.box}>
        <Text style={styles.container.sobreNs}> 
         Somos uma plataforma dedicada a facilitar a vida das diaristas, oferecendo uma maneira simples e eficiente de organizar suas rotinas e finanças. Com recursos de agendamento e registro financeiro, DiaristaApp é o parceiro ideal para diaristas que buscam praticidade e sucesso em seu dia-a-dia.
        </Text>
      </View>
      <Button
        title="Voltar para Home"
        color="#89b364"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

   
</View>
    );
    }

const styles = StyleSheet.create({
   
   backImage: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
    height: '10%',
      
    },

    container: {
    box: {borderWidth: 1, margin: 20, borderColor: '#89b364'},
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    title:{fontSize:16, color: '#89b364',},
    border: {borderWidth: 1, borderColor: '#89b364', width: 100,},
    sobreNs: {
      display: "flex",
      textAlign: "Justify",
      fontWeight: "700",
      letterSpacing: 1,
      alignItems: "center",
      fontSize:16, 
      width: 294, 
      height: 363,
      margin: 10
  },

    }  
});