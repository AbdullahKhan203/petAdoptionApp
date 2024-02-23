import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/auth/login/Login';
import SignUp from '../../screens/auth/signup/SignUp';
import Search from '../../screens/home/search';
import Menu from '../../screens/home/menu';

const Drawer = createDrawerNavigator();

export default function Drawr() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}