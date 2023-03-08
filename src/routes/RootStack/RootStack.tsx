import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from 'screens/HomeScreen';
import DetailsScreen from 'screens/DetailsScreen';
import {RootStackParamsList} from 'routes/RootStack/types';

const Stack = createStackNavigator<RootStackParamsList>();

const {Navigator, Screen} = Stack;

const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
