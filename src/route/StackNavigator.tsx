/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Posts} from '../pages/posts/Posts';
import React, {useEffect} from 'react';
import {PostDetails} from '../pages/post-detail/PostDetails';
import {useData} from '../context/useData';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {loading} = useData();

  // Hide splash screen when loading is false
  useEffect(() => {
    if (!loading) SplashScreen.hide();
  }, [loading]);

  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#4643f6'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="PostDetail" component={PostDetails} />
    </Stack.Navigator>
  );
};
