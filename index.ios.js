/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var my = '网络上修改的数据';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//组件的引入
var my = '大神大神的第三';
var you = '请到财务办公式交罚款';
var Main = require("./cumponent/Main");
export default class first01 extends Component {
  render() {
    return(
        //组件写入
        <Main />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('first01', () => first01);
