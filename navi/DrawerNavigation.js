/* eslint-disable react-native/no-inline-styles */
import Wallet from '../src/drawer/Wallet';
import Invite from '../src/drawer/Invite';
import CardCoupons from '../src/drawer/CardCoupons';
import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from './StackNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import menu from '../images/menu.gif';
import screen from '../utils/screen';
import background from '../images/bbb.png';

const Drawer = createDrawerNavigator();
const image = {uri: 'https://reactjs.org/logo-og.png'};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.menuContainer}>
        <Text style={styles.menuText}>MENU</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        width: 300,
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

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    paddingTop: 100,
  },
  menuText: {
    fontSize: 30,
    color: '#a1a1a1',
  },
  bgImg: {
    flex: 1,
  },
  allContainer: {
    height: screen.height + 50,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
