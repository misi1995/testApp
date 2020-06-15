import Wallet from '../src/drawer/Wallet';
import Invite from '../src/drawer/Invite';
import CardCoupons from '../src/drawer/CardCoupons';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from './StackNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      drawerStyle={{
        paddingTop: 200,
        width: 240,
      }}>
      <Drawer.Screen
        name="Home"
        component={Stack}
        options={{
          drawerLabel: '返回首页',
          drawerIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          drawerLabel: '我的钱包',
          drawerIcon: ({color, size}) => (
            <AntDesign name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Invite"
        component={Invite}
        options={{
          drawerLabel: '邀请好友',
          drawerIcon: ({color, size}) => (
            <AntDesign name="adduser" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="CardCoupons"
        component={CardCoupons}
        options={{
          drawerLabel: '卡券中心',
          drawerIcon: ({color, size}) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
