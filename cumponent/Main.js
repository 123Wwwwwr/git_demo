
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';
//引入组件
var Home = require("./Home");
var Find = require("./Find");
var Message = require("./Message");
var Mine = require("./Mine");

var Main = React.createClass({
    getInitialState:function () {
      return{
          select:"首页"
      }
    },
    render:function() {
        return(
            <TabBarIOS
                tintColor='orange'
            >
                {/* 首页 */}
                <TabBarIOS.Item
                    icon={require('./../images/tabbar_home@2x.png')}
                    title='首页'
                    selected={this.state.select == '首页'}
                    onPress={()=>{this.setState({select:"首页"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Home,///他需要控制哪个具体的板块
                            title:'主页',
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            tintColor:'orange',
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/* 消息 */}
                <TabBarIOS.Item
                    icon={require('./../images/tabbar_message_center@2x.png')}
                    title='消息'
                    selected={this.state.select == "消息"}
                    onPress={()=>{this.setState({select:"消息"})}}
                >
                    <NavigatorIOS
                        //flex:1 给的是他下面的
                        style={{flex:1}}
                        initialRoute={{
                            component:Message,///他需要控制哪个具体的板块
                            title:'消息'
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/* 发现 */}
                <TabBarIOS.Item
                    icon={require('./../images/tabbar_discover@2x.png')}
                    title='发现'
                    selected={this.state.select == "发现"}
                    onPress={()=>{this.setState({select:"发现"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Find,///他需要控制哪个具体的板块
                            title:'发现'
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/* 我的 */}
                <TabBarIOS.Item
                    icon={require('./../images/navigationbar_friendattention@2x.png')}
                    title='我的'
                    selected={this.state.select == "我的"}
                    onPress={()=>{this.setState({select:"我的"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Mine,///他需要控制哪个具体的板块
                            title:'我的',
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});


const styles = StyleSheet.create({



});

//输出类

module.exports = Main;


