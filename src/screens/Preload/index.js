import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { Title } from "react-native-paper";
import commonStyles from "../../../commonStyles";

export default ({navigation}) => {
  //#region Declarações
  const dispatch = useDispatch()
  //#endregion

  //#region useEffects
  useEffect(() => {
    const checkUser = async () => {
      const emailLogged = await AsyncStorage.getItem("email");
      const passwordLogged = await AsyncStorage.getItem("password");
      const uidLogged = await AsyncStorage.getItem("uid");

      if (emailLogged != null && emailLogged !== ''
        && passwordLogged != null && passwordLogged !== ''
        && uidLogged != null && uidLogged !== '') {
        
        dispatch({
          type: 'login',
          user: {
            email: emailLogged,
            uid: uidLogged
          },

        })
        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        navigation.reset({
          routes: [{ name: "MainPage" }],
        });
      }
    };

    checkUser();
  }, []);
  //#endregion

  return (
    <Container>
      <Title style={{color:'#FFF'}}>Verificando dados</Title>
      <LoadingIcon size="large" color={commonStyles.colors.textButtons} />
    </Container>
  );
};
