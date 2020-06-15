/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import navigationMain from '../components/navigation';

export default class Details extends Component {
  static navigationOptions = ({navigation, screenProps}) =>
    navigationMain({navigation}, '详情');

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>我是首页跳转过来的页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 240,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4398ff',
  },
  headerStyle: {
    backgroundColor: '#0ABDFF',
  },
  headerTitleStyle: {
    color: 'white',
    //设置标题的大小
    fontSize: 18,
    //居中显示
    alignSelf: 'center',
  },
});
