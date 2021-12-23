import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import HYMNS from "../data/hymns.json";
import { List } from "react-native-paper";
import SearchBarComp from "./SearchBarComp";
import { useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function HymnListComp({ navigation }) {
  const { searchData } = useSelector((state) => state.searchCompData);
  const [fontLoaded] = useFonts({
    Akaya: require("../assets/AkayaTelivigala-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          {HYMNS.filter((val) => {
            if (searchData === "") {
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
            <Animatable.View
              animation="fadeInRight"
              delay={index * 30}
              duration={200}
              style={styles.hymnCard}
              key={item.id}
              useNativeDriver={true}
            >
              <Pressable
                android_ripple={{ color: "#fcbbbb", borderless: true }}
                onPress={() =>
                  navigation.navigate("details", {
                    title: item.title,
                    verses: item.verses,
                    chorus: item.chorus,
                  })
                }
              >
                <List.Item
                  title={item.title}
                  titleStyle={{ fontFamily: "Akaya", fontSize: 20 }}
                  description={`author: ${item.author.toLowerCase()}`}
                  left={(props) => (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                    >
                      <Text {...props}>{item.id}</Text>
                    </View>
                  )}
                />
              </Pressable>
            </Animatable.View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    alignItems: "center",
  },

  hymnCard: {
    width: "90%",
    marginVertical: 10,
    backgroundColor: "#ffff",
    elevation: 10,
    borderRadius: 25,
  },
});
