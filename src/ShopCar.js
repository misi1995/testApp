/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import Modal from 'react-native-modalbox';
import screen from '../utils/screen';
import bg from '../images/bg.gif';
import {Icon, Button} from '@ui-kitten/components';

export default function Shopcar() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const modal = useRef(null);

  useEffect(() => {
    _startAnimated();
  });

  function _startAnimated() {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      _startAnimated();
    });
  }

  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.bg} />
      <Button onPress={() => modal.current.open()} style={styles.btn}>
        <Text style={styles.btnText}>打开登陆界面</Text>
      </Button>
      <Modal
        style={[styles.modal, styles.modal2]}
        backdrop={false}
        backdropPressToClose={false}
        position={'bottom'}
        useNativeDriver
        ref={modal}>
        <View style={{height: 300}}>
          <Animated.View style={[styles.textContainer, {marginTop: fadeAnim}]}>
            <Icon
              name="arrowhead-down-outline"
              fill="#A1A1A1"
              style={styles.deleteIcon}
            />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  modal: {
    alignItems: 'center',
  },

  modal2: {
    height: screen.height - 228,
    backgroundColor: '#FFF2F2',
    borderTopLeftRadius: 70,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 25,
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
  bg: {
    width: screen.width,
    height: 200,
  },
  btnText: {
    color: '#E7BDCE',
  },
  textContainer: {
    marginVertical: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  titleText: {
    color: '#E7BDCE',
    fontSize: 30,
  },
  deleteIcon: {
    width: 36,
    height: 36,
  },
});
