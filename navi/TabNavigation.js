/* eslint-disable react-native/no-inline-styles */
import Home from '../src/Home';
import Mine from '../src/Mine';
import ShopCar from '../src/ShopCar';
import Edit from '../src/edit';
// import LoginView from '../src/loginView';
import Type from '../src/Type';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import withNavigationFocus from 'react-navigation';
// import {createAppContainer} from 'react-navigation';
import React from 'react';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// let isOpen = false;
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      backBehavior="none"
      tabBarOptions={{
        //Android属性
        upperCaseLabel: false, //是否使标签大写，默认为true
        //共有属性
        showIcon: true, //是否显示图标，默认关闭
        showLabel: false, //是否显示label，默认开启
        activeTintColor: '#4398ff', //label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray', //label和icon的前景色 活跃状态下（未选中）
        style: {
          //TabNavigator 的背景颜色
          backgroundColor: 'white',
          height: 75,
          borderTopWidth: 0,
        },
        indicatorStyle: {
          //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
          height: 0,
        },
        labelStyle: {
          //文字的样式
          fontSize: 13,
          marginTop: -5,
          marginBottom: 5,
        },
        iconStyle: {
          //图标的样式
          marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitle: null,
          //tab 的属性
          // tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Type"
        component={Type}
        options={{
          headerBackTitle: null,
          //tab 的属性
          tabBarLabel: '时间',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="appstore-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Edit}
        options={{
          tabBarLabel: '时间',
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            let sFocus = false;
            if (focused) {
              sFocus = !sFocus;
            }
            if (focused && sFocus) {
              focused = true;
            } else {
              focused = false;
            }
            return (
              <Image
                source={
                  focused && sFocus
                    ? require('../images/plusOnpress.png')
                    : require('../images/plus.png')
                }
                style={[{height: 36, width: 36}]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ShopCar"
        component={ShopCar}
        options={{
          tabBarLabel: '购物车',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// const Tab = createBottomTabNavigator(
//   {
//     //每一个页面的配置
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         //stackNavigator的属性
//         // headerTitle: '首页',
//         gestureResponseDistance: {horizontal: 300},
//         headerBackTitle: null,
//         //tab 的属性
//         // tabBarLabel: '',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={require('../images/ic_home.png')}
//             style={[{height: 24, width: 24}, {tintColor: tintColor}]}
//           />
//         ),
//       },
//     },
//     Type: {
//       screen: Type,
//       navigationOptions: {
//         //stackNavigator的属性
//         headerTitle: '时间',
//         gestureResponseDistance: {horizontal: 300},
//         headerBackTitle: null,
//         //tab 的属性
//         tabBarLabel: '时间',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={require('../images/ic_type.png')}
//             style={[{height: 24, width: 24}, {tintColor: tintColor}]}
//           />
//         ),
//       },
//     },
//     Plus: {
//       screen: Edit,
//       navigationOptions: ({navigation}) => ({
//         //stackNavigator的属性
//         headerTitle: '时间',
//         gestureResponseDistance: {horizontal: 300},
//         headerBackTitle: null,
//         //tab 的属性
//         tabBarLabel: '时间',
//         tabBarIcon: ({focused, horizontal, tintColor}) => {
//           let sFocus = false;
//           if (focused) {
//             sFocus = !sFocus;
//           }
//           if (focused && sFocus) {
//             focused = true;
//           } else {
//             focused = false;
//           }
//           return (
//             <Image
//               source={
//                 focused && sFocus
//                   ? require('../images/plusOnpress.png')
//                   : require('../images/plus.png')
//               }
//               style={[{height: 36, width: 36}]}
//             />
//           );
//         },
//         // tabBarIcon: ({tintColor}) => (
//         //   <Image
//         //     source={
//         //       isOpen
//         //         ? require('../images/plusOnpress.png')
//         //         : require('../images/plus.png')
//         //     }
//         //     style={[{height: 36, width: 36}]}
//         //   />
//         // ),
//         // tabBarOnPress: (text) => {
//         //   console.log(text);
//         //   // isOpen = !isOpen;
//         // },
//       }),
//     },
//     ShopCar: {
//       screen: ShopCar,
//       navigationOptions: {
//         //stackNavigator的属性
//         headerTitle: '购物车',
//         gestureResponseDistance: {horizontal: 300},
//         headerBackTitle: null,
//         //tab 的属性
//         tabBarLabel: '购物车',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={require('../images/ic_shop_car.png')}
//             style={[{height: 24, width: 24}, {tintColor: tintColor}]}
//           />
//         ),
//       },
//     },
//     Mine: {
//       screen: Mine,
//       navigationOptions: {
//         //stackNavigator的属性
//         headerTitle: '我的',
//         gestureResponseDistance: {horizontal: 300},
//         headerBackTitle: null,
//         headerStyle: {backgroundColor: '#EB3695'}, //导航栏的样式
//         //tab 的属性
//         tabBarLabel: '我的',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={require('../images/ic_me.png')}
//             style={[{height: 24, width: 24}, {tintColor: tintColor}]}
//           />
//         ),
//       },
//     },
//   },
//   {
//     //设置TabNavigator的位置
//     tabBarPosition: 'bottom',
//     //是否在更改标签时显示动画
//     animationEnabled: true,
//     //是否允许在标签之间进行滑动
//     swipeEnabled: true,
//     //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
//     backBehavior: 'none',
//     //设置Tab标签的属性

//     resetOnBlur: true,
//     lazy: false,

//     tabBarOptions: {
//       //Android属性
//       upperCaseLabel: false, //是否使标签大写，默认为true
//       //共有属性
//       showIcon: true, //是否显示图标，默认关闭
//       showLabel: false, //是否显示label，默认开启
//       activeTintColor: '#4398ff', //label和icon的前景色 活跃状态下（选中）
//       inactiveTintColor: 'gray', //label和icon的前景色 活跃状态下（未选中）
//       style: {
//         //TabNavigator 的背景颜色
//         backgroundColor: 'white',
//         height: 75,
//         borderTopWidth: 0,
//       },
//       indicatorStyle: {
//         //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
//         height: 0,
//       },
//       labelStyle: {
//         //文字的样式
//         fontSize: 13,
//         marginTop: -5,
//         marginBottom: 5,
//       },
//       iconStyle: {
//         //图标的样式
//         marginBottom: 5,
//       },
//     },
//   },
// );

// const TabNavi = createAppContainer(Tab);
export default MyTabs;
