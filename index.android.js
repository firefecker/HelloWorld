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
    TextInput,
    ScrollView,
    FlatList,
} from 'react-native';

// class Bananas extends Component {
//     render() {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//         return (
//             <Image source={pic} style={{width: 193, height: 110}} />
//         );
//     }
// }


//自定义的组件也可以使用props。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。只需在render函数中引用this.props，然后按需处理即可。
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}



var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';



export default class HelloWorld extends Component {
  //  一般的使用，写各种控件并加载各种样式
  // render() {
  //     var movie = MOCKED_MOVIES_DATA[0];
  //   return (
  //       <View style={styles.container}>
  //         <Image source={{uri: movie.posters.thumbnail}}  style={styles.thumbnail}/>
  //         <View style={styles.rightContainer}>
  //           <Text style={styles.title}>{movie.title}</Text>
  //           <Text style={styles.year}>{movie.year}</Text>
  //         </View>
  //       </View>
  //   );
  // }
  //  以常见的基础组件Image为例，在创建一个图片时，可以传入一个名为source的prop来指定要显示的图片的地址，以及使用名为style的prop来控制其尺寸。
  //  请注意{pic}外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中。括号的意思是括号内部为一个js变量或表达式，
    // 需要执行后取值。因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
  //   render() {
  //       let pic = {
  //           uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  //       };
  //       return (
  //           <Image source={pic} style={{width: 193, height: 110}} />
  //       );
  //   }

    //自定义的组件也可以使用props。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。只需在render函数中引用this.props，然后按需处理即可。
    // render() {
    //     return (
    //         <View style={{alignItems: 'center'}}>
    //             <Greeting name='Rexxar' />
    //             <Greeting name='Jaina' />
    //             <Greeting name='Valeera' />
    //         </View>
    //     );
    // }

    // render() {
    //     return (
    //         // 尝试把`justifyContent`改为space-between看看
    //         // 尝试把`flexDirection`改为`column`看看
    //         <View style={{
    //             flex: 1,
    //             flexDirection: 'row',
    //             justifyContent: 'center',
    //         }}>
    //             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //         </View>
    //     );
    // }

    // render() {
    //     return (
    //         // 尝试把`alignItems`改为`flex-start`看看
    //         // 尝试把`justifyContent`改为`flex-end`看看
    //         // 尝试把`flexDirection`改为`row`看看
    //         <View style={{
    //             flex: 1,
    //             flexDirection: 'column',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //         }}>
    //             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //         </View>
    //     );
    // }
    //使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求
    //flexDirection ：style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列。默认值是竖直轴(column)方向
    //justifyContent：在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布。
    //      对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between
    //alignItems：在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
    //      子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
    // constructor(props) {
    //     super(props);
    //     this.state = {text: ''};
    // }
    //
    // render() {
    //     return (
    //         <View style={{padding: 10}}>
    //             <TextInput
    //                 style={{height: 40}}
    //                 placeholder="Type here to translate!"
    //                 onChangeText={(text) => this.setState({text})}
    //             />
    //             <Text style={{padding: 10, fontSize: 42}}>
    //                 {this.state.text.split(' ').map((word) => word && '🍕🍕🍕🍕🍕🍕🍕🍕').join(' ')}
    //             </Text>
    //             <ScrollView>
    //                 <Text style={{fontSize:96}}>Scroll me plz</Text>
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Text style={{fontSize:96}}>If you like</Text>
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Text style={{fontSize:96}}>Scrolling down</Text>
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Text style={{fontSize:96}}>What's the best</Text>
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Text style={{fontSize:96}}>Framework around?</Text>
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Image source={require('./img/favicon.png')} />
    //                 <Text style={{fontSize:80}}>React Native</Text>
    //             </ScrollView>
    //         </View>
    //     );
    // }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: 'Devi'},
                        {key: 'Jackso'},
                        {key: 'Jame'},
                        {key: 'Joe'},
                        {key: 'Joh'},
                        {key: 'Jillia'},
                        {key: 'Jimm'},
                        {key: 'Juli'},
                        {key: 'Dev'},
                        {key: 'Jacks'},
                        {key: 'Jam'},
                        {key: 'Jo'},
                        {key: 'Jo1'},
                        {key: 'Jilli'},
                        {key: 'Jim'},
                        {key: 'Jul'},
                        {key: 'De'},
                        {key: 'Jack'},
                        {key: 'Ja'},
                        {key: 'J'},
                        {key: 'J1'},
                        {key: 'Jill'},
                        {key: 'Ji'},
                        {key: 'Ju'},
                        {key: 'D'},
                        {key: 'Jac'},
                        {key: 'James2'},
                        {key: 'J2'},
                        {key: 'J3'},
                        {key: 'Jil'},
                        {key: 'J4'},
                        {key: 'J5'},
                        {key: 'Devin1'},
                        {key: 'Jackson1'},
                        {key: 'James1'},
                        {key: 'Joe1l'},
                        {key: 'Joh1n'},
                        {key: 'Jill1ian'},
                        {key: 'Jimm1y'},
                        {key: 'Jul1ie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
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
  // container: {
  //   flex: 1,
  //   flexDirection:'row',//这将会让在主容器里面的孩子节点水平的展示而不是垂直展开
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#00FFFF',
  // },
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
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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