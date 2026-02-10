import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { AppText } from '../../components/common/Text';
import { Spacing } from '../../../theme/spacing';

interface ProjectHeaderProps {
  title: string;
  count: number;
}

export const ProjectHeader = ({ title, count }: ProjectHeaderProps) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.pageBackground }]}>
      <View>
        <AppText variant="pageTitle" weight="heading" color={theme.colors.textHeading}>
          {title}
        </AppText>
        <AppText variant="bodySmall" color={theme.colors.brandSage}>
          Showcasing digital solutions
        </AppText>
      </View>
      
      <View style={[styles.badge, { backgroundColor: theme.colors.tagHighlightBg }]}>
        <AppText variant="label" weight="bodyBold" color={theme.colors.tagHighlightText}>
          {count} Projects
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.m,
    paddingTop: Spacing.l,
    paddingBottom: Spacing.m,
  },
  badge: {
    paddingHorizontal: Spacing.s,
    paddingVertical: Spacing.xs,
    borderRadius: Spacing.radius.s,
  },
});