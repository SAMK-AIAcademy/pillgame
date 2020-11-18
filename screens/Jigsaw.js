import React, {useState} from 'react';
import {Image} from 'react-native';
import {View, Dimensions} from 'react-native';

const Piece = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
        }}
      />
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const pieceSize = windowWidth / 4;

const styles = {
  container: {
    width: pieceSize,
    height: pieceSize,
    overflow: 'hidden',
  },
  image: {
    width: 190,
    height: 390,
    marginTop: -200,
    marginLeft: -100,
  },
  puzzle: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};
export default function Jigsaw({image}) {
  return (
    <View style={styles.puzzle}>
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
    </View>
  );
}
