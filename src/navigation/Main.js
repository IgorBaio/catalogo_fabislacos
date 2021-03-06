import React, { memo, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef } from "./NavigationService";
import Home from "../screens/Home/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import CustomTabBar from "../components/CustomTabBar";
import Search from "../screens/Search";
import ROUTES from "../utils/routes";
import Profile from "../screens/Profile";
import Preload from "../screens/Preload";
import MainPage from "../screens/MainPage";
import NeedConnect from "../screens/NeedConnect";
import Chat from "../screens/Chat";
import Header from "../screens/Chat/components/Header";
import ProductDetails from "../screens/ProductDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = memo(() => {
  const NavigatorDefaultConfig = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  };

  const NotAuthedStack = () => (
    <Tab.Navigator
      initialRouteName={ROUTES.Preload}
      headerMode={"screen"}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={NavigatorDefaultConfig}
    >
      <Tab.Screen
        name={ROUTES.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.Preload}
        component={Preload}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name={ROUTES.Search}
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.Chat}
        component={NeedConnect}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        component={NeedConnect}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={"Details"}
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  const AuthenticatingStack = () => (
    <Stack.Navigator
      headerMode={"screen"}
      initialRouteName={MainPage}
      screenOptions={{ ...NavigatorDefaultConfig, headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.MainPage}
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.Register}
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  const AuthedStack = () => (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode={"screen"}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={NavigatorDefaultConfig}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <Header />
          
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          headerTitle: () => <Header />
          
        })}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }) => ({
          headerTitle: () => <Header />
          
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerTitle: () => <Header />
          
        })}
      />
      <Tab.Screen
        name="Details"
        component={ProductDetails}
        options={({ navigation }) => ({
          headerTitle: () => <Header />
          
        })}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={NavigatorDefaultConfig}
        initialRouteName={"NotAuthedStack"}
      >
        <Stack.Screen name="NotAuthedStack" component={NotAuthedStack} />
        <Stack.Screen name="AuthedStack" component={AuthedStack} />
        <Stack.Screen
          name="AuthenticatingStack"
          component={AuthenticatingStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
