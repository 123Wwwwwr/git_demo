

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
//详情页
var HomeDetail = require("./HomeDetail");

var Home = React.createClass({
    getDefaultProps:function () {
        return{
            //ios9之后默认不支持http
            url_api:'http://api.douban.com/v2/movie/in_theaters'
        }
    },
    getInitialState:function () {
       return{

           dataSource:new ListView.DataSource({rowHasChanged:(r1:r2)=>r1!=r2})

       }

    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}


            />
        );
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        //提供接口的方法了
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 请求成功走的
                alert(responseData.subjects[0].title);
                // 请求完成的时候 将数据给状态值
                var myArr = [ ];
                for (var i = 0;i < responseData.subjects.length;i++){
                    var myObj = {};
                    myObj.title = responseData.subjects[i].title;
                    myObj.image = responseData.subjects[i].images.large;
                    myObj.year = responseData.subjects[i].year;
                    myObj.id = responseData.subjects[i].id;
                    myArr.push(myObj);
                }
                //设置状态值给数据
                this.setState({
                   dataSource:this.state.dataSource.cloneWithRows(myArr)
                });
            })
            .catch((error)=>{
                //请求失败走的
                if (error){

                }
            })
    },
    renderRow:function (rowData) {
            return (
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={()=>{this.pushToDetail(rowData)}}    
                >
                    <View style={styles.bigViewStyle}>
                        <Image
                        source={{uri:rowData.image}}
                        style={styles.iconStyle}
                        />
                        <View style={styles.rightViewStyle}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.year}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
    },
    //详情页的函数
    pushToDetail:function (data) {
        //进行页面跳转
        this.props.navigator.push({
            component:HomeDetail,
            title:data.title,
            //跨页面传值用 passProps 
            passProps:{data}
        })
    }
});


const styles = StyleSheet.create({
    bigViewStyle:{
        flexDirection:'row',
        padding:10
    },
    iconStyle:{
        width:100,
        height:120,
        marginRight:10
    },
    rightViewStyle:{
        justifyContent:'center'
    }
});

module.exports = Home;


