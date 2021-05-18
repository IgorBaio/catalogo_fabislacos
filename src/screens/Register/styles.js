import {StyleSheet} from 'react-native';
import commonStyles from '../../../commonStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageError: {
        color: '#FF0000',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18
    },
    enterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: commonStyles.colors.subText
    },
    enterButton: {
        backgroundColor: commonStyles.colors.tertiary,
        height: 40,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
  });