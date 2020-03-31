import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

// Screen used to demonstrate level (from Resume game "button") on the menu screen.
export default function LevelMenu({navigation}){ 
        return(
        <>
        <View style={styles.headingView}>
        <Text style={styles.heading}>lvl 100500</Text>
        </View>

        <View style={{flex:1,flexDirection:"row"}}>
            <View style={{width:"100%",height:"100%"}}>
            <Image
                style={{width: "100%", height: "100%", alignSelf: "center"}}
                source={require('../image/human.jpg')}
            />
            <Text style={{position: "absolute", alignSelf: "center", top: 10, fontSize: 40}}>
              Lorem ipsum
            </Text>
            </View>
        </View>
        </>
        );
}

// Define the styles used in the screen.
const styles = StyleSheet.create({
    heading: {
      transform: [{rotate:"-20deg"}],
      fontSize: 20
    },
    headingView: {
      alignItems: "center",
      justifyContent: "center",
      height: "20%",
      backgroundColor: "red"
    },
    levelTextStyle:{
      fontSize:20
    }
  });