// ui/Logo.tsx
import React from 'react';
import { Dimensions, Text, View, StyleSheet, ViewStyle } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { useTheme } from '@/theme/ThemeContext';
import BushraLogo from '@/assets/SVG/BushraLogo';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  style?: ViewStyle;
}

const Logo = ({ size = 'medium', showText = true, style }: LogoProps) => {
  const { theme } = useTheme(); 
  const { width } = Dimensions.get('window');
  
  const sizeMap = {
    small: width * 0.3,
    medium: width * 0.5,
    large: width * 0.7,
  };

  const textSizeMap = {
    small: s(18),
    medium: s(24),
    large: s(32),
  };

  const imageWidth = s(sizeMap[size]);
  const imageHeight = vs(imageWidth * 0.6);

  return (
    <View style={[styles.container, style]}>
      <BushraLogo width={imageWidth} height={imageHeight} />
      {showText && (
        <Text style={[
          styles.text,
          {
            fontSize: textSizeMap[size],
            color: theme.colors.textHeading,
          }
        ]}>
          Bushra Arishi
        </Text>
      )}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: vs(20),
  },
  text: {
    fontWeight: 'bold',
    marginTop: vs(10),
  },
});