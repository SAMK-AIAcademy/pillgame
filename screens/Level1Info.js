import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Level1Info({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Ingestion</Text>
        </View>

        <Text style={styles.info}>Info</Text>
      </View>
      <Text style={styles.content}>
        The adventure is about to begin. To start we have to go through the
        Esophagus Door aka Throat. Good coordination is key to pass it. If your
        entering timing is wrong, you can choke or just not pass with success.
        After passing the throat, use the muscular movements of the Esophagus
        (peristaltic movements) to move towards the stomach where the second
        part of this adventure begins.
      </Text>
      <Text style={styles.play} onPress={() => navigation.navigate('Level1')}>
        Go to Game
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerContainer: {
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  info: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'Baloo2',
    color: '#00ff00',
    textShadowRadius: 4,
    textShadowColor: '#000',
    textShadowOffset: {width: 0, height: 1},
  },
  content: {
    alignSelf: 'stretch',
    //flexGrow: 2,
    marginHorizontal: 30,
    padding: 10,
    //paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 14,
    fontFamily: 'Baloo2',
    borderRadius: 20,
    //color: '#ff7070',
    //textShadowRadius: 4,
    //textShadowColor: '#000',
    borderWidth: 1,
    //textShadowOffset: {width: 0, height: 1},
  },
  play: {
    alignSelf: 'center',
    marginVertical: 20,
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
