/**
 * [描述] 常规导航条组件
 * [日期] 2018-04-01
 * [作者] sun
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import color from './color'


export default (
  { navigation },
  title = '',
  backBtn = true,
) => {
  return {
    headerLeft: (
      backBtn ? (
        <TouchableOpacity onPress={() => {
            // 返回时执行有传递的刷新父页面的函数体
            if (navigation.state.params.refreshData !== undefined) {
              navigation.state.params.refreshData();
            }
            if (navigation.state.params.boceRefreshData !== undefined) {
              navigation.state.params.boceRefreshData();
            }
            if (navigation.state.params.refresh !== undefined && navigation.state.params.refreshTaskData) {
              navigation.state.params.refreshTaskData();
            }
            if (navigation.state.params.getBoceResult !== undefined) {
              navigation.state.params.getBoceResult();
            }
            if (navigation.state.params.callbackStepSix !== undefined) {
              navigation.state.params.callbackStepSix();
            }
            if (navigation.state.params.goBack !== undefined) {
              navigation.state.params.goBack();
            }
            navigation.goBack();
          }}
        >
        </TouchableOpacity>
      ) : <View />
    ),
    headerTitle: (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  backImage: {
    marginLeft: 10,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    color: color.white,
    fontSize: 15,
    fontWeight: '500',
  },
  headerRightContainer: {
    marginRight: 10,
  },
  headerRightText: {
    color: color.white,
    fontSize: 15,
    fontWeight: '500',
    marginRight: 10,
  },
});
