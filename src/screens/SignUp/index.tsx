/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const SignUp = props => {
  //   const [error, setError] = useState(false);

  //   const checkData = useCallback(data => {
  //     SCHEMA.validate(data)
  //       .then(() => {
  //         setError(false);
  //       })
  //       .catch(() => {
  //         setError(true);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     checkData({email: props.email, password: props.password});
  //   }, [checkData, props.email, props.password]);

  //   const login = () => {
  //     props.login({
  //       email: props.email,
  //       password: props.password,
  //     });
  //   };

  //   const setEmail = (email: string) => {
  //     props.setEmail(email);
  //   };
  //   const setPassword = (password: string) => {
  //     props.setPassword(password);
  //   };

  return (
    <View
      style={{backgroundColor: 'red', flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{}}>
        <Text style={{}}>sign in.SignUp </Text>
      </ScrollView>
    </View>
  );
};

export default React.memo(SignUp);
