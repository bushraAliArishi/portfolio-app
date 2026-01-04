// app/screens/Skills.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import MainLayout from '@/app/components/layouts/MainLayout';
import { useTheme } from '@/theme/ThemeContext';
import { Typography } from '@/theme/typography';

const Skills = () => {
  
  const { theme } = useTheme(); 

  return (
    <MainLayout
      headerProps={{
        title: 'Skills',
        showBack: true,
      }}
    >
      <ScrollView style={styles.container}>
        <Text style={[styles.title, { color: theme.colors.textHeading }]}>
          Skills & Expertise
        </Text>
        {/* Add your skills content here */}
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
    fontSize: s(24),
    fontFamily: Typography.font.body,
    fontWeight: '600',
    marginBottom: vs(20),
  },
});

export default Skills;