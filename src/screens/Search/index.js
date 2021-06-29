import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Carousel from "./components/Carousel";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DATA_CATALOGO } from '../../assets/data/data'
import { Card, TextInput } from "react-native-paper";
import Logo from "../../assets/imgs/image_9.svg";
import SignInput from "../../components/SignInput";
import { useEffect } from "react";

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
    const [produto, setProduto] = useState()
    const [data, setData] = useState(DATA_CATALOGO)
    useEffect(()=>{
        
    },[produto])

    return (
        <View style={styles.container} >
            <View style={{
                // flex: 1,
                left: 20,
                top: 70
            }}>
                <Text style={{
                    fontSize: 40,
                    color: '#E07879',
                }}>Procurar</Text>
            </View>
            <View style={{
                // flex: 1,
                // width: '100%'
                alignSelf: 'center',
                top:90
            }}>
                <SignInput
                    placeholder="Encontre o seu produto"
                    value={produto}
                    onChangeText={(text) => setProduto(text)}
                    borderColor='#E07879'
                />
            </View>

                <ScrollView style={{ marginBottom: 3, marginTop:'30%' }}>

                    <View style={{
                        top: 20
                    }}>
                        
                        <View style={{ paddingBottom: 250 }}>

                            {data.map((item, index) => {
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
                                                            width: '70%',
                                                            height: 150,
                                                            resizeMode: 'contain',
                                                            marginRight: 3
                                                        },
                                                        parseInt(index + 1, 10) !== data.length - 1 && data[index + 1]?.uri ?
                                                            {
                                                                aspectRatio: 1.0,
                                                            } :
                                                            {
                                                                aspectRatio: 1.5,
                                                                alignSelf: "center"
                                                            },

                                                        ]}
                                                    />
                                                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> */}
                                                    <Text style={styles.textImage}>{item.name}</Text>
                                                </Card.Content>

                                            </Card>
                                            {parseInt(index + 1, 10) !== data.length - 1 && data[index + 1]?.uri ? (
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
                                                    <Card.Content style={{ top: 15 }}>

                                                        <Card.Cover
                                                            source={data[index + 1]?.uri}
                                                            style={{
                                                                width: '70%',
                                                                height: 150,
                                                                aspectRatio: 1.0,
                                                                resizeMode: 'contain',
                                                                marginHorizontal: 5,
                                                                alignSelf: "center",
                                                            }}
                                                        />
                                                        {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> */}
                                                        <Text style={styles.textImage}>{item.name}</Text>
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