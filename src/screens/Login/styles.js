import {StyleSheet} from 'react-native';
import commonStyles from '../../../commonStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.colors.secundary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textToRegister: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    enterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: commonStyles.colors.subText
    },
    enterButton: {
        backgroundColor: commonStyles.colors.tertiary,
        height: 40,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    messageError: {
        color: '#FF0000',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18
    }
  });