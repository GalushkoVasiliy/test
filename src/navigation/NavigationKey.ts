export type NavigationKeyType =
  | 'SplashScreenContainer'
  | 'SignInScreenContainer'
  | 'SignUpScreenContainer';

const NavigationKey: {[key in NavigationKeyType]: NavigationKeyType} = {
  SplashScreenContainer: 'SplashScreenContainer',
  SignInScreenContainer: 'SignInScreenContainer',
  SignUpScreenContainer: 'SignUpScreenContainer',
};

export default NavigationKey;
