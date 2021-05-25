import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MainPage from "../screens/MainPage";
import MainTab from "./MainTab";
// import Barber from "../screens/Barber";

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerShown: false,
      }}
    >
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="MainTab" component={MainTab} />
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainPage" component={MainPage} />
     {/* <Stack.Screen name="Barber" component={Barber} /> */}
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
