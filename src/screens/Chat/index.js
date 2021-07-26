import React, { useEffect, useRef, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import useMessages from "../../hooks/useMessages";
import MessagingService from "../../services/Messaging";
import * as firebase from "firebase";
import ChatInput from "../../components/ChatInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderLogo from "./components/Header";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    flex: 1,
  },
  messages: {
    padding: 10,
    margin: 10,
    marginTop: 25,
  },
  message: {
    borderRadius: 7,
    margin: 5,
    width: "70%",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  textMessage: {
    marginVertical: 8,
    padding: 3,
    fontSize: 15,
    textAlign: "left",
    width: "100%",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#000",
    fontWeight: "400",
  },
  messageSender: {
    padding: 5,
    backgroundColor: "rgba(252,220,244,0.7)",
    borderRadius: 7,
  },
  input: {
    flexGrow: 1,
    borderRadius: 7,
    padding: 8,
    flexWrap: "wrap",
    fontSize: 15,
    color: "#000",
  },
});

export default ({ navigation }) => {
  const user = useSelector((state) => state.save.user);
  const { messages } = useMessages();
  const ref = useRef(null);

  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    messages: [],
  });

  useEffect(()=>{
    const getData = async () =>{
        const nome = await AsyncStorage.getItem('nome') || 'Nome'
        const uriProfile = await AsyncStorage.getItem('uriProfile') || require('../../assets/imgs/genericProfile.png')
        setState({...state, nome, uri:uriProfile})
    }
    getData()
    },[])

  function handleSubmit() {
    if (!!message) {
      MessagingService.sendMessage(message, user, firebase);
      setMessage("");
    }
  }
  const getUser = () => {
    return {
      _id: user.uid,
      name: navigation.state.params.name,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
        <HeaderLogo image={require("../../assets/imgs/logoChatHeader.png")} nome={'Fabis Laços'}/>
      <ScrollView>
        <View style={styles.messages} ref={ref}>
          {messages.map((message) => {
            const user = firebase.auth().currentUser;
            const styleMessage = styles.message;
            const messageClass =
              message.user.uid === user.uid
                ? {
                    ...styleMessage,
                    backgroundColor: "rgba(254,217,217,0.7)",
                    alignSelf: "flex-end",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }
                : {
                    ...styleMessage,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    textAlign: "left",
                    alignSelf: "flex-start",
                  };

            return (
            //   <View style={{ flexDirection: "row" }}>
                <View key={message.key} style={messageClass}>
                  <Text style={[styles.textMessage]}>{message.message}</Text>
                </View>
              /* </View> */
            );
            //#region se colocar imagem, esse é o caminho
        //     message.user.uid === user.uid ? (
        //         <View style={{justifyContent:'center', alignItems:'center', flexDirection: "row"}}>
        //           <View key={message.key} style={messageClass}>
        //             <Text style={[styles.textMessage]}>
        //               {message.message}
        //             </Text>
        //           </View>
        //           <Image
        //             style={{
        //               height: 25,
        //               width: 25,
        //               borderRadius: 75,
        //             }}
        //             source={
        //               state.uri?.toString().includes("file")
        //                 ? { uri: state.uri }
        //                 : state.uri
        //             }
        //           />
        //         </View>
        //       ) : (
        //         <View style={{justifyContent:'center', alignItems:'center', flexDirection: "row"}}>
        //           <Image
        //             style={{
        //               height: 25,
        //               width: 25,
        //               borderRadius: 75,
        //             }}
        //             source={ require("../../assets/imgs/unknn.png") }
        //           />
        //           <View key={message.key} style={messageClass}>
        //             <Text style={[styles.textMessage]}>
        //               {message.message}
        //             </Text>
        //           </View>
        //         </View>
        //       )
        //   );
        //#endregion
          })}
        </View>
      </ScrollView>

      <KeyboardAvoidingView>
        <ChatInput
          styleView={styles.messageSender}
          value={message}
          placeholder="Escreva sua mensagem..."
          placeholderTextColor="#000"
          onChangeText={(e) => setMessage(e)}
          IconName="send"
          styleInput={styles.input}
          onPress={handleSubmit}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
