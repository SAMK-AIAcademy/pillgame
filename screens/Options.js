import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// Screen used to demonstrate options (from Options "button") on the menu screen.
export default function TestScreen({navigation}) {
  return (
    <View>
      <Text style={styles.heading}>Options</Text>
      {/* <Image
                style={{width: "100%", height: "1000%", alignSelf: "center",
                position: "absolute", top: 100}}
                source={require('../image/gear.png')}
                /> */}
    </View>
  );
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    alignSelf: 'center',
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
