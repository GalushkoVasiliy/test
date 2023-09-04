/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import NavigationKey from './NavigationKey';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';

import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const RootNavigator: React.FunctionComponent = props => {
  return (
    <SafeAreaView
      mode="padding"
      edges={['top', 'bottom']}
      style={{
        flex: 1,
      }}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigator;
