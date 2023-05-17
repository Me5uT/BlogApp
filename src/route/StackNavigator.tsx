/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Posts} from '../pages/posts/Posts';
import React, {useEffect} from 'react';
import {PostDetails} from '../pages/post-detail/PostDetails';
import useData from '../context/useData';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {loading} = useData();

  useEffect(() => {
    if (!loading) SplashScreen.hide();
  }, [loading]);

  console.log('loading', loading);
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="PostDetail" component={PostDetails} />
    </Stack.Navigator>
  );
};
