import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';
import { AppText } from '../components/common/Text';

export const TechTag = ({ label }: { label: string }) => {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.tag, 
      { backgroundColor: theme.colors.tagTechBg, borderRadius: theme.spacing.radius.pill }
    ]}>
      <AppText 
        variant="label" 
        color={theme.colors.tagTechText} 
        weight="bodyMedium"
      >
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: { paddingHorizontal: 12, paddingVertical: 4, marginRight: 8, marginBottom: 8 },
});