/**
 * [描述] 防止多次点击（去抖动）util
 * [日期] 2018-04-01
 * [作者] sun
 */
import {InteractionManager} from 'react-native';

let unBlocking = true;
const debounce = (navigation, routeName, params = {}) => {
  if (unBlocking) {
    unBlocking = false;
    navigation.navigate(routeName, params);
  }

  InteractionManager.runAfterInteractions(() => {
    unBlocking = true;
  });
};
export default debounce;
