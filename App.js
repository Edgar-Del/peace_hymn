import React from "react";
import RootStack from "./app/routes/RootStack";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const App = () => {
  const [fontLoaded] = useFonts({
    Akaya: require("./app/assets/AkayaTelivigala-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={"red"} barStyle="dark-content" />
        <RootStack />
      </Provider>
    );
  }
};

export default App;
