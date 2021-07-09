import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Carousel from "./components/Carousel";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DATA_CATALOGO } from "../../assets/data/data";
import { Card, TextInput } from "react-native-paper";
import Logo from "../../assets/imgs/image_9.svg";
import SignInput from "../../components/SignInput";
import Gallery from "../../components/Gallery";

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
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default () => {
  const [searchProduto, setSearchProduto] = useState();
  const [data, setData] = useState(DATA_CATALOGO);

  const _onSearch = (text) => {
    setSearchProduto(text);

    text = text.toLowerCase();
    let found = DATA_CATALOGO.map((item) => {
      if (item.name.toLowerCase().includes(text)) {
        return item;
      }
    });
    found.forEach((i) => console.log(i?.name.toLocaleLowerCase()));
    if (!text || text === "") {
      setData(DATA_CATALOGO);
    } else {
      found = found.filter((f) => f !== undefined && f !== null);
      setData(found);
    }
  };

  

  return (
    <View style={styles.container}>
      <View
        style={{
          left: 20,
          top: 70,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#E07879",
          }}
        >
          Procurar
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          top: 90,
        }}
      >
        <SignInput
          placeholder="Encontre o seu produto"
          value={searchProduto}
          onChangeText={_onSearch}
          borderColor="#E07879"
        />
      </View>

      <ScrollView style={{ marginBottom: 3, marginTop: "30%" }}>
        <View
          style={{
            top: 20,
          }}
        >
          <View style={{ paddingBottom: 250 }}>
            <Gallery DATA={data} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
