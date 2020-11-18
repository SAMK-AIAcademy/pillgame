import React, {useState} from 'react';
import {Image} from 'react-native';
import {View, Dimensions} from 'react-native';

const Piece = ({marginTop, marginLeft}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{marginTop, marginLeft, ...styles.image}}
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
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: 'contain',
    //marginTop: -200,
    //marginLeft: -100,
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
      <Piece marginLeft={0} marginTop={0} />
      <Piece marginLeft={-pieceSize} marginTop={0} />
      <Piece marginLeft={-pieceSize * 2} marginTop={0} />
      <Piece marginLeft={-pieceSize * 3} marginTop={0} />

      <Piece marginLeft={0} marginTop={-pieceSize} />
      <Piece marginLeft={-pieceSize} marginTop={-pieceSize} />
      <Piece marginLeft={-pieceSize * 2} marginTop={-pieceSize} />
      <Piece marginLeft={-pieceSize * 3} marginTop={-pieceSize} />

      <Piece marginLeft={0} marginTop={-pieceSize * 2} />
      <Piece marginLeft={-pieceSize} marginTop={-pieceSize * 2} />
      <Piece marginLeft={-pieceSize * 2} marginTop={-pieceSize * 2} />
      <Piece marginLeft={-pieceSize * 3} marginTop={-pieceSize * 2} />

      <Piece marginLeft={0} marginTop={-pieceSize * 3} />
      <Piece marginLeft={-pieceSize} marginTop={-pieceSize * 3} />
      <Piece marginLeft={-pieceSize * 2} marginTop={-pieceSize * 3} />
      <Piece marginLeft={-pieceSize * 3} marginTop={-pieceSize * 3} />
    </View>
  );
}
