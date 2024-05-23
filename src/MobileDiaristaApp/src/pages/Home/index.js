import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';



export  default function Home(){
    return(
  <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../../img/painel.png')} style={styles.backImage} blurRadius={0}>
      </Image>
      <View style={styles.container.box}>
       <Image source={require('../../img/foto.png')} style={styles.foto} blurRadius={0}>
      </Image>
       </View>
      <View style={styles.container.buttons}>
        <Text style={styles.buttonsText}> ENTRAR </Text>
      </View>
      <View style={styles.container.buttons}>
        <Text style={styles.buttonsText1}> Sobre nós </Text>
      </View>
      
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

    foto: {
      width: '250px',
     height: '320px', 

    },
  container: {
      box:{
    padding: 100,


      },

   
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    buttons: {
      width: 281,
      height: 42,
      borderRadius: 5,
      backgroundColor: '#89b364',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      color: '#FFFF',
      
  },

  



  
  }

  
   
});