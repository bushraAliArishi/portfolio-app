// app/screens/Projects.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import MainLayout from '@/app/components/layouts/MainLayout';
import { useTheme } from '@/theme/ThemeContext';
import { Typography } from '@/theme/typography';



const Projects = () => {
  // FIX: Destructure { theme }
  const { theme } = useTheme(); 

  return (
    <MainLayout headerProps={{ title: 'Projects', showBack: true }}>
      <ScrollView style={styles.container}>
        <Text style={[styles.title, { color: theme.colors.textHeading }]}>
          My Projects
        </Text>
      </ScrollView>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(16),
  },
  title: {
     fontFamily: Typography.font.body,
    fontSize: s(24),
    fontWeight: '600',
    marginBottom: vs(20),
  },
});

export default Projects;