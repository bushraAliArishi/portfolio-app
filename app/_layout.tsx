import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts
} from '@expo-google-fonts/inter';
import {
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold
} from '@expo-google-fonts/playfair-display';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from '../theme/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Playfair-SemiBold': PlayfairDisplay_600SemiBold,
    'Playfair-Medium': PlayfairDisplay_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ThemeProvider>
      <Stack 
        screenOptions={{ 
          headerShown: false,
          animation: 'none', 
          contentStyle: { backgroundColor: '#1E293B' } 
          
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="screens/profile/Experience" />
        <Stack.Screen name="screens/profile/Projects" />
        <Stack.Screen name="screens/profile/Skills" />
        <Stack.Screen name="screens/Setting" /> 
      </Stack>
    </ThemeProvider>
  );
}