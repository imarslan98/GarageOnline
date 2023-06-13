import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenNames from '../Helpers/ScreenNames';
//import { getOrdersRideAPI } from '../api/Api';
import {getOrdersRideAPI} from '../api/Api';
import Search from './Search';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {getUserData} from '../Helpers/ApiCalls';
import {SearchBar} from 'react-native-elements';
import colors from '../Helpers/colors';

const Dashboard = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [fuelOrdersList, setRideOrdersList] = useState([]);

  useEffect(() => {
    getRideOrderApi();
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getUserDataAPI();
    });

    return unsubscribe;
  }, [navigation]);

  const getRideOrderApi = async () => {
    setIsLoading(true);
    await getUserDataAPI();
    setIsLoading(false);
  };
  const getUserDataAPI = async () => {
    let user = await getUserData();
    user = user._data;
    console.log('>>> user >>', user);
    setUserName(user.name);
    setPicUrl(user.profileUrl);
    setTypeUser(user.type);
    setUserObj(user);
  };

  console.log('>>Search', Search);

  useEffect(() => {
    getorders();
  }, []);

  const getorders = async () => {
    let orders = await getOrdersRideAPI();
    // console.log('>>> orders ', orders);
  };
  const [SerachResult, SetSearchResult] = useState([]);
  const [SerachText, SetSearchText] = useState('');
  const onChangeFunc = text => {
    // let result = Search.filter(item => item.name.includes(text));
    SetSearchText(text);
    let result = Search.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(text.toLowerCase());
      });
    });

    // var result = Search.filter(function (o) {           // for each object o in the array bikeshops
    //     return o.name.indexOf(text) !== -1;
    // });
    console.log('>>> ', text, '>>> ', result);
    SetSearchResult(result);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <ImageBackground
          source={require('../Assets/back.jpg')}
          resizeMode="cover"
          style={{
            width: '100%', // applied to Image
          }}>
          <View>
            <Image
              // source={require('../Assets/Logo.png')}
              style={{
                marginLeft: 110,
                width: 120,
                height: 120,
                marginTop: 40,
              }}
            />
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}> */}
          {/* <Text
              style={{
                marginTop: 15,
                fontSize: 24,
                color: 'white',
                marginLeft: 20,
              }}>
              Welcome
            </Text> */}
          {/* <TouchableOpacity
              onPress={() => navigation.navigate(ScreenNames.ProfileEditScreen)}
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'pink',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              {picUrl ? (
                <SvgImage
                  source={{uri: picUrl}}
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: 'pink',
                    borderRadius: 25,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                />
              ) : (
                <Text style={{color: colors.black, fontSize: 28}}>
                  {userName ? userName[0] : 'C'}
                </Text>
              )}
            </TouchableOpacity> */}
          {/* </View> */}
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 24,
                textAlign: 'center',
                color: 'white',
              }}>
              {/* Mr. {userName} */}
            </Text>
          </View>
        </ImageBackground>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: '98%',
              height: 170,
              borderWidth: 0,
              marginTop: 20,
              alignItems: 'center',
              // justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.Detail);
            }}>
            <Image
              style={{
                marginTop: 0,
                height: 160,
                width: 320,
                resizeMode: 'stretch',
                // marginHorizontal: 40,
                // marginRight: 30,
                borderRadius: 10,
              }}
              source={require('../Assets/uber.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#133160'}}>Uber Fleets</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: '98%',
              height: 170,
              borderWidth: 0,
              marginTop: 15,
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.Detail);
            }}>
            <Image
              style={{
                marginTop: 0,
                height: 160,
                width: 320,
                resizeMode: 'stretch',
                // marginRight: 30,
                borderRadius: 10,
              }}
              source={require('../Assets/careem.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#133160'}}>Careem Fleets</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: '98%',
              height: 160,
              borderWidth: 0,
              marginTop: 15,
              // justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.Detail);
            }}>
            <Image
              style={{
                marginTop: 0,
                height: 160,
                width: 320,
                resizeMode: 'stretch',
                // marginRight: 30,
                borderRadius: 10,
              }}
              source={require('../Assets/indriver.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#133160'}}>Indriver Fleets</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: '98%',
              height: 160,
              borderWidth: 0,
              marginTop: 15,
              // justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.Detail);
            }}>
            <Image
              style={{
                marginTop: 0,
                height: 180,
                width: 320,
                resizeMode: 'stretch',
                // marginRight: 30,
                borderRadius: 10,
              }}
              source={require('../Assets/personal.jpg')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              color: '#133160',
              marginTop: 15,
            }}>
            Personal Car Solutions
          </Text>
        </View>
        {/* 
        <TouchableOpacity
          style={{
            width: '85%',
            height: 60,
            borderWidth: 0,
            borderRadius: 10,
            marginHorizontal: 30,
            marginTop: 25,
            justifyContent: 'center',
            backgroundColor: '#133160',
          }}
          onPress={() => {
            navigation.navigate(ScreenNames.FindMore);
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              fontSize: 20,
              color: 'white',
            }}>
            Find More
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
