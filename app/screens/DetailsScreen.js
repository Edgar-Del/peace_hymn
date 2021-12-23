import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { Headline, Subheading, Surface } from "react-native-paper";
import toRoman from "roman-numerals/lib/toRoman";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const DetailsScreen = ({ route, navigation }) => {
  const { verses, chorus, title } = route.params;
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.headerView}>
        <Animatable.View
          animation="wobble"
          duration={500}
          delay={1000}
          style={{ flex: 1 }}
        >
          <Pressable onPress={() => navigation.navigate("home")}>
            <MaterialIcons name="keyboard-arrow-left" size={50} color="#fff" />
          </Pressable>
        </Animatable.View>
        <Headline
          style={{
            color: "#fff",
            paddingRight: 20,
            flex: 2,
            fontFamily: "Akaya",
          }}
        >
          {title}
        </Headline>
      </Animatable.View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {chorus.length <= 0 ? null : (
          <Animatable.View animation="slideInRight" style={styles.chorusView}>
            <Headline style={{ fontFamily: "Akaya" }}>Chorus</Headline>
            <Surface style={styles.itemBox}>
              <Text style={styles.itemText}>{chorus}</Text>
            </Surface>
          </Animatable.View>
        )}
        <View style={styles.verseView}>
          <Headline style={{ fontFamily: "Akaya" }}>Verses</Headline>
          {verses.map((item, index) => (
            <Animatable.View
              key={index}
              animation="slideInRight"
              duration={300}
              delay={index * 100}
            >
              <Surface style={styles.itemBox}>
                <Text style={styles.number}>{toRoman(index + 1)}</Text>
                <Text style={styles.itemText}>{item}</Text>
              </Surface>
            </Animatable.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemBox: {
    marginBottom: 10,
    alignItems: "center",
    elevation: 7,
    padding: 20,
    width: (90 / 100) * width,
    borderRadius: 10,
  },
  chorusView: {
    alignItems: "center",
    marginBottom: 20,
  },
  itemText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Akaya",
  },
  verseView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  number: {
    fontWeight: "bold",
  },
  headerView: {
    height: (12 / 100) * height,
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    elevation: 9,
  },
});

export default DetailsScreen;
