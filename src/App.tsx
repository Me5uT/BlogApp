import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DataProvider} from './context/DataProvider';
import {StackNavigator} from './route/StackNavigator';

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
