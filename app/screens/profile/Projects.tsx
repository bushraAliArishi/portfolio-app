import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import { useTheme } from '../../../theme';
import { ContentCard } from '../../components/ui/ContentCard';
import { ProjectHeader } from '../../components/headers/ProjectHeader'; // Import here
import MainLayout from '../../components/layouts/MainLayout';
import { projects } from '../../data/projects';
import { Spacing } from '../../../theme/spacing';

export default function ProjectsPage() {
  const { theme, isDarkMode } = useTheme();
  const { colors } = theme;

  return (
    <MainLayout paddingOff={true}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={colors.pageBackground} 
      />

      {/* New Dedicated Header */}
      <ProjectHeader title="Portfolio" count={projects.length} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.listContainer}>
          {projects.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              subtitle={item.category}
              description={item.description}
              imageUri={item.imageUri}
              link={item.link}
              tools={item.tools}
            />
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: Spacing.xxl },
  listContainer: { paddingHorizontal: Spacing.m },
});