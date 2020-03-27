import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../Constants/Colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    padding: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold"
  }
});

export default Header;
