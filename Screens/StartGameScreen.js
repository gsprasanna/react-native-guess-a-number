import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";
import MainButton from "../Components/MainButton";

const StartGameScreen = ({ onStart }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = enteredText => {
    setEnteredValue(enteredText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setEnteredValue("");
    setConfirm(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number should be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler }
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(enteredValue);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (isConfirm) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStart(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="RESET"
                onPress={resetHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="CONFIRM"
                onPress={confirmHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold"
  },
  inputContainer: {
    width: "100%",
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
