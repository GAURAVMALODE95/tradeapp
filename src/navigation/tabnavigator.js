import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Portfolio from '../screens/portfolio';
import News from '../screens/News';
import Watchlist from '../screens/Watchlist';
import Profile from '../screens/Profile';
import Bottomnav from '../components/bottomnav';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => (
        <Bottomnav {...props} />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
      />
       
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
      />
      <Tab.Screen
        name="News"
        component={News}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;