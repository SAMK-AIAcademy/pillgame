import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Text, View, Dimensions} from 'react-native';

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
  },
  puzzle: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

const createPuzzle = (image) => {
  const pieces = [];
  let key = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      pieces.push({
        key: key++,
        image,
        marginLeft: -pieceSize * j,
        marginTop: -pieceSize * i,
      });
    }
  }
  return pieces;
};

const shuffle = (pieces) => {
  let currentIndex = pieces.length;
  let tmp;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    tmp = pieces[currentIndex];
    pieces[currentIndex] = pieces[randomIndex];
    pieces[randomIndex] = tmp;
  }

  return pieces;
};

export default function Jigsaw({image}) {
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
    const newPuzzle = createPuzzle(image);
    setPuzzle(shuffle(newPuzzle));
  }, []);

  return (
    <View style={styles.puzzle}>
      {puzzle.map((piece) => {
        return <Piece {...piece} />;
      })}
    </View>
  );
}
