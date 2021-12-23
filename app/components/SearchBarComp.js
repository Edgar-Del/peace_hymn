import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";
import { Headline, Searchbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../store/searchSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const { height } = Dimensions.get("window");

const SearchBarComp = () => {
  const dispatch = useDispatch();
  const { searchData } = useSelector((state) => state.searchCompData);

  const onChangeSearch = (query) => {
    dispatch(setSearchData(query));
  };

  return (
    <Animatable.View
      animation="slideInDown"
      duration={350}
      useNativeDriver={true}
      style={styles.container}
    >
      <View style={styles.headerView}>
        <FontAwesome5 name="bible" size={27} color="#fff" />
        <Headline style={styles.headerText}>Peace HYMN</Headline>
      </View>

      <Searchbar
        placeholder="search"
        value={searchData}
        onChangeText={(e) => onChangeSearch(e)}
        style={{
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          elevation: 10,
        }}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (20 / 100) * height,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 7,
  },
  headerText: {
    color: "#fff",
    fontFamily: "Akaya",
    fontSize: (4 / 100) * height,
    paddingLeft: 10,
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default SearchBarComp;
