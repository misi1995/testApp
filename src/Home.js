import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
// import {Avatar} from 'react-native-elements';
// import {Avatar, Overlay} from 'react-native-elements';
// import {View, ActionBar, Card, Text, Colors} from 'react-native-ui-lib';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  OverflowMenu,
  MenuItem,
} from '@ui-kitten/components';
// import cardImage from '../images/imag.jpg';
import timg from '../images/timg.jpg';
import timga from '../images/timga.jpg';
import timgb from '../images/timgb.jpg';
import timgc from '../images/timgc.jpg';
import screen from '../utils/screen';
import bg from '../images/bg.gif';
import Swiper from 'react-native-swiper';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" fill="#008DF2" />
);

const EditIcon = (props) => <Icon {...props} name="edit" fill="#008DF2" />;

const MenuIcon = (props) => (
  <Icon {...props} name="more-vertical" fill="#008DF2" />
);

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

export default class Details extends Component {
  static navigationOptions = {
    title: '首页',
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
      menuVisible: false,
    };
    this.app = [
      {
        text: '等你下课',
        // icon: require('../images/IMG1.png'),
        color: '#DDEFFB',
        iconColor: '#008DF2',
        iconName: 'activity-outline',
      },
      {
        text: '发如雪',
        // icon: require('../images/IMG2.png'),
        color: '#FFEEDA',
        iconColor: '#FD9D49',
        iconName: 'attach-outline',
      },
      {
        text: '听妈妈的话',
        // icon: require('../images/IMG3.png'),
        color: '#FBDFE0',
        iconColor: '#ED3751',
        iconName: 'link-2-outline',
      },
      {
        text: '黄金甲',
        // icon: require('../images/IMG4.png'),
        color: '#D8FCEF',
        iconColor: '#3EC94A',
        iconName: 'paper-plane-outline',
      },
    ];
  }

  _toggleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  };

  _editPress = () => {
    this.props.navigation.navigate('Details');
  };

  _renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={this._toggleMenu} />
  );

  _renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  _renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon} onPress={() => this._editPress()} />
      <OverflowMenu
        anchor={this._renderMenuAction}
        visible={this.state.menuVisible}
        onBackdropPress={this._toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.actionCon}>
        <TopNavigation
          alignment="center"
          title="测试应用"
          subtitle="V 1.0.1"
          accessoryLeft={this._renderBackAction}
          accessoryRight={this._renderRightActions}
          style={styles.title}
        />
        <View style={styles.swipe}>
          <Swiper removeClippedSubviews={false}>
            <View style={styles.slide}>
              <Image source={bg} style={styles.img1} cover />
            </View>
            <View style={styles.slide}>
              <Image source={timg} style={styles.img1} cover />
            </View>
            <View style={styles.slide}>
              <Image source={timga} style={styles.img1} cover />
            </View>
            <View style={styles.slide}>
              <Image source={timgb} style={styles.img1} cover />
            </View>
            <View style={styles.slide}>
              <Image source={timgc} style={styles.img1} cover />
            </View>
          </Swiper>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            {this.app.map((item) => {
              const menu = (
                <View
                  style={[styles.eachMenu, {backgroundColor: item.color}]}
                  key={item.iconColor}>
                  <Icon
                    style={styles.tagIcon}
                    fill={item.iconColor}
                    name={item.iconName}
                  />
                  {/* <Image source={item.icon} style={styles.menuImg} /> */}
                  <Text style={styles.menuText}>{item.text}</Text>
                </View>
              );
              return menu;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 240,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4398ff',
  },
  headerStyle: {
    backgroundColor: '#EB3695',
  },
  headerTitleStyle: {
    color: 'white',
    //设置标题的大小
    fontSize: 18,
    //居中显示
    alignSelf: 'center',
  },
  actionBar: {
    height: 50,
  },
  actionCon: {
    flex: 1,
    backgroundColor: 'white',
    width: screen.width,
  },
  cardCon: {
    backgroundColor: '#FFF7E0',
    width: screen.width,
  },
  img: {
    marginTop: 20,
  },
  star: {
    width: screen.width,
  },
  card: {
    width: screen.width * 0.3,
  },
  img1: {
    width: screen.width,
    height: screen.width * 0.5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    width: screen.width,
    height: screen.width * 0.5,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
  },
  swipe: {
    width: screen.width,
    height: screen.width * 0.5,
  },
  eachMenu: {
    marginBottom: 20,
    paddingVertical: 40,
    paddingHorizontal: 15,
    width: (screen.width - 50) / 2,
    height: 200,
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 10,
  },
  menuContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  menuImg: {
    width: 40,
    height: 40,
  },
  menuText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
  },
  tagIcon: {
    width: 24,
    height: 24,
    marginBottom: 40,
  },
  title: {
    color: 'red',
  },
});
