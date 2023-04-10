import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../../Pages/Discover/Discover';
import Products from '../../Pages/Products/Products';
import ICON from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Discover" 
      component={Discover} 
      options={{
        tabBarIcon: ({ color }) => (
          <ICON
            name="home"
            color={color}
            size={30}
          />
        ),
      }}/>
      <Tab.Screen 
      name="Products" 
      component={Products} 
      options={
        {
          headerShown: false,
            tabBarIcon: ({ color }) => (
              <ICON
                name="list"
                color={color}
                size={30}
              />
            ),
        }
      }/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
