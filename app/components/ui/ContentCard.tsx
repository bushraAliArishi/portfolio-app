import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '@/theme';
import { AppText } from '../common/Text';
import { AppImage } from '../common/Image';
import { Tool } from '../../data/tools';

interface ContentCardProps {
  title: string;
  subtitle: string;
  imageUri?: string; 
  logoUrl?: string;  
  link?: string;
  description?: string | string[];
  tools?: Tool[];
  dateRange?: string;
}

export const ContentCard = ({ title, subtitle, imageUri, logoUrl, link, description, tools, dateRange }: ContentCardProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      activeOpacity={link ? 0.8 : 1} 
      onPress={() => link && Linking.openURL(link)}
      style={[styles.card, { backgroundColor: theme.colors.cardBackground, borderRadius: theme.spacing.radius.m }]}
    >
      {/* Project Screenshot (If available) */}
      {imageUri && <AppImage uri={imageUri} style={styles.projectImage} resizeMode="cover" />}

      <View style={styles.content}>
        <View style={styles.header}>
          {logoUrl && <AppImage uri={logoUrl} style={styles.logo} />}
          <View style={styles.headerText}>
            <AppText variant="cardTitle" weight="heading" color={theme.colors.textHeading}>{title}</AppText>
            <AppText variant="bodySmall" color={theme.colors.brandSage}>{subtitle}</AppText>
          </View>
        </View>

        {dateRange && <AppText variant="label" color={theme.colors.textMuted} style={styles.date}>{dateRange}</AppText>}

        <View style={styles.descContainer}>
          {Array.isArray(description) ? (
            description.map((item, i) => <AppText key={i} variant="bodySmall" color={theme.colors.textBody} style={styles.bullet}>• {item}</AppText>)
          ) : (
            <AppText variant="bodySmall" color={theme.colors.textBody}>{description}</AppText>
          )}
        </View>

        <View style={styles.toolRow}>
          {tools?.map((tool, index) => (
            <View key={index} style={[styles.toolBadge, { backgroundColor: theme.colors.tagTechBg }]}>
              <AppImage uri={tool.logoUrl} style={styles.toolLogo} />
              <AppText variant="bodySmall" color={theme.colors.tagTechText}>{tool.name}</AppText>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 16, overflow: 'hidden', elevation: 2 },
  projectImage: { width: '100%', height: 160 },
  content: { padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, borderRadius: 8, marginRight: 12 },
  headerText: { flex: 1 },
  date: { marginTop: 4 },
  descContainer: { marginTop: 12 },
  bullet: { marginBottom: 4 },
  toolRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 12, gap: 8 },
  toolBadge: { flexDirection: 'row', alignItems: 'center', padding: 6, borderRadius: 20 },
  toolLogo: { width: 14, height: 14, marginRight: 6 }
});