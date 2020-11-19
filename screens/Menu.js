import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';

// Get the full height of the used screen for later use.
var height = Dimensions.get('window').height;

export default function Menu({navigation}) {
  // Handler for when "Resume game" is pressed in the menu screen.
  const resumeHandler = () => {
    navigation.navigate('resumeGame');
  };
  // Handler for when "New game" is pressed in the menu screen.
  const newGameHandler = () => {
    navigation.navigate('newGame');
  };
  // Handler for when "Options" is pressed in the menu screen.
  const optionsHandler = () => {
    navigation.navigate('options');
  };

  // Dispaly the contents of the menu screen.
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Pill game</Text>
      </View>
      <View styel={styles.menu}>
        <Text style={styles.resume} onPress={resumeHandler}>
          Resume game
        </Text>
        <Text style={styles.newGame} onPress={newGameHandler}>
          New game
        </Text>
        <Text style={styles.settings} onPress={optionsHandler}>
          Options
        </Text>
      </View>
    </View>
  );
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
  container: {
    height: height,
    //position: 'relative',
    backgroundColor: '#dfdfdf',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerContainer: {
    borderWidth: 2,
    transform: [{rotate: '-25deg'}],
    marginTop: 30,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resume: {
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#b0ffb0',
    fontSize: 40,
    fontFamily: 'Baloo2',
    borderRadius: 20,
    color: '#00ff00',
    textShadowRadius: 4,
    textShadowColor: '#000',
    borderWidth: 1,
    textShadowOffset: {width: 0, height: 1},
  },
  newGame: {
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ffb0b0',
    fontSize: 40,
    fontFamily: 'Baloo2',
    borderRadius: 20,
    color: '#ff7070',
    textShadowRadius: 4,
    textShadowColor: '#000',
    borderWidth: 1,
    textShadowOffset: {width: 0, height: 1},
  },
  settings: {
    alignSelf: 'center',
    margin: 0,
    backgroundColor: '#b0b0ff',
    fontWeight: '100',
    fontSize: 40,
    fontFamily: 'Baloo2',
    borderRadius: 20,
    paddingHorizontal: 16,
    color: '#7070ff',
    textShadowRadius: 4,
    textShadowColor: '#000',
    borderWidth: 1,
    textShadowOffset: {width: 0, height: 1},
  },
  heading: {
    fontFamily: 'BungeeOutline',
    color: '#dbdbdb',
    alignSelf: 'center',
    fontSize: 50,
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: '#000000',
  },
});
