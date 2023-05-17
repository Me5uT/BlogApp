/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Posts} from '../pages/posts/Posts';
import React from 'react';
import {PostDetails} from '../pages/post-detail/PostDetails';

const Stack = createStackNavigator();

export const StackNavigator = () => {
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