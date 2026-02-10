import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '../../../theme';
import { AppText } from '../common/Text';

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const AppInput = ({ label, error, style, ...props }: AppInputProps) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <AppText variant="label" weight="bodyMedium" style={{ marginBottom: theme.spacing.xs }}>
          {label}
        </AppText>
      )}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.textHeading,
            borderColor: error 
              ? theme.colors.errorText 
              : isFocused ? theme.colors.brandSage : theme.colors.borderSubtle,
            borderRadius: theme.spacing.radius.s,
            padding: theme.spacing.m,
          },
          style,
        ]}
        placeholderTextColor={theme.colors.textPlaceholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <AppText variant="bodySmall" color={theme.colors.errorText} style={{ marginTop: theme.spacing.xxs }}>
          {error}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16, width: '100%' },
  input: { borderWidth: 1, fontSize: 16 },
});