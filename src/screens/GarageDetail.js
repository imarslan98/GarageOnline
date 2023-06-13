import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../Helpers/colors';
import React, {useEffect, useState} from 'react';
import {requestCompleted} from '../Helpers/ApiCalls';

const GarageDetail = ({route}) => {
  const {itemTitle, orderArr} = route.params;
  const [garageData, setGarageData] = useState();
  console.log('order........????????', orderArr);
  //   const garageData = orderArr.filter((obj, index, self) => obj.plan.title === );
  useEffect(() => {
    filterByTitle(orderArr, itemTitle);
  }, []);
  const filterByTitle = (data, title) => {
    const garageDetail = data.filter(obj => obj.plan.title === title);
    setGarageData(garageDetail);
  };
  const completed = () => {
    return garageData.pop();
  };

  return (
    <View>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          Garage Detail
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          {itemTitle}
        </Text>
      </View>
      <View style={{flex: 0}}>
        <FlatList
          style={{marginRight: 15}}
          data={garageData}
          extraData={garageData}
          renderItem={({item}) => {
            console.log('>>>> item ', item);
            return (
              <View
                style={{
                  marginTop: 15,
                  alignItem: 'center',
                  justifyContent: 'center',
                  marginLeft: 15,
                  borderColor: '#FFA500',
                  borderRadius: 10,
                  borderWidth: 1,
                }}>
                <View>
                  <Image
                    // source={require('../Assets/garage.jpeg')}
                    style={{
                      flex: 1,
                      position: 'absolute',
                      resizeMode: 'cover',
                      width: '100%',
                      height: 250,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#FFA500',
                    marginLeft: 10,
                  }}>
                  Name: {item.userInfo.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#FFA500',
                    marginLeft: 10,
                  }}>
                  Phone No: {item.userInfo.userMobile}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#FFA500',
                    marginLeft: 10,
                  }}>
                  Title: {item.plan.title}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#FFA500',
                    marginLeft: 10,
                  }}>
                  Description: {item.plan.description}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0,
                  }}>
                  <Text
                    style={{
                      color: '#FFA500',
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    User Location :
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('====>>>>>', item.plan.coordinate);
                      if (item.lat !== '...') {
                        const scheme = Platform.select({
                          ios: 'maps:0,0?q=',
                          android: 'geo:0,0?q=',
                        });

                        const latLng = `${item.userInfo.lat},${item.userInfo.long}`;

                        console.log('->>>>>>>>>>>', latLng);
                        const url = Platform.select({
                          ios: `${scheme}@${latLng}`,
                          android: `${scheme}${latLng}`,
                        });

                        Linking.openURL(url);
                      } else {
                        showToast('Location not Added!');
                      }
                    }}>
                    <Text
                      style={{
                        color: '#FFA500',
                        width: '70%',
                        marginRight: 20,
                        marginBottom: 22,
                      }}>
                      {item.userInfo.lat} , {item.userInfo.long}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#FFA500',
                    marginHorizontal: 125,
                    borderRadius: 15,
                    marginVertical: 10,
                  }}
                  onPress={
                    () => completed()
                    // requestCompleted(item.plan.id)
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Finish
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default GarageDetail;

const styles = StyleSheet.create({});
