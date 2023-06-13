import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {
  GetCurrentUserDataAPI,
  getUserData,
  writeUserData,
} from '../Helpers/ApiCalls';
import {showToast, validateUserEmail} from '../Helpers/Utils';

import Icon from 'react-native-vector-icons/AntDesign';
import CustomActivityIndicator from '../Helpers/CustomActivityIndicator';

const SignIn = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [isAgree, setisAgree] = useState(true);
  const [isSecure, setisSecure] = useState(true);
  const [Password, setPassword] = useState('');
  const [eMail, setEMail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef();

  const loginEmailAndPassword = async () => {
    auth()
      .signInWithEmailAndPassword(eMail.trim(), Password)
      .then(async user => {
        console.log('>>>  user ', user);

        await GetCurrentUserDataAPI();
        let userData = await getUserData();
        if (userData && userData._data && userData._data.email) {
        } else {
          await writeUserData({email: eMail});
        }
        userData = userData._data;
        setIsLoading(false);
        console.log('>>> userData ', userData);
        if (userData.type === 'User') {
          navigation.navigate(ScreenNames.HomeTabNavigator);
        } else {
          navigation.navigate(ScreenNames.Shoper);
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log('>>> error login ', error);
        if (error.code === 'auth/user-not-found') {
          showToast('That email address does not exists!');
        } else if (error.code === 'auth/wrong-password') {
          showToast('Wrong Password!');
        } else if (error.code === 'auth/network-request-failed') {
          showToast('Network Error');
        }
      });
  };

  const btnActionSignIn = () => {
    console.log('>>> Sign In click ', eMail);
    if (eMail === '') {
      showToast('Email is required!');
    } else if (!validateUserEmail(eMail.trim())) {
      showToast('Enter Valid Email!');
    } else if (Password === '') {
      showToast('Password is required!');
    } else if (Password.length < 8) {
      showToast('Password should be at least 8 characters ');
    } else {
      setIsLoading(true);
      loginEmailAndPassword();
      setEMail('');
      setPassword('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <CustomActivityIndicator isLoading={isLoading} />
      <ImageBackground
        // source={require('../Assets/Bgbg.jpg')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: '100%', // applied to Image
        }}>
        <Image
          source={require('../Assets/Logo.png')}
          style={{
            // marginLeft: 100,
            marginHorizontal: 120,
            width: 180,
            height: 180,
            marginTop: 40,
          }}
        />
        <ScrollView>
          <Text style={{marginTop: 40, color: '#133160', marginLeft: 20}}>
            Email
          </Text>
          <View
            style={{
              shadowColor: '#FFA500',
              shadowOffset: {
                width: 3,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              flexDirection: 'row',

              //   justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Email"
              value={eMail}
              style={{
                width: '90%',
                borderWidth: 1,
                marginTop: 10,
                paddingStart: 20,
                height: 50,
                borderColor: '#133160',
                marginHorizontal: 15,
                // marginLeft: 15,
                color: '#133160',
              }}
              onChangeText={text => setEMail(text)}
            />
            <Icon
              name="mail"
              size={30}
              style={{
                color: '#133160',
                marginLeft: -50,
                marginTop: 18,
              }}
            />
          </View>
          <Text style={{marginTop: 40, color: '#133160', marginLeft: 20}}>
            Password
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="**********"
              secureTextEntry={true}
              value={Password}
              style={{
                width: '90%',
                borderWidth: 1,
                marginTop: 10,
                paddingStart: 20,
                height: 50,
                marginHorizontal: 15,
                borderColor: '#133160',
                // marginLeft: 15,
                color: '#133160',
              }}
              onChangeText={text => setPassword(text)}
            />
            <Icon
              name="lock"
              size={30}
              style={{color: '#133160', marginLeft: -50, marginTop: 18}}
            />
          </View>

          <TouchableOpacity
            style={{
              //   width: '50%',
              borderWidth: 1,
              //   alignItems: 'center',
              paddingHorizontal: 30,
              borderRadius: 10,
              marginTop: 50,
              paddingStart: 10,
              marginHorizontal: 120,
              backgroundColor: '#133160',
              //   marginLeft: 80,
            }}
            onPress={() => {
              btnActionSignIn();
              // navigation.navigate(ScreenNames.Dashboard)
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
              }}>
              Log In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '40%',
              marginTop: 10,
              paddingStart: 6,
              //   marginLeft: 100,
              marginHorizontal: 120,
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.ForgetPasswordScreen);
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Forgot Passward?
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#133160',
            }}>
            Or
          </Text>

          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 12,
              fontWeight: 'bold',
              color: '#133160',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{
              width: '40%',
              paddingStart: 6,
              //   marginLeft: 100,
              marginHorizontal: 120,
              marginTop: 5,
            }}
            onPress={() => {
              navigation.navigate(ScreenNames.SignUp);
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#133160',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Sign Up Here
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
