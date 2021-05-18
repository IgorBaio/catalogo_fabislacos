import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import SignInput from '../../components/SignInput';
import * as firebase from "firebase";
import { styles } from './styles';

export default ({navigation})=> {
  //#region Declarações
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [messageError, setMessageError] = useState(null);
  //#endregion

  //#region Functions
  const createData = () => {
    if (email !== '' && password !== '') {
      try {
        firebase.auth()
       .createUserWithEmailAndPassword(email, password)
       .then(() => {
         navigation.navigate('Login')
       })
       .catch(error => {
         if (error.code === 'auth/email-already-in-use') {
           Alert.alert('Atenção','Este endereço de email já está sendo utilizado!');
         }

         if (error.code === 'auth/invalid-email') {
           Alert.alert('Atenção','Este endereço de email é inválido!');
         }

       });
     } catch (err) {
       Alert.alert("There is something wrong!!!!", err.message);
     }
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
      <TouchableOpacity onPress={createData} style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

