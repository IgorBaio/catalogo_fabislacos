import React, { useEffect } from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Carousel from "./components/Carousel";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DATA_CATALOGO } from '../../assets/data/data'
import { Card } from "react-native-paper";
import Logo from "../../assets/imgs/logoChatHeader.png";
import Gallery from "../../components/Gallery";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        flex: 1
    },
    drawerMenuIcon: {
        top: '-50%',
        right: '-90%'
    },
    textImage:{
        paddingHorizontal:'10%',
        top:5,
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18,
        textDecorationLine:'underline'
    }
})

export default () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        (async ()=> dispatch({type:'page', page:0}))
        ();
    },[])

    return (
        <View style={styles.container} >
            <ScrollView style={{paddingBottom:130, marginBottom:3}}>
                <Image source={Logo} style={{
                    width:'90%',
                    height:'15%',
                    alignSelf:"center",
                    opacity:0.8,
                    top:35,
                    resizeMode:'contain'
                }} />
                <View style={{
                    top: 40 ,
                    marginBottom:180
                }}>
                    <TouchableOpacity style={styles.drawerMenuIcon} onPress={() => { }}>
                        <Icon name="menu" size={30} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF', bottom: 15 }}>Descubra!!!</Text>
                    <Carousel />
                    <View style={{paddingBottom:250}}>

                    <Gallery
                        DATA={DATA_CATALOGO}
                    />

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}