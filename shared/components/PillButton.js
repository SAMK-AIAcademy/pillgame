import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BACKGROUND_COLORS = {
  red: '#ffb0b0',
  green: '#b0ffb0',
  blue: '#b0b0ff',
};
const TEXT_COLORS = {
  red: '#ff7070',
  green: '#00ff00',
  blue: '#7070ff',
};
// Props text and color
export default function PillButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      marginBottom: 10,
      paddingHorizontal: 16,
      backgroundColor: BACKGROUND_COLORS[props.color],
      fontSize: 40,
      fontFamily: 'Baloo2',
      borderRadius: 20,
      color: TEXT_COLORS[props.color],
      textShadowRadius: 4,
      textShadowColor: '#000',
      borderWidth: 1,
      textShadowOffset: {width: 0, height: 1},
    },
  });
  return (
    <View>
      <Text style={styles.button}>{props.text}</Text>
    </View>
  );
}
