import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
import SignUp from '../screens/auth/signup/SignUp';
import RecoverPass from '../screens/auth/recoverPass/RecoverPass';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp" component={SignUp}   options={{ headerShown: false }}  />
        <Stack.Screen name="RecoverPass" component={RecoverPass}    options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
