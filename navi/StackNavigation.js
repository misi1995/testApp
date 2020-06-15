import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createStackNavigator} from 'react-navigation-stack';
import Details from '../src/Details';
import Tab from './TabNavigation';
import Wallet from '../src/drawer/Wallet';
import Invite from '../src/drawer/Invite';
import CardCoupons from '../src/drawer/CardCoupons';
import LoginView from '../src/loginView';
import NewDetail from '../src/NewDetail';
import Edit from '../src/edit';
// import Home from '../src/Home';
import Mine from '../src/Mine';
// import ShopCar from '../src/ShopCar';
// import LoginView from '../src/loginView'
// import Type from '../src/Type';

const Stack = createStackNavigator();

Tab.navigationOptions = ({navigation}) => {
  const {routeName} = navigation.state.routes[navigation.state.index];
  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = '';
  if (routeName === 'Home') {
    headerTitle = '主页';
  } else if (routeName === 'Type') {
    headerTitle = '星座运势';
  } else if (routeName === 'Mine') {
    headerTitle = '我的';
  } else if (routeName === 'ShopCar') {
    headerTitle = '购物车';
  }
  return {
    headerTitle,
    // //导航栏的样式
    // headerStyle: styles.headerStyle,
    // //导航栏文字的样式
    // headerTitleStyle: styles.headerTitleStyle,
    headerShown: false,
  };
};

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      // screenOptions={({route, navigation}) => ({
      //   gestureEnabled: true,
      //   cardOverlayEnabled: true,
      //   headerStatusBarHeight:
      //     navigation.dangerouslyGetState().routes.indexOf(route) > 0
      //       ? 0
      //       : undefined,
      // })}
      // mode="modal"
      headerMode="none">
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Invite" component={Invite} />
      <Stack.Screen name="CardCoupons" component={CardCoupons} />
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Screen name="NewDetail" component={NewDetail} />
      <Stack.Screen name="Mine" component={Mine} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}

// const Stack = createStackNavigator(
//   {
//     Tab: {
//       screen: Tab,
//     },
//     Details: {
//       screen: Details,
//     },
//     Wallet: {
//       screen: Wallet,
//     },
//     Invite: {
//       screen: Invite,
//     },
//     CardCoupons: {
//       screen: CardCoupons,
//     },
//     LoginView: {
//       screen: LoginView,
//     },
//     NewDetail: {
//       screen: NewDetail,
//     },
//     Mine: {
//       screen: Mine,
//     },
//     Edit: {
//       screen: Edit,
//     },
//   },
//   {
//     initialRouteName: 'Tab',
//     defaultNavigationOptions: {
//       // 用于屏幕的默认导航选项
//       headerTitleAlign: 'center', // 解决Android导航标题居中
//     },
//     navigationOptions: {
//       // title: '首页',
//       headerStyle: {backgroundColor: '#4398ff'}, // 设置导航头部样式
//       headerTitleStyle: {
//         color: 'white',
//         //设置标题的大小
//         fontSize: 18,
//         //居中显示
//         flex: 1,
//         textAlign: 'center',
//       },
//       showIcon: true,
//     },
//   },
// );

// export const StackNavi = createAppContainer(Stack);
export default MyStack;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   button: {
//     width: 240,
//     height: 45,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#4398ff',
//   },
//   headerStyle: {
//     backgroundColor: '#EB3695',
//   },
//   headerTitleStyle: {
//     color: 'white',
//     //设置标题的大小
//     fontSize: 18,
//     //居中显示
//     alignSelf: 'center',
//   },
// });
