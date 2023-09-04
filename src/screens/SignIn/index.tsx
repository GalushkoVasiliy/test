/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {SCHEMA} from './types/types';
import {useNavigation} from '@react-navigation/native';
import BaseText from '../../components/BaseText';
import COLORS from '../../config/COLORS';
import InputContainer from './components/input-container';

const SignIn = props => {
  const {navigate} = useNavigation();

  const [error, setError] = useState(false);

  const checkData = useCallback(data => {
    SCHEMA.validate(data)
      .then(() => {
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    checkData({email: props.email, password: props.password});
  }, [checkData, props.email, props.password]);

  const login = () => {};

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View
      style={{flex: 1, width: '100%', height: '100%', alignItems: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <BaseText isTitle textKey="Sign in" />
      </View>
      <View
        style={{
          flex: 2,
          width: '100%',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <InputContainer
          theme={props.theme}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
        />

        <View style={{width: '100%', paddingVertical: 10}}>
          <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
            <BaseText textKey="SignIn.forgotPassword" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
          }}
          onPress={() => login()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          flexDirection: 'row',
          paddingBottom: 10,
        }}>
        <BaseText textKey="Don't have an account?" />
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigate('SignUp')}>
          <BaseText
            style={{
              color: COLORS.chathamsBlue,
              fontWeight: '800',
            }}
            textKey="Sign Up"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(SignIn);
