import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { configureSaveReducer } from "./src/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stack/MainStack";

export default () => {
    const store = configureSaveReducer();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </Provider>
    )
}