import React, { FC, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation/BottomTabNavigation';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/Redux/store';
import { fetchData } from './src/Services/API/products.service';
import { fetchProducts } from './src/Redux/Reducers/Product.reducer';

const Stack = createNativeStackNavigator();



const App: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


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


