import React from 'react';
import ScreenNames from '../Helpers/ScreenNames';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, TabActions} from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/screen/Forgetscreen';
import Confirmation from '../screens/Confirmation';
import FindMore from '../screens/FindMore';
import Shoper from '../screens/Shoper';
import Settings from '../screens/Settings';
import ProfileEditScreen from '../screens/ProfileEditScreen/screen/ProfileEditScreen';
import Detail from '../screens/Detail';
import profile from '../screens/Profile';

import HomeTabNavigator from './BottomNavigator/Hometabnavigator';
import DrawerNavigator from './DrawerNavigation/DrawerNavigation';

import Arslan from '../screens/Arslan';
import Profile from '../screens/Profile';
import GarageDetail from '../screens/GarageDetail';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.SignIn}>
      <Stack.Screen name={ScreenNames.SignIn} component={SignIn} />
      <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
      <Stack.Screen
        name={ScreenNames.ForgetPasswordScreen}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name={ScreenNames.ProfileEditScreen}
        component={ProfileEditScreen}
      />

      <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
      <Stack.Screen name={ScreenNames.FindMore} component={FindMore} />
      <Stack.Screen name={ScreenNames.Shoper} component={Shoper} />
      <Stack.Screen name={ScreenNames.Settings} component={Settings} />
      <Stack.Screen name={ScreenNames.Detail} component={Detail} />
      <Stack.Screen name={ScreenNames.Profile} component={Profile} />
      <Stack.Screen name={ScreenNames.GarageDetail} component={GarageDetail} />

      <Stack.Screen
        name={ScreenNames.HomeTabNavigator}
        component={HomeTabNavigator}
      />
      <Stack.Screen
        name={ScreenNames.DrawerNavigator}
        component={DrawerNavigator}
      />

      <Stack.Screen name={ScreenNames.Confirmation} component={Confirmation} />

      <Stack.Screen name={ScreenNames.Arslan} component={Arslan} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
