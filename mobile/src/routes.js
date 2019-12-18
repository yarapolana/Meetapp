import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { enableScreens } from 'react-native-screens';

import {
  Dashboard,
  Profile,
  SignIn,
  SignUp,
  Subscriptions,
} from './navigation';

import { theme } from './constants';

enableScreens();

const SignStack = createSwitchNavigator({
  SignIn,
  SignUp,
});

const AppStack = createBottomTabNavigator(
  {
    Dashboard,
    Subscriptions,
    Profile,
  },
  {
    tabBarOptions: {
      activeTintColor: theme.color.white,
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: theme.color.tabbar,
        borderTopWidth: 0,
        paddingTop: 5,
      },
      keyboardHidesTabBar: true,
    },
    resetOnBlur: true,
  },
);

const Routes = (isSigned = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignStack,
        AppStack,
      },
      {
        initialRouteName: isSigned ? 'AppStack' : 'SignStack',
      },
    ),
  );

export default Routes;
