import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import MainLayout from '@/app/components/layouts/MainLayout';
import { useTheme } from '@/theme/ThemeContext';
import { Typography } from '@/theme/typography';
import { Feather } from '@expo/vector-icons';
import { ThemeOptionButton } from '../components/ui/ThemeOptionButton';
import SystemIcon from '@/assets/SVG/SystemIcon';
import MoonIcon from '@/assets/SVG/DarkIcon';
import SunIcon from '@/assets/SVG/LightIcon';

// 1. Move styles to the top to fix "Property icon does not exist"
const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { 
    paddingHorizontal: s(16),
    paddingTop: vs(10),
    paddingBottom: vs(30),
    flexGrow: 1 
  },
  icon: { width: s(20), height: s(20) }, // Icon style defined here
  section: { marginBottom: vs(20) },
  sectionTitle: {
    fontFamily: Typography.font.heading,
    fontSize: Typography.size.sectionTitle,
    marginBottom: vs(16),
  },
  card: {
    borderRadius: s(16),
    padding: s(16),
    elevation: 2,
  },
  settingLabel: {
    fontFamily: Typography.font.bodyMedium,
    fontSize: Typography.size.body,
    marginBottom: vs(12),
  },
  themeModeContainer: { flexDirection: 'row', gap: s(8) },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: s(15),
    borderRadius: s(12),
    marginTop: vs(20),
    gap: s(10),
  },
  signOutText: {
    fontFamily: Typography.font.bodyBold,
    fontSize: Typography.size.body,
  }
});

const Settings = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  return (
    <MainLayout headerProps={{ title: 'Settings', showBack: true }}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textHeading }]}>
            Appearance
          </Text>
          
          <View style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}>
            <Text style={[styles.settingLabel, { color: theme.colors.textHeading }]}>
              Theme Mode
            </Text>
            
            <View style={styles.themeModeContainer}>
              <ThemeOptionButton 
                label="Light" 
                icon={(props: any) => <SunIcon {...props} style={styles.icon} />}
                isActive={themeMode === 'light'}
                onPress={() => setThemeMode('light')}
                theme={theme}
              />
              <ThemeOptionButton 
                label="Dark" 
                icon={(props: any) => <MoonIcon {...props} style={styles.icon} />}
                isActive={themeMode === 'dark'}
                onPress={() => setThemeMode('dark')}
                theme={theme}
              />
              <ThemeOptionButton 
                label="System" 
                icon={(props: any) => <SystemIcon {...props} style={styles.icon} />}
                isActive={themeMode === 'auto'}
                onPress={() => setThemeMode('auto')}
                theme={theme}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.signOutButton, { backgroundColor: theme.colors.errorBackground + '15' }]}
        >
          <Feather name="log-out" size={s(18)} color={theme.colors.errorText} />
          <Text style={[styles.signOutText, { color: theme.colors.errorText }]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default Settings;