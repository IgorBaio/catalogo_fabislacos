import React, {useContext} from 'react'
import styled from 'styled-components/native'
// import HomeIcon from '../assets/home.svg'
// import SearchIcon from '../assets/search.svg'
// import TodayIcon from '../assets/today.svg'
// import FavoriteIcon from '../assets/favorite.svg'
// import AccountIcon from '../assets/account.svg'
// import {UserContext} from '../contexts/UserContext'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert } from 'react-native';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  icon:{
    fontSize:25
  }
})

const TabArea = styled.View`
    height: 60px;
    background-color: rgb(247,171,50);
    flex-direction: row;
    
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items:center;
`;

const TabItemCenter = styled.TouchableOpacity`
width:70px;
height:70px;
justify-content:center;
align-items:center;
background-color:#fff;
border-radius:35px;
border:3px solid #4eadbe;
margin-top:-20px;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius:12px
`;
export default ({state, navigation}) => {

    // const {state:user} = useContext(UserContext)

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    const emConstrucao = () => {
      Alert.alert("Em Construção");
    }
    return (
      <TabArea>
        <TabItem onPress={emConstrucao}>
          <Icon name='home' style={styles.icon} color="#FFF" />
        </TabItem>
        <TabItem onPress={emConstrucao}>
          <Icon name='search' style={styles.icon} color="#FFF" />
        </TabItem>
        
        <TabItem onPress={emConstrucao}>
          <Icon name='message' style={styles.icon} color="#FFF" />
        </TabItem>
        
      </TabArea>
    );
}