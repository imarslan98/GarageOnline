import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DrawerNavigator from '../DrawerNavigation/DrawerNavigation';
import ProfileEditScreen from '../../screens/ProfileEditScreen/screen/ProfileEditScreen';
import Settings from '../../screens/Settings';

import ScreenNames from '../../Helpers/ScreenNames';
import Detail from '../../screens/Detail';
import FindMore from '../../screens/FindMore';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
  const MyTabBar = ({state, descriptors, navigation}) => {
    let backColor = '#BDEFDE';
    if (state.index === 1) {
      backColor = '#D7F79A';
    } else if (state.index === 2) {
      backColor = '#DDCBE5';
    } else if (state.index === 3) {
      backColor = '#DDCBE5';
    }

    return (
      <View style={{backgroundColor: 'ADD8E6'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: 'ADD8E6',
            padding: 20,
            overflow: 'hidden',
            shadowColor: '#FFA500',
            shadowRadius: 2,
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {label === ScreenNames.DrawerNavigator && (
                  <Icon name="home" color={'#133160'} size={25} />
                )}
                {label === ScreenNames.Profile && (
                  <Icon name="person" color={'#133160'} size={25} />
                )}
                {label === 'Garages' && (
                  <Icon name="directions-car" color={'#133160'} size={25} />
                )}
                {label === 'services' && (
                  <Icon name="build" color={'#133160'} size={25} />
                )}

                <Text style={{color: isFocused ? '#FFA500' : '#222'}}>
                  {label === ScreenNames.DrawerNavigator ? 'Dashboard' : label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.DrawerNavigator}>
      <Tab.Screen
        name={ScreenNames.DrawerNavigator}
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="Home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Garages"
        component={FindMore}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="directions-car" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="services"
        component={Detail}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="build" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileEditScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;
