import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

// Direct imports to prevent circular dependency
import { Colors } from './colors';
import { Spacing } from './spacing';
import { Typography } from './typography';

// Define themes locally inside context file
export const LightTheme = {
  colors: Colors.light,
  typography: Typography,
  spacing: Spacing,
};

export const DarkTheme = {
  colors: Colors.dark,
  typography: Typography,
  spacing: Spacing,
};

export type AppTheme = typeof LightTheme;
type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: AppTheme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  themeMode: 'auto',
  setThemeMode: () => {},
  toggleTheme: () => {},
  isDarkMode: false,
});

const THEME_STORAGE_KEY = 'app_theme_mode';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (saved) setThemeMode(saved as ThemeMode);
      setIsReady(true);
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (isReady) AsyncStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode, isReady]);

  const theme = useMemo(() => {
    const mode = themeMode === 'auto' ? systemScheme : themeMode;
    return mode === 'dark' ? DarkTheme : LightTheme;
  }, [themeMode, systemScheme]);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value = useMemo(() => ({
    theme,
    themeMode,
    setThemeMode,
    toggleTheme,
    isDarkMode: themeMode === 'dark' || (themeMode === 'auto' && systemScheme === 'dark'),
  }), [theme, themeMode, systemScheme]);

  if (!isReady) return null;

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);