import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";
import DefaultStyles from "../Constants/default-styles";
import MainButton from "../Components/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber == exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = props => {
  const [guessNumber, setGuess] = useState(
    generateRandomNumberBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    debugger;
    if (guessNumber === props.userChoice) {
      console.log(guessNumber);
      props.onGameOver(rounds);
    }
  }, [guessNumber, props.userChoice, props.onGameOver]);

  const nextGuessHanlder = direction => {
    if (
      (direction == "Lower" && guessNumber < props.userChoice) ||
      (direction == "Higher" && guessNumber > props.userChoice)
    ) {
      Alert.alert("Don't Lie", "You know this is wrong....", [
        { text: "sorry", style: "cancel" }
      ]);
      return;
    }

    if (direction == "Lower") {
      currentHigh.current = guessNumber;
    } else {
      currentLow.current = guessNumber;
    }
    const nextNumber = generateRandomNumberBetween(
      currentLow.current,
      currentHigh.current,
      guessNumber
    );
    setGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>AI Prediction</Text>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHanlder.bind(this, "Lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHanlder.bind(this, "Higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "90%",
    width: 400
  }
});

export default GameScreen;
