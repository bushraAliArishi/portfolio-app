import { AppTheme } from '@/theme/index';
import { Typography } from '@/theme/typography';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s } from 'react-native-size-matters';

interface ThemeOptionProps {
  label: string;
  icon: any; // Can be a string ("sun") or a component (SunIcon)
  isActive: boolean;
  onPress: () => void;
  theme: AppTheme;
}

export const ThemeOptionButton = ({ label, icon: Icon, isActive, onPress, theme }: ThemeOptionProps) => {
  
  const backgroundColor = isActive ? theme.colors.brandPrimary : 'transparent';
  
  const getContentColor = () => {
    if (!isActive) return theme.colors.textBody;
    // Simple brightness check for contrast
    const hex = theme.colors.brandPrimary.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? '#1E293B' : '#FFFFFF';
  };

  const contentColor = getContentColor();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { 
          borderColor: isActive ? theme.colors.brandPrimary : theme.colors.borderSubtle,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      {/* Logic to handle both SVG components and Feather strings */}
      {typeof Icon === 'function' ? (
        <Icon color={contentColor} width={s(18)} height={s(18)} />
      ) : (
        <Feather name={Icon} size={s(16)} color={contentColor} />
      )}

      <Text style={[
        styles.text, 
        { 
          color: contentColor,
          fontFamily: isActive ? Typography.font.bodyBold : Typography.font.bodyMedium 
        }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: s(10),
    borderRadius: s(12),
    borderWidth: 1,
    gap: s(6),
  },
  text: {
    fontSize: Typography.size.bodySmall,
  },
});