import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View,ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import { styles } from './styles';
import { Button } from 'react-native-paper';
import commonStyles from '../../../commonStyles';

export default ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/imgs/background.png')} style={{top:30,height:'98%', width:'100%'}} >
        <View style={{
            flexDirection:'row',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            flex:4,
            top:250
          }}>

            
            <Button mode='outlined' onPress={() => navigation.navigate('Login')} 
                style={{ 
                    margin: 20, 
                    alignSelf: 'center', 
                    backgroundColor: commonStyles.colors.background,
                    borderWidth: 2,
                    borderColor:'#000',
                    width:'40%'
                    }}>
              <Text style={[styles.textToRegister, {color: '#FFF'}]}>Entrar</Text>
            </Button>
            <Button mode='contained' onPress={() => navigation.navigate('Register')} 
            style={{ 
                margin: 20, 
                alignSelf: 'center',
                backgroundColor: commonStyles.colors.secundary,
                borderWidth: 2,
                borderColor:'#000',
                width:'40%'
            }}>
              <Text style={[styles.textToRegister, {color: commonStyles.colors.textButtons}]}>Cadastrar</Text>
            </Button>
          </View>
            </ImageBackground>

          

    </SafeAreaView>
  );
}

