import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Container } from './styles'
import { Title, Headline, Button, TextInput } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import BottomModal from '../../components/BottomModal/BottomModal'
import ROUTES from '../../utils/routes'
import NavigationService from '../../navigation/NavigationService'

export default () => {
    const [state,setState] = useState({})
    const [modalNameVisibility, setModalNameVisibility] = useState(false)
    useEffect(()=>{
        const getData = async () =>{
            const email = await AsyncStorage.getItem('email')
            const uriProfile = await AsyncStorage.getItem('uriProfile') || require('../../assets/imgs/genericProfile.png')
            setState({...state,email, nome: 'Nome', uri:uriProfile})
        }
        getData()
    },[])

    const handleLogoutClick = async () => {
        await AsyncStorage.setItem('email', '')
        await AsyncStorage.setItem('password', '')
        await AsyncStorage.setItem('uid', '')
        NavigationService.dispatch(
            () => {
              return CommonActions.navigate('NotAuthedStack', {
                screen: ROUTES.Home,
              });
            }
          );
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setState({...state, uri:result.uri})
          await AsyncStorage.setItem('uriProfile',result.uri)
        }
      };

    return (
        <Container>
            <View style={{ top: 50 }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: 20
                }}>

                    <Image
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 75,
                            alignSelf: 'center'
                        }}
                        source={state.uri?.toString().includes('file') ? {uri:state.uri} : state.uri} />
                    <TouchableOpacity onPress={pickImage} >
                        <Text style={{
                            marginLeft: 15,
                            fontSize: 18,
                            textDecorationLine: 'underline',
                            color:'#fff'
                        }}>
                            Editar
                </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10,
                    left: 20
                }}>

                    <Title style={{
                        fontSize: 30,
                        color:'#fff',
                        fontWeight:'bold'
                    }}>{state.nome}</Title>
                    <TouchableOpacity onPress={()=>setModalNameVisibility(true)} >
                        <Text style={{
                            marginLeft: 15,
                            fontSize: 18,
                            textDecorationLine: 'underline',
                            color:'#fff',
                            fontWeight:'bold'
                        }}>
                            Editar
                </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 40
                }}>

                    <Headline style={{
                        marginVertical: 10,
                        color:'#fff',
                        fontWeight:'bold'
                    }}>Juiz de Fora - MG</Headline>
                    <Headline style={{
                        marginVertical: 10,
                        color:'#fff',
                        fontWeight:'bold'
                    }}>{state.email}</Headline>
                </View>

                <Button mode='contained' style={{
                    borderWidth:2,
                    borderColor:'#E07879',
                    top:150
                    }}  color='#FFE8EF' onPress={handleLogoutClick} >
                    <Text style={{
                        color:'#000',
                        fontWeight:'bold',
                        fontSize:18
                        
                    }}>
                        Sair
                    </Text>
                </Button>
            </View>
           
            <KeyboardAvoidingView>

            <BottomModal 
                modalVisible={modalNameVisibility}
                setModalVisible={setModalNameVisibility}
                title={"Digite o Nome:"}
                content={<TextInput 
                    label="Nome"
                    style={{ backgroundColor:'#fff', width:'100%' }}
                    onChangeText={(text)=>setState({...state,nome:text})}
                  />}
            />
           
            </KeyboardAvoidingView>

        </Container>
        
    )
}
const styles = StyleSheet.create({
    formContainer:{
        justifyContent: 'flex-start',
    }
    
});