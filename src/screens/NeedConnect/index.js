import { CommonActions } from '@react-navigation/native'
import React from 'react'
import {  Text, View, StyleSheet } from 'react-native'
import { Container } from './styles'
import { Headline, Button } from 'react-native-paper'
import ROUTES from '../../utils/routes'
import NavigationService from '../../navigation/NavigationService'

export default () => {

    const handleConnectClick = async () => {
        NavigationService.dispatch(
            () => {
              return CommonActions.navigate('AuthenticatingStack', {
                screen: ROUTES.MainPage,
              });
            }
          );
    }
    
    return (
        <Container>
            <View style={{ margin: 50 }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 40
                }}>

                    <Headline style={{
                        marginVertical: 10,
                        color:'#fff',
                        fontWeight:'bold'
                    }}>Você precisa estar logado para acessar esta página</Headline>
                    
                </View>

            </View>
                <Button mode='contained' style={{
                    borderWidth:2,
                    borderColor:'#E07879',
                    top:'20%',
                    bottom: 0
                    }}  color='#FFE8EF' onPress={handleConnectClick} >
                    <Text style={{
                        color:'#000',
                        fontWeight:'bold',
                        fontSize:18
                        
                    }}>
                        Conectar
                    </Text>
                </Button>
        </Container>
    )
}
const styles = StyleSheet.create({
    formContainer:{
        justifyContent: 'flex-start',
    }
});