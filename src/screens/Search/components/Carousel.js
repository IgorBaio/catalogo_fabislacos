import React from "react";
import { Card } from "react-native-paper";
import { FlatList, Image, ScrollView, Text,StyleSheet } from "react-native";
import {DATA_DESTAQUE} from '../../../assets/data/data'


const styles = StyleSheet.create({
    image:{
        resizeMode:'contain',
        
    },
    textImage:{
        left:'10%',
        top:5,
        color:'#FFF',
        fontWeight:'bold',
        fontSize:20,
        textDecorationLine:'underline'
    }
})

export default ()=>{
    return (
        <ScrollView horizontal style={{marginBottom:20}}>
            {DATA_DESTAQUE.map((item,index)=>{
                return (

            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={item.uri}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> */}
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
                )
            })}
            {/* <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
            <Card
                style={{
                    marginBottom:10,
                    marginLeft:5,
                    marginRight:5,
                    elevation:4,
                    backgroundColor:'#626262',
                    // flex:1,
                    marginHorizontal:30
                }}
            >
                <Card.Content>
                    <Card.Cover 
                        source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}}
                        style={{
                            width:125,
                            height:150,
                            aspectRatio:1.5,
                            resizeMode:'contain',
                            marginHorizontal:5
                        }}
                        />
                    {/* <Image style={styles.image} source={{uri:'https://img.ibxk.com.br/ms/images/highlights/000/051/496/48571.jpg?w=704&h=264&mode=crop&scale=both'}} /> 
                    <Text style={styles.textImage}>Teste</Text>
                </Card.Content>
            </Card>
        */}
        </ScrollView>
    )
}