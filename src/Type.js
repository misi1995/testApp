import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {addTodo} from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';

let timer = null;

export default function Details() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.arr);

  useEffect(() => {
    timer = setInterval(() => {
      const time1 = new Date();
      setTime(time1.toLocaleTimeString());
    }, 1000);
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  });

  function _deleteItem(index) {
    console.log('1111');
    let subArr = [...arr];
    subArr.splice(index, 1);
    dispatch(addTodo(subArr));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.timeText}>当前时间</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      {arr !== undefined
        ? arr.map((item, index) => (
            <View style={styles.controlContainer}>
              <View>
                <Text style={styles.text} status="control">
                  {item.text}
                </Text>
                <Text style={styles.tText} status="control">
                  {item.time}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  _deleteItem(index);
                }}>
                <Icon name="close-outline" style={styles.icon} fill="#ffffff" />
              </TouchableOpacity>
            </View>
          ))
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    padding: 0,
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
  calendar: {
    padding: 0,
    width: '100%',
    // flex: 1,
  },
  time: {
    marginTop: 50,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    // width: screen.width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3EC94A',
  },
  tags: {
    fontSize: 24,
  },
  timeText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  text: {
    // margin: 4,
    color: 'white',
    fontSize: 16,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    margin: 15,
    padding: 10,
    backgroundColor: '#3366FF',
  },
  tText: {
    marginTop: 10,
    fontSize: 12,
    color: 'white',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
