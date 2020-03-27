import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../Constants/Colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  number: {
    fontSize: 20,
    color: Colors.accent
  }
});

export default NumberContainer;
