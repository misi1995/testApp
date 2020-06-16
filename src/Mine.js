import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Icon} from '@ui-kitten/components';
import background from '../images/bbb.png';
import screen from '../utils/screen';

class Details extends Component {
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
        text: '消费清单',
        // icon: require('../images/IMG1.png'),
        color: '#DDEFFB',
        iconColor: '#008DF2',
        iconName: 'briefcase-outline',
      },
      {
        text: '地址管理',
        // icon: require('../images/IMG2.png'),
        color: '#FFEEDA',
        iconColor: '#FD9D49',
        iconName: 'home-outline',
      },
      {
        text: '账号设置',
        // icon: require('../images/IMG3.png'),
        color: '#FBDFE0',
        iconColor: '#ED3751',
        iconName: 'settings-outline',
      },
      {
        text: '关于我们',
        // icon: require('../images/IMG4.png'),
        color: '#D8FCEF',
        iconColor: '#3EC94A',
        iconName: 'share-outline',
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={background} style={styles.bg} />
          <View style={styles.topItem}>
            <Avatar
              style={styles.avatar}
              size="giant"
              source={require('../images/avator.png')}
            />
            <Text style={styles.topText}>Kittyy</Text>
          </View>
          <View style={styles.topContainer}>
            <View style={styles.topContent}>
              <Icon name="heart-outline" fill="#FFFFFF" style={styles.icon} />
              <Text style={styles.topText1}>我的喜欢</Text>
            </View>
            <View style={styles.topContent}>
              <Icon
                name="shopping-bag-outline"
                fill="#FFFFFF"
                style={styles.icon}
              />
              <Text style={styles.topText1}>历史订单</Text>
            </View>
          </View>
          <View style={styles.content}>
            {this.app.map((item, index) => {
              return (
                <View style={styles.eachItem} key={item.text}>
                  <Icon
                    name={item.iconName}
                    fill="#FFFFFF"
                    style={styles.icon}
                  />
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('[MaterialConfirmListScreen] mapStateToProps() start.');
  return {
    id: state.id,
  };
}

export default connect(mapStateToProps, null)(Details);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f2f2f2',
    // borderTopLeftRadius: 70,
  },
  subContainer: {
    flex: 1,
    marginTop: 80,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 70,
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
  avatar: {
    borderWidth: 5,
    borderColor: '#F1F1F1',
    width: 120,
    height: 120,
    margin: 20,
    backgroundColor: 'white',
    // position: 'absolute',
    // top: -60,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 35,
  },
  eachItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: 'white',
  },
  topItem: {
    position: 'absolute',
    top: -60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 30,
    color: 'white',
  },
  topText1: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
  },
  topContainer: {
    marginTop: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topContent: {
    width: 100,
    alignItems: 'center',
  },
  bg: {
    borderTopLeftRadius: 70,
    width: screen.width,
    height: screen.height - 100,
    position: 'absolute',
    // top: -100,
    left: 0,
  },
});
