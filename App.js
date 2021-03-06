import React, {Component} from 'react';

import Drawer from './navi/DrawerNavigation';
import Stack from './navi/StackNavigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import Group from './js/components/Group';
import rootReducer from './reducers/reducers';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

// export default App;
const store = createStore(rootReducer);

export default class WelcomePage extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Provider store={store}>
            <App />
          </Provider>
        </ApplicationProvider>
      </>
    );
  }
}

// export default () => (
//   <>
//     <IconRegistry icons={EvaIconsPack} />
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ApplicationProvider>
//   </>
// );
