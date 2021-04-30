import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Order from 'react-native-vector-icons/SimpleLineIcons';
import Donate from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import DetailScreen from './DetailScreen';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Order:{
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
              <Order style={[{color: tintColor}]}  size={22} name={'handbag'} />
          </View>
        )
      }
    },
    Donate:{
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
              <Donate style={[{color: tintColor}]} size={25} name={'hand-heart'} />
          </View>
        )
      }
    },
    GoOut:{
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
               <Order style={[{color: tintColor}]}  size={22} name={'handbag'} />
          </View>
        )
      }
    },
    Pro:{
      screen: DetailScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
              <Donate style={[{color: tintColor}]} size={25} name={'hand-heart'} />
          </View>
        )
      }
    },
  },
  {
    initialRouteName: 'Order',
    activeColor: 'black',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: 'white',},
  }
);


export default createAppContainer(TabNavigator);

