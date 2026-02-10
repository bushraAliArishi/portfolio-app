import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { AppText } from '../common/Text';
import { Ionicons } from '@expo/vector-icons'; // Built-in with Expo

interface AppCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

export const AppCheckbox = ({ label, checked, onChange }: AppCheckboxProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={styles.row} 
      onPress={() => onChange(!checked)}
      activeOpacity={0.7}
    >
      <View style={[
        styles.box, 
        { 
          borderColor: theme.colors.brandPrimary, 
          backgroundColor: checked ? theme.colors.brandPrimary : 'transparent' 
        }
      ]}>
        {checked && <Ionicons name="checkmark" size={16} color={theme.colors.textInverse} />}
      </View>
      <AppText variant="bodySmall" style={{ marginLeft: theme.spacing.s }}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  box: { width: 22, height: 22, borderWidth: 2, borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
});