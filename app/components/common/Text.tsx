import React from 'react';
import { Text, TextStyle, TextProps } from 'react-native';
import { useTheme } from '../../../theme'; // Adjust path based on your folder structure

interface AppTextProps extends TextProps {
  variant?: 'hero' | 'pageTitle' | 'sectionTitle' | 'cardTitle' | 'body' | 'bodySmall' | 'label';
  weight?: 'heading' | 'headingAlt' | 'body' | 'bodyMedium' | 'bodyBold';
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const AppText = ({ 
  variant = 'body', 
  weight = 'body', 
  color, 
  align = 'left',
  style, 
  children, 
  ...props 
}: AppTextProps) => {
  const { theme } = useTheme();

  const textStyle: TextStyle = {
    fontSize: theme.typography.size[variant],
    lineHeight: theme.typography.lineHeight[variant],
    fontFamily: theme.typography.font[weight],
    color: color || theme.colors.textBody,
    textAlign: align,
  };

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};