import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="BottomTabNavigation" 
        component={BottomTabNavigation} 
        options={
          {
            headerShown: false
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


