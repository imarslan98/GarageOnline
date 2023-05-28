import { View, Text,TouchableOpacity,ScrollView, Image, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenNames from '../Helpers/ScreenNames'

const Detail = ({navigation}) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20,backgroundColor:'#D3D3D3'}}>
        <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ScreenNames.HomeTabNavigator)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: '#FFA500', margin: 15, marginLeft: -8, }} />

                </TouchableOpacity>
            </View>
            <View>
                <ScrollView>
            <View>
       <TouchableOpacity
            style={{ width: '98%', height: 170, borderWidth: 0,  marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              navigation.navigate(ScreenNames.FindMore)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30,  }} source={require('../Assets/oil.jpeg')} />

          </TouchableOpacity>
          <Text style={{fontSize:25,color:'#133160'}}>Oil Change</Text>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 170, borderWidth: 0, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              navigation.navigate(ScreenNames.FindMore)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30,  }} source={require('../Assets/mechanic.jpeg')} />
          </TouchableOpacity>
          <Text style={{fontSize:25,color:'#133160'}}>Mechanic</Text>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 160, borderWidth: 0, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              navigation.navigate(ScreenNames.FindMore)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30,  }} source={require('../Assets/tyre.jpeg')} />
          </TouchableOpacity>
          <Text style={{fontSize:25,color:'#133160'}}>Tyre Change</Text>
        </View>
        <View  >
          <TouchableOpacity
            style={{ width: '98%', height: 160, borderWidth: 0, marginTop: 15, justifyContent: 'center', }}
            onPress={() => {
              navigation.navigate(ScreenNames.FindMore)
            }} >
            <Image style={{ marginTop: 0, height: 160, width: 320, resizeMode: "stretch", marginRight: 30,  }} source={require('../Assets/wheel.jpeg')} />
          </TouchableOpacity>
          <Text style={{fontSize:25,color:'#133160'}}>Wheel Balancing</Text>
          <TouchableOpacity
          style={{ width: '99%', height: 60, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', backgroundColor: '#FFA500', }}
          onPress={() => {
            navigation.navigate(ScreenNames.FindMore)
          }} >
          <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Find More</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
         
         
          
        
     
    </View>
  )
}

export default Detail