import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import ScreenNames from '../Helpers/ScreenNames';
import { showToast, validateUserEmail } from '../Helpers/Utils';
import { GetCurrentUserDataAPI, writeUserData } from '../Helpers/ApiCalls';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import colors from '../Helpers/colors';
// import SvgImage from '../Helpers/SvgImage';
import BottomSheetComponent from '../Helpers/SimpleBottomSheet';
const screenWidth = Math.round(Dimensions.get('window').width);



import CustomActivityIndicator from '../Helpers/CustomActivityIndicator';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/AntDesign';
