import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';

import { useTheme } from 'styled-components/native';
import { Image } from 'react-native-svg';

const { Navigator, Screen } = createBottomTabNavigator();

import HomeSvg from '../assets/icons/line/Home.svg';
import ProfileSvg from '../assets/icons/line/Profile.svg';
import SearchSvg from '../assets/icons/line/Search.svg';
import TicketSvg from '../assets/icons/line/Ticket.svg';
import VideoSvg from '../assets/icons/line/Video.svg';

import HomeSvgSolid from '../assets/icons/solid/Home.svg';
import ProfileSvgSolid from '../assets/icons/solid/Profile.svg';
import SearchSvgSolid from '../assets/icons/solid/Search.svg';
import TicketSvgSolid from '../assets/icons/solid/Ticket.svg';
import VideoSvgSolid from '../assets/icons/solid/Video.svg';
import { Video } from '../screens/Video';
import { Ticket } from '../screens/Ticket';
import { Profile } from '../screens/Profile';
import AuthRoutes from './auth.routes';


export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.background
        },
      })}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => !focused ? <HomeSvg /> : <HomeSvgSolid color={color} />,
        }}        
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => !focused ? <SearchSvg /> : <SearchSvgSolid color={color} />,
        }}
      />

      <Screen
        name="Video"
        component={Video}
        options={{
          tabBarIcon: ({ focused, color }) => !focused ? <VideoSvg /> : <VideoSvgSolid color={color} />,
        }}
      />

      <Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarIcon: ({ focused, color }) => !focused ? <TicketSvg /> : <TicketSvgSolid color={color} />,
        }}
      />
      <Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => !focused ? <ProfileSvg /> : <ProfileSvgSolid color={color} />,
        }}
      />
    </Navigator>
  );
}