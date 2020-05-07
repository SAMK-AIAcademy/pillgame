import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Level3Menu({navigation}) {
  return (
    <View>
      <View style={Style.headerView}>
        <Text style={Style.headerText}>Level 1</Text>
      </View>
      <View style={Style.infoView}>
        <Text style={Style.text}>INFO</Text>
      </View>
      <View style={Style.midView}>
        <Text style={Style.text}>- - - INTESTINE - -</Text>
        <Text style={Style.text}>- - Blood CAPILLARY -</Text>
        <Text style={Style.text}>- - - CIRCULATION - -</Text>
      </View>
      <View style={Style.bottomView}>
        <Text style={Style.text} onPress={() => navigation.navigate('Level3')}>
          GO TO GAME
        </Text>
      </View>
    </View>
  );
}

let Style = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  infoView: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  midView: {
    alignItems: 'center',
    paddingTop: '30%',
  },
  headerView: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 50,
    transform: [{rotate: '-25deg'}],
  },
  bottomView: {
    alignItems: 'center',
    paddingTop: '10%',
  },
});
