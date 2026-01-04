import ExperieanceIcone from '@/assets/SVG/ExperieanceIcone';
import HomeIcon from '@/assets/SVG/HomeIcon';
import ProjectIcon from '@/assets/SVG/ProjectIcon';
import SettingIcone from '@/assets/SVG/SettingIcone';
import SkillIcon from '@/assets/SVG/SkillIcon';
import { useTheme } from '@/theme/ThemeContext';
import { Typography } from '@/theme/typography';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MobileFooter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme(); 
  const insets = useSafeAreaInsets();

  const isActive = (routePath: string) => {
    if (routePath === '/' && pathname === '/') return true;
    return pathname === routePath;
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: (props: any) => <HomeIcon {...props} />, route: '/' },
    { id: 'experience', label: 'Experience', icon: (props: any) => <ExperieanceIcone {...props} />, route: '/screens/profile/Experience' },
    { id: 'projects', label: 'Projects', icon: (props: any) => <ProjectIcon {...props} />, route: '/screens/profile/Projects' },
    { id: 'skills', label: 'Skills', icon: (props: any) => <SkillIcon {...props} />, route: '/screens/profile/Skills' },
    { id: 'settings', label: 'Settings', icon: (props: any) => <SettingIcone {...props} />, route: '/screens/Setting' },
  ];

  return (
    <View style={[styles.container, { 
      backgroundColor: theme.colors.cardBackground,
      borderTopColor: theme.colors.borderSubtle,
      paddingBottom: insets.bottom > 0 ? insets.bottom : vs(10)
    }]}>
      {navItems.map((item) => {
        const active = isActive(item.route);
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => router.replace(item.route as any)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.iconContainer,
              active && { backgroundColor: `${theme.colors.brandAccent}20` }
            ]}>
              {item.icon({
                width: s(25),
                height: s(25),
                color: active ? theme.colors.brandAccent : theme.colors.textMuted
              })}
            </View>
            <Text style={[
              styles.label,
              { 
                color: active ? theme.colors.brandAccent : theme.colors.textMuted,
                fontFamily: active ? Typography.font.bodyBold : Typography.font.bodyMedium 
              }
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: vs(10),
    borderTopWidth: 1,
  },
  navItem: { alignItems: 'center', flex: 1 },
  iconContainer: { padding: s(6), borderRadius: s(10), marginBottom:s(5) },
  label: { fontSize: s(10), textAlign: 'center' },
  icon: { width: s(25), height: s(25) }
});

export default MobileFooter;