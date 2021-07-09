import React, { useContext } from 'react'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Alert, View } from 'react-native';
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { TabArea, TabItem } from './styles';

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    padding: 10
  }
})

export default ({ state, navigation }) => {
  const page = useSelector(state => state.save.page)
  const dispatch = useDispatch()

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
        goTo('Search')
        
      }}>
        <MaterialIcons name='search'
          style={[styles.icon, { backgroundColor: page === 1 ? 'rgba(224,120,121,0.4)' : '#353535' }]}
          color={page === 1 ? "#ECCC23" : "#FFF"} />
      </TabItem>

      <TabItem onPress={() => {
        dispatch({
          type: 'page',
          page: 2
        })
        emConstrucao()
        }}>
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