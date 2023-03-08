import {FontAwesome5} from '@expo/vector-icons';
import {selectSearchData, setSearchData} from 'features/searchSlice';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Headline, Searchbar} from 'react-native-paper';
import styles from './SearchBarComp.styles';
import {useTheme} from 'react-native-paper';
import colors from 'configs/colors';
import type {ISearchBarComp} from 'components/SearchBarComp/types';

const SearchBarComp: ISearchBarComp = () => {
  const theme = useTheme();
  const {fonts} = theme;
  const dispatch = useAppDispatch();
  const {searchData} = useAppSelector(selectSearchData);

  const onChangeSearch = (query: string): void => {
    dispatch(setSearchData(query));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <FontAwesome5 name="bible" size={27} color="#fff" />
        <Headline style={fonts.medium}>Peace Hymn</Headline>
      </View>

      <Searchbar
        iconColor={colors.peaceBlack}
        cursorColor={colors.peaceRed}
        theme={{colors: {text: colors.peaceBlack}}}
        placeholderTextColor={colors.peaceBlack}
        placeholder="search"
        value={searchData}
        onChangeText={e => onChangeSearch(e)}
        style={styles.barStyle}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default SearchBarComp;
