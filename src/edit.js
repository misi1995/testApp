/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addTodo} from '../actions/actions';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Button,
} from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" fill="#A1A1A1" />
);

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

export default function Edit() {
  // hooks配置
  const [subText, setSubText] = useState('');
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.arr);
  const navigation = useNavigation();
  const input = useRef(null);

  function _submit() {
    setSubText('');
    const arr1 = arr !== undefined ? arr : [];
    const param = {};
    param.text = subText;
    param.time = new Date().toLocaleTimeString();
    arr1.push(param);
    dispatch(addTodo(arr1));
    navigation.navigate('Type');
  }

  const RightSubmit = () => (
    <Button
      appearance="ghost"
      style={styles.subbutton}
      onPress={() => _submit()}
      fill="#A1A1A1">
      <Text style={styles.btnText}>发表</Text>
    </Button>
  );

  function _autoFocus() {
    input.current.focus();
  }

  function _onChangeText(text) {
    setSubText(text);
  }

  return (
    <View style={styles.container}>
      <TopNavigation
        accessoryLeft={BackAction}
        accessoryRight={RightSubmit}
        alignment="center"
      />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => _autoFocus()}>
        <TextInput
          ref={input}
          style={styles.textArea}
          onChangeText={(text) => _onChangeText(text)}
          value={subText}
          multiline
        />
      </TouchableOpacity>
      <View style={styles.deleteContainer}>
        <TouchableOpacity style={styles.eachContainer}>
          <Icon name="close-outline" fill="#A1A1A1" style={styles.deleteIcon} />
          <Text style={styles.btnText}>清空</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.eachContainer,
            {borderBottomWidth: 1, borderBottomColor: '#E5E5E5'},
          ]}>
          <Icon name="close-circle" fill="#A1A1A1" style={styles.deleteIcon} />
          <Text style={styles.btnText}>清空</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textArea: {
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 18,
  },
  bigContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    paddingHorizontal: 25,
    height: 200,
    borderColor: '#A1A1A1',
    borderRadius: 10,
    padding: 0,
  },
  titleText: {
    color: 'red',
  },
  subbutton: {
    color: '#4398ff',
  },
  btnText: {
    color: '#A1A1A1',
  },
  deleteIcon: {
    width: 24,
    height: 24,
  },
  deleteContainer: {
    paddingHorizontal: 25,
  },
  eachContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
});
