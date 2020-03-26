
import React from 'react';
import { Dimensions } from "react-native";
import { StyleSheet, View, Text } from 'react-native';

// Get the full height of the used screen for later use.
var height = Dimensions.get('window').height;

export default function Menu({ navigation }){ 

  // Handler for when "Resume game" is pressed in the menu screen.
  const resumeHandler = () => {
    navigation.navigate('resumeGame');
  }
  // Handler for when "New game" is pressed in the menu screen.
  const newGameHandler = () => {
    navigation.navigate('newGame');
  }
  // Handler for when "Options" is pressed in the menu screen.
  const optionsHandler = () => {
    navigation.navigate('options');
  }

  // Dispaly the contents of the menu screen.
  return(
  <View style={styles.container}>
    <Text style={styles.heading}>Pill game</Text>
    <Text style={styles.resume} onPress={resumeHandler}>Resume game</Text>
    <Text style={styles.newGame} onPress={newGameHandler}>New game</Text>
    <Text style={styles.settings} onPress={optionsHandler}>Options</Text>
  </View>
  )
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
    container: {
      height: height,
      position: 'relative',
      backgroundColor: '#fff',
    },
    resume: {
      position: 'absolute',
      top: height * 0.6,
      alignSelf: "center",
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      fontSize: 40,
    },
    newGame: {
      position: 'absolute',
      top: height * 0.7,
      alignSelf: "center",
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      fontSize: 40,
    },
    settings: {
    position: 'absolute',
    top: height * 0.8,
    alignSelf: "center",
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    fontSize: 40,
    },
    heading: {
      position: 'absolute',
      top: height * 0.2,
      transform: [{rotate:"-30deg"}],
      alignSelf: "center",
      fontSize: 50
    }
});
