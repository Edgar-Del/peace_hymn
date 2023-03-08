import React from 'react';
import {Entypo} from '@expo/vector-icons';
import {Pressable, ScrollView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Headline, Surface, Text} from 'react-native-paper';
import {toRoman} from 'roman-numerals';
import styles from './DetailsScreen.styles';
import type {IDetailsScreen} from './types';
import {useTheme} from 'react-native-paper';
import colors from 'configs/colors';

const DetailsScreen: IDetailsScreen = ({route, navigation}) => {
  const theme = useTheme();
  const {fonts} = theme;
  const {verses, chorus, title} = route.params;
  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.headerView}>
        <Pressable onPress={() => navigation.navigate('home')}>
          <Entypo name="chevron-left" size={24} color={colors.peaceWhite} />
        </Pressable>

        <Text style={{...fonts.regular, ...styles.titleStyle}}>{title}</Text>
      </Animatable.View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {chorus.length <= 0 ? null : (
          <View style={styles.chorusView}>
            <Headline style={fonts.regular}>Chorus</Headline>
            <Surface style={styles.itemBox}>
              {chorus.map((line, i) => (
                <Text key={i} style={{...styles.itemText, ...fonts.light}}>
                  {line}
                </Text>
              ))}
            </Surface>
          </View>
        )}
        <View style={styles.verseView}>
          <Headline style={fonts.regular}>Verses</Headline>
          {verses.map((item, index) => (
            <Surface key={index} style={styles.itemBox}>
              <Text style={styles.number}>{toRoman(index + 1)}</Text>
              {item.map((verse, i) => (
                <Text key={i} style={{...styles.itemText, ...fonts.light}}>
                  {verse}
                </Text>
              ))}
            </Surface>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
