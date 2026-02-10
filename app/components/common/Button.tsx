import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../../../theme';
import { AppText } from './Text';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}

export const AppButton = ({ title, onPress, variant = 'primary', loading, disabled }: AppButtonProps) => {
  const { theme } = useTheme();

  const getStyles = () => {
    switch (variant) {
      case 'outline':
        return { bg: 'transparent', border: theme.colors.brandPrimary, text: theme.colors.brandPrimary };
      case 'secondary':
        return { bg: theme.colors.brandSage, border: 'transparent', text: theme.colors.textInverse };
      default:
        return { bg: theme.colors.brandPrimary, border: 'transparent', text: theme.colors.textInverse };
    }
  };

  const colors = getStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={loading || disabled}
      style={[
        styles.button,
        { 
          backgroundColor: disabled ? theme.colors.disabledBackground : colors.bg,
          borderColor: colors.border,
          borderWidth: variant === 'outline' ? 1 : 0,
          borderRadius: theme.spacing.radius.m,
          paddingVertical: theme.spacing.m,
        }
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <AppText weight="bodyBold" color={disabled ? theme.colors.disabledText : colors.text}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center', width: '100%' },
});