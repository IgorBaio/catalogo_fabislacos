import {StyleSheet} from 'react-native';
import commonStyles from '../../../commonStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textToRegister: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    },
    enterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E07879'
    },
    enterButton: {
        backgroundColor: commonStyles.colors.secundary,
        height: 40,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf:'center',
        
    },
    messageError: {
        color: '#FF0000',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18
    }
  });