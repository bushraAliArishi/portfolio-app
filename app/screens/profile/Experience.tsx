import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from '../../../theme'; // Updated to use your context hook
import { Ionicons } from '@expo/vector-icons';
import { ContentCard } from '../../components/ui/ContentCard'; // Using the new reusable card
import ExperienceHeader from '../../components/headers/ExperienceHeader';
import MainLayout from '../../components/layouts/MainLayout';
import { experiences } from '../../data/Experience'; // Updated data source
import { projects } from '../../data/projects'; // For the projects stat
import { Typography } from '../../../theme/typography';
import { Spacing } from '../../../theme/spacing';

export default function ExperiencePage() {
  const { theme, isDarkMode } = useTheme();
  const { colors } = theme;
  
  const [showSkills, setShowSkills] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  // Logic to calculate years from your CV data
  const stats = useMemo(() => {
    const monthMap: { [key: string]: number } = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    const parseDateStr = (str: string) => {
      if (!str) return null;
      if (str.toLowerCase().includes('present')) return new Date();
      
      const parts = str.trim().split(/\s+/); 
      if (parts.length < 2) return null;

      const monthName = parts[0].toLowerCase().substring(0, 3);
      const year = parseInt(parts[1], 10);
      const month = monthMap[monthName] ?? 0;

      const date = new Date(year, month, 1);
      return isNaN(date.getTime()) ? null : date;
    };

    const calculateMonths = (period: string) => {
      const parts = period.split(/[–—-]/); 
      if (parts.length < 2) return 0;
      const startDate = parseDateStr(parts[0]);
      const endDate = parseDateStr(parts[1]);
      if (!startDate || !endDate) return 0;
      return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    };

    const totalMonths = experiences.reduce((acc, exp) => acc + calculateMonths(exp.period), 0);
    
    return {
      positions: experiences.length,
      years: Math.floor(totalMonths / 12) || 3, // Fallback to 3+ based on CV Summary
      projects: projects.length, 
    };
  }, [experiences]);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    experiences.forEach(exp => exp.tools?.forEach(t => skills.add(t.name)));
    return Array.from(skills);
  }, []);

  const filteredExperiences = useMemo(() => {
    return filter === 'all' 
      ? experiences 
      : experiences.filter(exp => exp.tools?.some(t => t.name === filter));
  }, [filter]);

  return (
    <MainLayout paddingOff={true}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={colors.pageBackground} />
      
      <ExperienceHeader 
        title="Experience" 
        positions={stats.positions} 
        years={stats.years} 
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Stats Section */}
        <View style={[styles.statsSection, { backgroundColor: colors.sectionBackground }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.brandPrimary }]}>{stats.positions}</Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>Jobs</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.borderSubtle }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.brandSage }]}>{stats.years}+</Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>Years</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.borderSubtle }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: colors.brandAccent }]}>{stats.projects}+</Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>Projects</Text>
          </View>
        </View>

        {/* Filter Chips */}
        <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersScroll}>
            <TouchableOpacity
              onPress={() => setFilter('all')}
              style={[styles.filterChip, { backgroundColor: filter === 'all' ? colors.brandPrimary : colors.tagDefaultBg }]}
            >
              <Text style={[styles.filterText, { color: filter === 'all' ? colors.textInverse : colors.tagDefaultText }]}>All</Text>
            </TouchableOpacity>
            {allSkills.map((skill) => (
              <TouchableOpacity
                key={skill}
                onPress={() => setFilter(skill)}
                style={[styles.filterChip, { backgroundColor: filter === skill ? colors.brandSage : colors.tagDefaultBg }]}
              >
                <Text style={[styles.filterText, { color: filter === skill ? colors.textInverse : colors.tagDefaultText }]}>{skill}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Toggle Skills View */}
        <View style={[styles.controlsSection, { backgroundColor: colors.cardBackground }]}>
            <TouchableOpacity 
              onPress={() => setShowSkills(!showSkills)} 
              style={[styles.toggleButton, { backgroundColor: showSkills ? colors.brandSage : 'transparent', borderColor: colors.borderSubtle }]}
            >
              <Ionicons name="code-slash-outline" size={18} color={showSkills ? colors.textInverse : colors.textBody} />
              <Text style={[styles.toggleText, { color: showSkills ? colors.textInverse : colors.textBody }]}>
                {showSkills ? "Hide Tool Icons" : "Show Tool Icons"}
              </Text>
            </TouchableOpacity>
        </View>

        {/* Experience List - Mapping to the new ContentCard */}
        <View style={styles.columnLayout}>
          {filteredExperiences.map((exp) => (
            <ContentCard 
              key={exp.id}
              title={exp.title}
              subtitle={exp.company}
              imageUri={exp.companyLogo}
              link={exp.companyUrl}
              dateRange={exp.period}
              description={exp.description}
              tools={showSkills ? exp.tools : []} // Conditionally show tool logos
            />
          ))}
        </View>

        {/* Footer Skills Summary */}
        <View style={[styles.skillsSummary, { backgroundColor: colors.sectionBackground }]}>
          <Text style={[styles.summaryTitle, { color: colors.textHeading }]}>Technical Expertise</Text>
          <View style={styles.skillsGrid}>
            {allSkills.map((skill, index) => (
              <View key={index} style={[styles.skillSummaryTag, { backgroundColor: colors.tagTechBg }]}>
                <Text style={[styles.skillSummaryText, { color: colors.tagTechText }]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: Spacing.xxl },
  statsSection: { flexDirection: 'row', padding: Spacing.m, margin: Spacing.m, borderRadius: Spacing.radius.l, justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statNumber: { fontFamily: Typography.font.heading, fontSize: Typography.size.sectionTitle },
  statLabel: { fontFamily: Typography.font.body, fontSize: Typography.size.micro },
  statDivider: { width: 1, height: '100%' },
  filtersContainer: { marginBottom: Spacing.m },
  filtersScroll: { paddingHorizontal: Spacing.m, gap: Spacing.s },
  filterChip: { paddingHorizontal: Spacing.m, paddingVertical: Spacing.xs, borderRadius: Spacing.radius.pill },
  filterText: { fontFamily: Typography.font.bodyMedium, fontSize: Typography.size.label },
  controlsSection: { marginHorizontal: Spacing.m, marginBottom: Spacing.m, padding: Spacing.s, borderRadius: Spacing.radius.m },
  toggleButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Spacing.s, borderRadius: Spacing.radius.s, borderWidth: 1, gap: Spacing.xs },
  toggleText: { fontFamily: Typography.font.bodyMedium, fontSize: Typography.size.label },
  columnLayout: { paddingHorizontal: Spacing.m },
  skillsSummary: { padding: Spacing.m, margin: Spacing.m, borderRadius: Spacing.radius.l },
  summaryTitle: { fontFamily: Typography.font.heading, fontSize: Typography.size.cardTitle, marginBottom: Spacing.m },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.s },
  skillSummaryTag: { paddingHorizontal: Spacing.s, paddingVertical: Spacing.xs, borderRadius: Spacing.radius.s },
  skillSummaryText: { fontFamily: Typography.font.bodyMedium, fontSize: Typography.size.label },
});