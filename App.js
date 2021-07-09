import React from "react";
import { Provider } from "react-redux";
// import App from "./App";
import { configureSaveReducer } from "./src/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stack/MainStack";
import * as firebase from "firebase";
import { LogBox, StatusBar } from "react-native";
import Main from "./src/navigation/Main";

const firebaseConfig = {
  apiKey: "AIzaSyBVw26Xr_I-ry6ejYxAaeOZ_01I4_oxKjE",
  authDomain: "catalogofabislacos.firebaseapp.com",
  projectId: "catalogofabislacos",
  storageBucket: "catalogofabislacos.appspot.com",
  messagingSenderId: "503577431829",
  appId: "1:503577431829:web:751b5ccb76f3331fbae31c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default () => {
  const store = configureSaveReducer();
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
};
