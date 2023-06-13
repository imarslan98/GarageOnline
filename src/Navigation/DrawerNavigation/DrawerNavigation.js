import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Dashboard from '../../screens/Dashboard';
import Settings from '../../screens/Settings';
import ScreenNames from '../../Helpers/ScreenNames';

import ProfileEditScreen from '../../screens/ProfileEditScreen/screen/ProfileEditScreen';
import Logout from '../../screens/Logout';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
        },

        drawerPosition: 'right',
      }}
      initialRouteName={ScreenNames.Dashboard}>
      <Drawer.Screen name="Profile" component={ProfileEditScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
