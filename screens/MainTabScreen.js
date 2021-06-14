import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen'; 
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab= createMaterialBottomTabNavigator();

const MainTabScreen = () =>(

 <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      
<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#d02860',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>


);

export default MainTabScreen;

const HomeStackScreen=({navigation}) => (
<HomeStack.Navigator screenOptions={{
headerStyle:{
backgroundColor:'#009387'

},
headerTintColor:"#fff",
headerTitleStyle:{
fontWeight:'bold'
}
  
}}>
        <HomeStack.Screen name="Home" component={HomeScreen} 
       options={{
  headerleft:()=>(
<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.
openDrawer()}></Icon.Button>

  )

       }}/>
      </HomeStack.Navigator> 

);

const DetailsStackScreen=({navigation}) => (
<DetailsStack.Navigator screenOptions={{
headerStyle:{
backgroundColor:'#009387'

},
headerTintColor:"#fff",
headerTitleStyle:{
fontWeight:'bold'
}
  
}}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} />
       
      </DetailsStack.Navigator> 

);