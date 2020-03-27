import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../Components/MainButton";
import defaultStyles from "../Constants/default-styles";

const GameOverScreen = ({ totalRounds, userNumber, onGameRestart }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
        {/* source: {uri: ""} */}
      </View>
      <View style={styles.summaryMessageContainer}>
        <Text style={styles.summaryText}>
          AI tooks <Text style={defaultStyles.bodyText}>{totalRounds}</Text>{" "}
          rounds to predict your number{" "}
          <Text style={defaultStyles.bodyText}>{userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={onGameRestart}>PLAY AGAIN</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    height: "100%",
    width: "100%"
  },
  summaryMessageContainer: {
    marginBottom: 20,
    width: "80%",
    alignItems: "center"
  },
  summaryText: {
    fontSize: 20,
    fontFamily: "open-sans"
  }
});

export default GameOverScreen;
