import {theme} from 'configs/themeConfig';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from 'features/store';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import RootStack from './src/routes/RootStack';

const App = () => {
  const customFonts = {
    quicksand_bold: require('assets/fonts/Quicksand_bold.ttf'),
    quicksand_medium: require('assets/fonts/Quicksand_medium.ttf'),
  };

  const [appIsReady, setAppIsReady] = useState(false);

  const prepare = async (): Promise<void> => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(customFonts);
    } catch (error) {
      console.warn(error);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={'red'} barStyle="dark-content" />
          <RootStack />
        </PaperProvider>
      </Provider>
    );
  }
};

export default App;
