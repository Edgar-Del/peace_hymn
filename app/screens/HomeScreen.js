import React from "react";
import { View, StyleSheet } from "react-native";
import HymnListComp from "../components/HymnListComp";
import SearchBarComp from "../components/SearchBarComp";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBarComp />
      <HymnListComp navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
