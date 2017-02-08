/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//组件的引入
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
