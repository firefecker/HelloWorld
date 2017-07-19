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
  View,
  Image,
} from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}



var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';



export default class HelloWorld extends Component {
  render() {
      var movie = MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>
          <Image source={{uri: movie.posters.thumbnail}}  style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
    );
  }
}
/*<View style={styles.container}>
 <Text style={styles.welcome}>
 Welcome to React Native!
 </Text>
 <Text style={styles.instructions}>
 To get started, edit index.android.js
 </Text>
 <Text style={styles.instructions}>
 Double tap R on your keyboard to reload,{'\n'}
 Shake or press menu button for dev menu
 </Text>
 </View>*/
// react-native bundle --platform android --dev false --entry-file index.android.js  --bundle-output android/app/src/main/assets/index.android.bundle  --assets-dest android/app/src/main/res/

//react-native run-android

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',//这将会让在主容器里面的孩子节点水平的展示而不是垂直展开
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF',
  },
  rightContainer: {
      flex: 1,//在没有被图片占据的父容器里面占据了剩余的空间。如果这不起作用的话，给 rightContainer 增加一个 backgroundColor 并且尝试着移除flex: 1。你将会看到这将会导致父容器的大小将会变为能够容纳孩子视图的最小大小。
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
      width: 53,
      height: 81,
  },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});

// 注意，这里用引号括起来的'HelloWorld'必须和你init创建的项目名一致
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

// AppRegistry模块则是用来告知React Native哪一个组件被注册为整个应用的根容器。
// 你无需在此深究，因为一般在整个应用里
// AppRegistry.registerComponent这个方法只会调用一次。上面的代码里已经包含了具体的用法，
// 你只需整个复制到index.ios.js或是index.android.js文件中即可运行。
// 组件本身结构可以非常简单——唯一必须的就是在render方法中返回一些用于渲染结构的JSX语句。
// JSX语句就是JavaScript嵌套XML语句