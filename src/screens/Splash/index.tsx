/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
// import COLORS from '../../config/COLORS';
// import {useTranslation} from 'react-i18next';
import LottieView from 'lottie-react-native';
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{width: 180, height: 180}}
        source={require('../../assets/lottie/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default React.memo(SplashScreen);
