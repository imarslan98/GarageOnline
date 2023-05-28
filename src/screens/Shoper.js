
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Linking, Platform,ImageBackground,Image } from 'react-native'
import { getRideOrder, getUserData } from '../Helpers/ApiCalls'
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../Helpers/colors';
import ScreenNames from '../Helpers/ScreenNames'

const Shoper = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [picUrl, setPicUrl] = useState('')
    const [fuelOrdersList, setRideOrdersList] = useState([])

    useEffect(() => {
        getRideOrderApi()
    }, [])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await getUserDataAPI()
        });

        return unsubscribe;
    }, [navigation]);

    const getRideOrderApi = async () => {
        setIsLoading(true)
        await getUserDataAPI()
        setIsLoading(false)
    }
    const getUserDataAPI = async () => {

        let user = await getUserData()
        user = user._data
        console.log('>>> user >>', user);
        setUserName(user.name)
        setPicUrl(user.profileUrl)
        setTypeUser(user.type)
        setUserObj(user)


    }

    useEffect(() => {
        getData()
    }, [])
    // console.log('>>> hello bro');
    const [order, setOrder] = useState([])
    const getData = async () => {
        let data = await getRideOrder()
        setOrder(data)
        // console.log('>>> getRideOrder', data);
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#D3D3D3' }}>

            <View style={{ backgroundColor: 'white', }}>
                <TouchableOpacity style={{ marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(ScreenNames.Settings)} >
                    <Text>
                        <Icon name='settings' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: 5, }} />
                    </Text>
                </TouchableOpacity>
               
                <Text style={{ alignContent: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 80, borderColor: '#133160', marginTop: -25,color:'#133160' }}>
                     Garage Owner's Dashboard
                </Text>

            </View>
            <ImageBackground source={require('../Assets/back.jpg')} resizeMode="cover" style={{
                
                width: '100%', // applied to Image
            }}>
        <View>
          <Image
            source={require('../Assets/Logo.png')}
            style={{
              marginLeft: 110,
              width: 120,
              height: 120,
              marginTop: 40,


            }}

          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', }} >
          <Text style={{ marginTop: 15, fontSize: 24, color: 'white', marginLeft: 20 }} >
            Welcome
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.ProfileEditScreen)}
            style={{ height: 50, width: 50, backgroundColor: 'pink', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
            {
              picUrl ?
                <SvgImage
                  source={{ uri: picUrl }}
                  style={{ height: 50, width: 50, backgroundColor: 'pink', borderRadius: 25, marginRight: 5,marginLeft:10 }}
                />
                :
                <Text style={{ color: colors.black, fontSize: 28 }} >
                  {
                    userName ?
                      userName[0] :
                      'C'}
                </Text>
            }
          </TouchableOpacity>

        </View>
        <View style={{ justifyContent: 'center', }} >
          <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'center', color: 'white', }} >
            Mr. {userName}
          </Text>
        </View>
        </ImageBackground>

            <FlatList style={{ marginRight: 15, }}
                data={order}
                renderItem={({ item }) => {
                    // console.log('>>>> item ');
                    return (
                        
                        <View style={{ marginTop: 15, alignItem: 'center', justifyContent: 'center', marginLeft: 15, borderColor: '#FFA500', borderRadius: 10, borderWidth: 1, }} >
                              <View>
          <Image
            source={require('../Assets/garage.jpeg')}
            style={{
                flex: 1,
                position: 'absolute',
                resizeMode: 'cover',
                width:'100%',
                height:250

            }}

          />
        </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Name:{"\n"}
                                {item.userInfo.name}</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFA500' }}>Phone No.:{"\n"}
                                {item.userInfo.userMobile}</Text>


                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Title:{"\n"}
                                {item.plan.title}</Text>


                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Description:{"\n"}
                                {item.plan.description}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }} >
                                <Text style={{ color:'#FFA500', fontWeight: 'bold' }} >
                                    User Location :
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('====>>>>>', item.plan.coordinate)
                                        if (item.lat !== '...') {

                                            const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });

                                            const latLng = `${item.userInfo.lat},${item.userInfo.long}`;

                                            console.log('->>>>>>>>>>>', latLng)
                                            const url = Platform.select({
                                                ios: `${scheme}@${latLng}`,
                                                android: `${scheme}${latLng}`
                                            });


                                            Linking.openURL(url);
                                        }
                                        else {
                                            showToast('Location not Added!')
                                        }
                                    }}
                                >
                                    <Text style={{ color: colors.white, width: '70%', marginRight: 10, marginBottom: 10, }}>
                                        {item.userInfo.lat} , {item.userInfo.long}
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    )
                }
                }
            />
        </View>
    )
}

export default Shoper