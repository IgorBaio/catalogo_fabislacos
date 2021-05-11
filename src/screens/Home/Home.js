import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Carousel from "./components/Carousel";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DATA_CATALOGO } from '../../assets/data/data'
import { Card } from "react-native-paper";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        flex: 1
    },
    drawerMenuIcon: {
        top: '-50%',
        right: '-90%'
    }
})

export default () => {
    return (
        <View style={styles.container} >
            <ScrollView style={{marginBottom:3}}>

                <View style={{
                    top: 250
                }}>
                    <TouchableOpacity style={styles.drawerMenuIcon} onPress={() => { }}>
                        <Icon name="menu" size={30} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF', bottom: 15 }}>Descubra!!!</Text>
                    <Carousel />
                    <View style={{paddingBottom:250}}>

                    {DATA_CATALOGO.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    <Card
                                        style={{
                                            marginBottom: 10,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            elevation: 4,
                                            backgroundColor: '#626262',
                                            flex: 1,

                                            marginHorizontal: 30
                                        }}
                                    >
                                        <Card.Content>
                                            <Card.Cover
                                                source={item.uri}
                                                style={[{
                                                    width: 125,
                                                    height: 150,
                                                    resizeMode: 'contain',
                                                    marginHorizontal: 5
                                                },
                                                parseInt(index + 1, 10) !== DATA_CATALOGO.length - 1 && DATA_CATALOGO[index + 1]?.uri ? 
                                                {
                                                    aspectRatio: 1.0,
                                                } : 
                                                { 
                                                    aspectRatio: 1.5, 
                                                    alignSelf: "center" },

                                                ]}
                                            />
                                            {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> */}
                                            <Text style={styles.textImage}>Teste</Text>
                                        </Card.Content>

                                    </Card>
                                    {parseInt(index + 1, 10) !== DATA_CATALOGO.length - 1 && DATA_CATALOGO[index + 1]?.uri ? (
                                        <Card
                                            style={{
                                                marginBottom: 10,
                                                marginLeft: 5,
                                                marginRight: 5,
                                                elevation: 4,
                                                backgroundColor: '#626262',
                                                flex: 1,
                                                marginHorizontal: 30
                                            }}
                                        >
                                            {console.log(parseInt(index + 1, 10))}
                                            <Card.Content style={{top:15}}>

                                                <Card.Cover
                                                    source={DATA_CATALOGO[index + 1]?.uri}
                                                    style={{
                                                        width: 125,
                                                        height: 150,
                                                        aspectRatio: 1.0,
                                                        resizeMode: 'contain',
                                                        marginHorizontal: 5,
                                                        alignSelf:"center",
                                                    }}
                                                />
                                                {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> */}
                                                <Text style={styles.textImage}>Teste</Text>
                                            </Card.Content>

                                        </Card>
                                    ) : false
                                    }


                                </View>

                            )

                        }

                        return false
                    })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}