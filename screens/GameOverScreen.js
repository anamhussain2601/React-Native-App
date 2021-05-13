import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
      <Image
        // source={require("../assets/success.png")}
        source={{uri: 'https://i0.wp.com/walkingwanderer.com/wp-content/uploads/2017/11/kheerganga-e1509645285350.jpg?fit=700%2C525&ssl=1'}}
        style={styles.image} 
        resizeMode="contain"/>
        </View>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150 ,
    borderWidth: 3,
    borderColor: 'black',
    overflow:'hidden',
    marginVertical : 30
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
