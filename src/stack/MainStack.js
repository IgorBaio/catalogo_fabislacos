import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MainPage from "../screens/MainPage";
import MainTab from "./MainTab";
import Preload from "../screens/Preload";

const Stack = createStackNavigator();

export default (props) => {
 
  const NavigatorDefaultConfig = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={NavigatorDefaultConfig}
    >
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="MainTab" component={MainTab} />
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainPage" component={MainPage} />
     <Stack.Screen name="Preload" component={Preload} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
