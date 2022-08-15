import { useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

import {
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import { Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

