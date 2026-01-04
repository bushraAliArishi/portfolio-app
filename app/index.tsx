// app/index.tsx
import MainLayout from '@/app/components/layouts/MainLayout';
import { useAppTheme } from '@/app/hook/useAppTheme';
import { Typography } from '@/theme/typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { s } from 'react-native-size-matters';
import MobileHeader from './components/headers/MobileHeader';

export default function HomeScreen() {
  const { colors } = useAppTheme();

  const quickStats = [
    { label: 'Years Experience', value: '3+', icon: 'briefcase', color: colors.brandAccent },
    { label: 'Projects Delivered', value: '12+', icon: 'layers', color: colors.brandSage },
    { label: 'Technologies', value: '10+', icon: 'code', color: colors.brandPrimary },
  ];

  return (
    <MainLayout paddingOff={true}>
      <View style={{ backgroundColor: colors.cardBackground }}>
        <MobileHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.heroSection, { backgroundColor: colors.sectionBackground }]}>
          <View style={styles.heroContent}>
            <Text style={[styles.greeting, { color: colors.textMuted }]}>Hello! I am</Text>
            <Text style={[styles.name, { color: colors.textHeading }]}>Bushra Ali Arishi</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          {quickStats.map((stat, index) => (
            <View key={index} style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
              <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
              <Text style={[styles.statLabel, { color: colors.textMuted }]}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  heroSection: { padding: s(20), borderRadius: s(15), margin: s(15) },
  heroContent: { alignItems: 'flex-start' },
  greeting: { fontSize: s(16), fontFamily: Typography.font.body },
  name: { 
    fontSize: s(28), 
    fontFamily: Typography.font.heading, 
    // Removed fontWeight: '700'
  },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: s(15) },
  statCard: { flex: 1, padding: s(15), margin: s(5), borderRadius: s(12), alignItems: 'center' },
  statValue: { 
    fontSize: s(20), 
    fontFamily: Typography.font.bodyBold // Switched from body + weight to bodyBold
  },
  statLabel: { fontSize: s(10), textAlign: 'center', fontFamily: Typography.font.body }
});