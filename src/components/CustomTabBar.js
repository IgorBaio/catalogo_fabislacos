import React, { useContext } from 'react'
import styled from 'styled-components/native'
// import HomeIcon from '../assets/home.svg'
// import SearchIcon from '../assets/search.svg'
// import TodayIcon from '../assets/today.svg'
// import FavoriteIcon from '../assets/favorite.svg'
// import AccountIcon from '../assets/account.svg'
// import {UserContext} from '../contexts/UserContext'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Alert, View } from 'react-native';
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    padding: 10
  }
})

const TabArea = styled.View`
    height: 60px;
    background-color: #353535;
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
export default ({ state, navigation }) => {
  const page = useSelector(state => state.save.page)
  const dispatch = useDispatch()
  // const {state:user} = useContext(UserContext)

  const goTo = (screenName) => {
    navigation.navigate(screenName)
  }

  const emConstrucao = () => {
    Alert.alert("Em Construção");
  }
  return (
    <TabArea>
      <TabItem onPress={() => {
        dispatch({
          type: 'page',
          page: 0
        })
        goTo('Home')
      }}>
        <MaterialIcons name='home' size={30}
          style={[
            styles.icon,
            { backgroundColor: page === 0 ? 'rgba(224,120,121,0.4)' : '#353535' }]}
          color={page === 0 ? "#ECCC23" : "#ED6F72"} />
      </TabItem>
      <TabItem onPress={() => {
        dispatch({
          type: 'page',
          page: 1
        })
        
      }}>
        <MaterialIcons name='search'
          style={[styles.icon, { backgroundColor: page === 1 ? 'rgba(224,120,121,0.4)' : '#353535' }]}
          color={page === 1 ? "#ECCC23" : "#FFF"} />
      </TabItem>

      <TabItem onPress={() => {
        dispatch({
          type: 'page',
          page: 2
        })}}>
        <MaterialCommunityIcons name='chat'
          style={[styles.icon, { backgroundColor: page === 2 ? 'rgba(224,120,121,0.4)' : '#353535' }]}
          color={page === 2 ? "#ECCC23" : "#ED6F72"} />
      </TabItem>
      <TabItem onPress={() => {
        dispatch({
          type: 'page',
          page: 3
        })
        goTo('Profile')
        }}>
        <FontAwesome5 name='user-alt'
          style={[styles.icon, { backgroundColor: page === 3 ? 'rgba(224,120,121,0.4)' : '#353535' }]}
          color={page === 3 ? "#ECCC23" : "#FFF"} />
      </TabItem>

    </TabArea>
  );
}