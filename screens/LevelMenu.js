import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// Screen used to demonstrate New game screen (from New game "button") on the menu screen.
export default function LevelMenu({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Paracetamol</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 20}}
            source={require('../image/human.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              ...styles.levelTextStyle,
              backgroundColor: '#b0ffb0',
              color: '#00ff00',
            }}
            onPress={() => navigation.navigate('Level1Info')}>
            Level 1
          </Text>
          <Text
            style={{
              ...styles.levelTextStyle,
              backgroundColor: '#b0ffb0',
              color: '#00ff00',
            }}>
            Level 2
          </Text>

          <Text
            style={{
              ...styles.levelTextStyle,
              backgroundColor: '#b0b0ff',
              color: '#7070ff',
            }}
            onPress={() => navigation.navigate('Level3Menu')}>
            Level 3
          </Text>
          <Text
            style={{
              ...styles.levelTextStyle,
              backgroundColor: '#b0b0ff',
              color: '#7070ff',
            }}>
            Level 4
          </Text>
          <Text
            style={{
              ...styles.levelTextStyle,
              backgroundColor: '#b0b0ff',
              color: '#7070ff',
            }}>
            Level 5
          </Text>
        </View>
      </View>
    </View>
  );
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontFamily: 'BungeeOutline',
    color: '#ababab',
    alignSelf: 'center',
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: '#000000',
  },
  headingView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    //paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  levelTextStyle: {
    fontSize: 26,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 4,
    fontFamily: 'Baloo2',
    borderRadius: 10,
    textShadowRadius: 1,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: '#000000',
  },
});
