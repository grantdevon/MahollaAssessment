import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../../Pages/Discover/Discover';
import Products from '../../Pages/Products/Products';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Discover" component={Discover} /> */}
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
