import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// Screen used to demonstrate New game screen (from New game "button") on the menu screen.
export default function LevelMenu({navigation}) {
  return (
    <>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Select level</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '50%', height: '85%'}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../image/human.jpg')}
          />
        </View>
        <View
          style={{
            width: '50%',
            height: '85%',
            marginTop: '60%',
            alignItems: 'center',
          }}>
          <Text
            onPress={() => navigation.navigate('testscreen')}
            style={styles.levelTextStyle}>
            Level 1
          </Text>
          <Text style={styles.levelTextStyle}>Level 2</Text>
          <Text
            style={styles.levelTextStyle}
            onPress={() => navigation.navigate('Level3Menu')}>
            Level 3
          </Text>
          <Text style={styles.levelTextStyle}>Level 4</Text>
          <Text style={styles.levelTextStyle}>Level 5</Text>
        </View>
      </View>
    </>
  );
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },
  headingView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    backgroundColor: 'silver',
  },
  levelTextStyle: {
    fontSize: 20,
  },
});
