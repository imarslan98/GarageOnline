import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../Helpers/ScreenNames';
import auth from '@react-native-firebase/auth';

const Logout = ({navigation}) => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth().signOut();
        console.log('User Signed Out!');
        navigation.navigate(ScreenNames.SignIn);
      } catch (error) {
        console.log('Error during logout:', error);
      }
    };

    handleLogout();
  }, [navigation]);

  return null;
};

export default Logout;
