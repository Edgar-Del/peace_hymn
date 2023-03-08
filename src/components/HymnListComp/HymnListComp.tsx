import {IHymnListComp} from 'components/HymnListComp/types';
import colors from 'configs/colors';
import {selectSearchData} from 'features/searchSlice';
import useAppSelector from 'hooks/useAppSelector';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {List, TouchableRipple, useTheme} from 'react-native-paper';
import HYMNS from 'utils/hymns.json';
import styles from './HymnListComp.styles';

const HymnListComp: IHymnListComp = ({navigation}) => {
  const theme = useTheme();
  const {fonts} = theme;
  const {searchData} = useAppSelector(selectSearchData);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {HYMNS.filter(val => {
          if (searchData === '') {
            return val;
          } else if (
            val.id.toString().includes(searchData.toLowerCase()) ||
            val.title.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return val;
          } else {
            return null;
          }
        }).map((item, index) => (
          <TouchableRipple
            key={index}
            style={styles.hymnCard}
            borderless={true}
            rippleColor={colors.peaceRed}
            onPress={() =>
              navigation.navigate('details', {
                title: item.title,
                verses: item.verses,
                chorus: item.chorus,
              })
            }>
            <List.Item
              title={item.title}
              titleStyle={fonts.regular}
              descriptionStyle={fonts.light}
              description={`author: ${item.author.toLowerCase()}`}
              left={props => (
                <View style={styles.listIconView}>
                  <Text {...props}>{item.id}</Text>
                </View>
              )}
            />
          </TouchableRipple>
        ))}
      </ScrollView>
    </View>
  );
};

export default HymnListComp;
