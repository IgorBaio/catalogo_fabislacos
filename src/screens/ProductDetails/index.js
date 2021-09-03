import React, { useState } from 'react';
import { Share, StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#363636",
        flex: 1,
    },
    drawerMenuIcon: {
        top: "-50%",
        right: "-90%",
    },
    textImage: {
        paddingHorizontal: "10%",
        top: 5,
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 22,

        alignSelf: 'center'
    },
    label: {
        color: 'wheat'
    },
    descriptionLabel: {
        paddingHorizontal: "10%",
        marginTop: 20,
        marginBottom: 8,
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 22,
        textDecorationLine: "underline",
        alignSelf: 'center'
    }
});

export default ({ route, dispatch }) => {
    const { item } = route.params
    const [quantity, setQuantity] = useState(1)
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const addCart = () => { }
    return (<>
        <Card style={{ height: '100%', width: '100%', backgroundColor: '#363636' }}>

            <Card.Content style={{ top: '5%' }}>
                <Card.Cover
                    source={{ uri: item.produto.file.base64 }}
                    style={[
                        {
                            width: '40%',
                            height: '40%',
                            resizeMode: "center",
                            marginHorizontal: 5,
                            aspectRatio: 1.0,
                            alignSelf: "center",
                        }
                    ]}
                />
                <ScrollView style={{ marginBottom: 150 }}>
                    <Text style={styles.textImage}>
                        <Text style={styles.label, { textDecorationLine: "underline", color: 'wheat' }}>
                            Nome:</Text> {item.produto.nome}
                    </Text>
                    <Text style={[styles.descriptionLabel, styles.label]}>Descrição do produto: </Text>
                    <Text style={[styles.textImage, { fontSize: 20 }]}>{item.produto.descricao}</Text>
                    <Text style={styles.textImage}>
                        <Text style={styles.label, { textDecorationLine: "underline", color: 'wheat' }}>
                            Preço:</Text> {item.produto.preco}
                    </Text>
                    <Text style={[styles.textImage]}>
                        <Text style={styles.label, { textDecorationLine: "underline", color: 'wheat' }}>
                            Quantidade:</Text>
                    </Text>
                    <View style={[styles.textImage, { width: '90%', justifyContent: 'space-evenly', marginTop: '2%', flexDirection: 'row' }]}>

                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: 'white',
                                    width: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 10,
                                    // marginRight:'10%'
                                }}
                            onPress={() => setQuantity(quantity - 1)}>
                            <Text style={{ fontSize: 18 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={[styles.textImage, { fontSize: 18 }]}>
                            {quantity}
                        </Text>
                        <TouchableOpacity style={
                            {
                                backgroundColor: 'white',
                                width: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10,
                            }}
                            onPress={() => setQuantity(quantity + 1)}
                        ><Text>+</Text></TouchableOpacity>
                    </View>
                    <Button mode='contained' style={{ marginTop: 15, marginBottom: 40 }} onPress={addCart}>
                        <Text>Adicionar ao carrinho</Text>
                    </Button>
                </ScrollView>
            </Card.Content>

        </Card>
    </>)
}