/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ThemeProvider, Text} from 'react-native-elements';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import theme from './src/Theme';
const {colors} = theme;
import reducers from './src/redux';
import SceneNavigator from './src/navigations';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SceneNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
