import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens/Profile';
import { Welcome } from '../screens/Welcome';
import Register from '../screens/Register';
import { Login } from '../screens/Login';


const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        headerShown: false,
      })}
      initialRouteName="Welcome"
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}