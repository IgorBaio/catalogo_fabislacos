import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { Title } from "react-native-paper";
import commonStyles from "../../../commonStyles";
import NavigationService from "../../navigation/NavigationService";
import ROUTES from "../../utils/routes";
import { CommonActions } from "@react-navigation/native";
import useProdutos from "../../hooks/useProdutos";

export default ({ navigation }) => {
  //#region Declarações
  const dispatch = useDispatch();
  const { produtos } = useProdutos();
  //#endregion

    useEffect(() => {
      dispatch({
        type: 'set_photos_data',
        produtos
      })
  }, [produtos]);

  //#region useEffects
  useEffect(() => {
    const checkUser = async () => {
      const emailLogged = await AsyncStorage.getItem("email");
      const passwordLogged = await AsyncStorage.getItem("password");
      const uidLogged = await AsyncStorage.getItem("uid");

      if (
        emailLogged != null &&
        emailLogged !== "" &&
        passwordLogged != null &&
        passwordLogged !== "" &&
        uidLogged != null &&
        uidLogged !== ""
      ) {
        // dispatch({type:'set_initials_state'});
        dispatch({
          type: "login",
          user: {
            email: emailLogged,
            uid: uidLogged,
          },
        });
        NavigationService.dispatch(
          () => {
            return CommonActions.navigate('AuthedStack', {
              screen: ROUTES.Home,
            });
          }
        );
       
      } else {
        NavigationService.dispatch(
          () => {
            return CommonActions.navigate('NotAuthedStack', {
              screen: ROUTES.Home,
            });
          }
        );
      }
    };

    checkUser();
  }, []);
  //#endregion

  return (
    <Container>
      <Title style={{ color: "#FFF" }}>Verificando dados</Title>
      <LoadingIcon size="large" color={commonStyles.colors.textButtons} />
    </Container>
  );
};
