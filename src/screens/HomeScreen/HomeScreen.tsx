import React from 'react';
import {View} from 'react-native';
import HymnListComp from 'components/HymnListComp';
import SearchBarComp from 'components/SearchBarComp';
import {styles} from './HomeScreen.styles';
import {IHomeScreen} from 'screens/HomeScreen/types';

const HomeScreen: IHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchBarComp />
      <HymnListComp navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
