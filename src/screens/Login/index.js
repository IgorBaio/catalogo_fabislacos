import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import SignInput from '../../components/SignInput';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import { styles } from './styles';

export default ({ navigation }) => {
  //#region Declarações
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      navigation.navigate("Home")
      
    } else {
      setMessageError("Preencha os campos")
    }
  }
  //#endregion

  return (
    <View style={styles.container}>
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
      {messageError && <View>
        <Text style={styles.messageError}>{messageError}</Text>
      </View>}
      <TouchableOpacity onPress={onAuthStateChanged} style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ top: 20 }}>
        <Text style={styles.textToRegister}>Novo por aqui? Clique para cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

