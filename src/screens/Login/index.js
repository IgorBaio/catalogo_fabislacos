import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View,ScrollView, SafeAreaView } from 'react-native';
import SignInput from '../../components/SignInput';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import { styles } from './styles';
import { Title } from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';
import { CommonActions } from '@react-navigation/native';
import ROUTES from '../../utils/routes';

export default ({ navigation }) => {
  //#region Declarações
  const [email, setEmail] = useState('igor@email.com')
  const [password, setPassword] = useState('123456789')
  const [messageError, setMessageError] = useState(null);
  //#endregion

  //#region Functions
  const onAuthStateChanged = async () => {
    if (email !== '' && password !== '') {
      setMessageError(null)
      const userAccount = await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert('Atenção', 'Usuário não encontrado');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Atenção', 'Este endereço de email é inválido!');
          }

        });
      if (userAccount === undefined || userAccount === null) return;
      await AsyncStorage.setItem('email', email)
      await AsyncStorage.setItem('password', password)
      await AsyncStorage.setItem('uid', userAccount.user.uid)
      NavigationService.dispatch(
        () => {
          return CommonActions.navigate('AuthedStack', {
            screen: ROUTES.Home,
          });
        }
      );

    } else {
      setMessageError("Preencha os campos")
    }
  }
  //#endregion

  return (
    <SafeAreaView style={styles.container}>
     

          <View style={{ flex: 1, 
            left: -120,
             top: 100
              }}>
            <Text style={{
              fontSize: 40,
              color: '#FFF',
            }}>Entrar</Text>
          </View>
          <View style={{
            flex:2,
            // width: '100%'
            alignSelf:'center'
          }}>
            <SignInput
              IconName='email'
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}

            />
            <SignInput
              IconName='lock'
              placeholder="Digite sua senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              password={true}
            />

          {messageError && <View style={{alignSelf:'center'}}>
            <Text style={styles.messageError}>{messageError}</Text>
          </View>}
          </View>
          <View style={{
            flex:1
          }}>

            <TouchableOpacity onPress={onAuthStateChanged} style={styles.enterButton}>
              <Text style={styles.enterButtonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginVertical: 20, alignSelf: 'center' }}>
              <Text style={[styles.textToRegister, {color: '#E07879'}]}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ top: 20, alignSelf: 'center' }}>
              <Text style={styles.textToRegister}>Novo por aqui? Clique para cadastrar</Text>
            </TouchableOpacity>
          </View>

    </SafeAreaView>
  );
}

