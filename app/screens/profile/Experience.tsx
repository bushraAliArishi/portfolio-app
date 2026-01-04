import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { useAppTheme } from '@/app/hook/useAppTheme';
import { Ionicons } from '@expo/vector-icons';
import ExperienceCard from '@/app/components/ui/ExperienceCard';
import ExperienceHeader from '@/app/components/headers/ExperienceHeader';
import MainLayout from '@/app/components/layouts/MainLayout';
import { experiences } from '@/app/data/Experience';
import { Typography } from '@/theme/typography';
import { Spacing } from '@/theme/spacing';

export default function ExperiencePage() {
  const { colors, isDarkMode } = useAppTheme();
  
  const [variant, setVariant] = useState<'default' | 'compact'>('default');
  const [showSkills, setShowSkills] = useState(true);
  const [filter, setFilter] = useState<string>('all');

 const stats = useMemo(() => {
    const monthMap: { [key: string]: number } = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    const parseDateStr = (str: string) => {
      if (!str) return null;
      if (str.toLowerCase().includes('present')) return new Date();
      
      // Split "Jan 2021" into ["Jan", "2021"]
      const parts = str.trim().split(/\s+/); 
      if (parts.length < 2) return null;

      const monthName = parts[0].toLowerCase().substring(0, 3);
      const year = parseInt(parts[1], 10);
      const month = monthMap[monthName] ?? 0;

      const date = new Date(year, month, 1);
      return isNaN(date.getTime()) ? null : date;
    };

    const calculateMonths = (period: string) => {
      // 1. Split by any kind of dash (standard, en-dash, em-dash)
      const parts = period.split(/[–—-]/); 
      if (parts.length < 2) return 0;

      const startDate = parseDateStr(parts[0]);
      const endDate = parseDateStr(parts[1]);

      if (!startDate || !endDate) return 0;

      const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
      const monthsDiff = endDate.getMonth() - startDate.getMonth();
      
      return (yearsDiff * 12) + monthsDiff;
    };

    const totalMonths = experiences.reduce((acc, exp) => acc + calculateMonths(exp.period), 0);
    
    // Convert to years (e.g., 38 months -> 3 years)
    const totalYears = Math.floor(totalMonths / 12);

    return {
      positions: experiences.length,
      years: totalYears > 0 ? totalYears : 0,
      projects: 12, // Static or calculated from other data
    };
  }, [experiences]);

  const filteredExperiences = useMemo(() => {
    return filter === 'all' 
      ? experiences 
      : experiences.filter(exp => exp.skills?.some(s => s.toLowerCase().includes(filter.toLowerCase())));
  }, [filter]);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    experiences.forEach(exp => exp.skills?.forEach(s => skills.add(s)));
    return Array.from(skills);
  }, []);

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

        {/* Filters */}
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

        {/* View Controls (Only Detailed/Skills toggles) */}
        <View style={[styles.controlsSection, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.controlsRow}>
            <TouchableOpacity 
              onPress={() => setVariant(v => v === 'default' ? 'compact' : 'default')} 
              style={[styles.toggleButton, { borderColor: colors.borderSubtle }]}
            >
              <Ionicons name={variant === 'default' ? 'expand-outline' : 'contract-outline'} size={18} color={colors.textBody} />
              <Text style={[styles.toggleText, { color: colors.textBody }]}>{variant === 'default' ? 'Detailed' : 'Compact'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setShowSkills(!showSkills)} 
              style={[styles.toggleButton, { backgroundColor: showSkills ? colors.brandSage : 'transparent', borderColor: colors.borderSubtle }]}
            >
              <Ionicons name="code-slash-outline" size={18} color={showSkills ? colors.textInverse : colors.textBody} />
              <Text style={[styles.toggleText, { color: showSkills ? colors.textInverse : colors.textBody }]}>Skills</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* List of Experiences */}
        <View style={styles.columnLayout}>
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} layout="column" variant={variant} showSkills={showSkills} />
          ))}
        </View>

        {/* Skills Summary */}
        {showSkills && (
          <View style={[styles.skillsSummary, { backgroundColor: colors.sectionBackground }]}>
            <Text style={[styles.summaryTitle, { color: colors.textHeading }]}>Skills Summary</Text>
            <View style={styles.skillsGrid}>
              {allSkills.map((skill, index) => (
                <View key={index} style={[styles.skillSummaryTag, { backgroundColor: colors.tagTechBg }]}>
                  <Text style={[styles.skillSummaryText, { color: colors.tagTechText }]}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
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
  controlsRow: { flexDirection: 'row', gap: Spacing.s },
  toggleButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Spacing.s, borderRadius: Spacing.radius.s, borderWidth: 1, gap: Spacing.xs },
  toggleText: { fontFamily: Typography.font.bodyMedium, fontSize: Typography.size.label },
  columnLayout: { paddingHorizontal: Spacing.m, gap: Spacing.m },
  skillsSummary: { padding: Spacing.m, margin: Spacing.m, borderRadius: Spacing.radius.l },
  summaryTitle: { fontFamily: Typography.font.heading, fontSize: Typography.size.cardTitle, marginBottom: Spacing.m },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.s },
  skillSummaryTag: { paddingHorizontal: Spacing.s, paddingVertical: Spacing.xs, borderRadius: Spacing.radius.s },
  skillSummaryText: { fontFamily: Typography.font.bodyMedium, fontSize: Typography.size.label },
});