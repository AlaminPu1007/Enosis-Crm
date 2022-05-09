import React from 'react';
import { View, StyleSheet,Text,Dimensions } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default class App extends React.Component {
  render() {
    return (
      <View style={myStyle.container}>
        <View style={myStyle.top_background}>
          <View style={myStyle.top_content}>
            <Text style={myStyle.text1}>Hey there</Text>
            <Text style={myStyle.text1}>WHAT'S UP</Text>
            <Text style={myStyle.text1}>Doc'?</Text>
            <Text style={myStyle.text2}>BUGS BUNNY</Text>
          </View>
        </View>
      </View>
    );
}
}

const sWidth  = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio   = sWidth / sHeight; //sWidth = ratio * sHeight
const myStyle = StyleSheet.create({
  container: {
    width: sWidth,
    height: sHeight,
    backgroundColor: '#fff'
  },
  top_background: {
    width: sHeight * 2,
    height: sHeight * 2,
    borderRadius: sHeight * 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#aaa',
    alignItems: 'center',
    marginLeft: ((ratio * sHeight) * 0.5) - (sHeight),
    marginTop: -sHeight * 1.7,
    paddingTop: sHeight * 1.7,
  },
  top_content: {
    paddingTop: sHeight * 0.02,
    width: sWidth,
    height: sHeight * 0.3,
    alignItems: 'center',
  },
  text1: {
    fontSize: 14,
    color: '#fff'
  },  
  text2: {
    marginTop: sHeight * 0.1,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  }
});