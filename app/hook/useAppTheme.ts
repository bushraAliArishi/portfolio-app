// app/hook/useAppTheme.ts
import { useTheme } from '@/theme/ThemeContext'; // Import from Context, not index

export const useAppTheme = () => {
  const context = useTheme();
  return {
    ...context.theme,
    themeMode: context.themeMode,
    setThemeMode: context.setThemeMode,
    toggleTheme: context.toggleTheme,
    isDarkMode: context.isDarkMode,
  };
};