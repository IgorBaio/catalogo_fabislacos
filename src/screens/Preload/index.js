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
import { LOGIN, SET_PHOTOS_DATA } from "../../store/actions/types";
import { setProducts } from "../../store/actions";

export default ({ navigation }) => {
  //#region Declarações
  const dispatch = useDispatch();
  const { produtos } = useProdutos();
  //#endregion

    useEffect(() => {
      // dispatch({
      //   type: SET_PHOTOS_DATA,
      //   produtos
      // })//TODO Testar se deu certo
      dispatch(setProducts(produtos))
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
          type: LOGIN,
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
