import { Colors } from './colors';
import { Spacing } from './spacing';
import { Typography } from './typography';

export { Colors, Spacing, Typography };
export { ThemeProvider, useTheme } from './ThemeContext';

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