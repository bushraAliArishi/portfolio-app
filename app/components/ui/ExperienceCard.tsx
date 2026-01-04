// app/components/ExperienceCard.tsx
import React, { FC } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
  Platform 
} from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import { Typography } from '@/theme/typography';
import { Spacing } from '@/theme/spacing';

const { width: screenWidth } = Dimensions.get('window');
const isTablet = screenWidth >= 768;
const isSmallScreen = screenWidth < 375;

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  logo:string;
  period: string;
  description: string[];
  current?: boolean;
  skills?: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  layout?: 'row' | 'column';
  variant?: 'default' | 'compact';
  showSkills?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  experience,
  layout = 'column',
  variant = 'default',
  showSkills = false
}) => {
  const { theme } = useTheme();
  const { colors } = theme;

  // Determine layout based on screen size
  const effectiveLayout = isTablet && layout === 'row' ? 'row' : 'column';

  // Format description with bullet points
  const renderDescription = () => (
    <View style={styles.descriptionContainer}>
      {experience.description.map((item, index) => (
        <View key={index} style={styles.bulletRow}>
          <Text style={[styles.bullet, { color: colors.brandAccent }]}>
            •
          </Text>
          <Text style={[
            styles.descriptionText,
            { 
              color: colors.textBody,
              fontSize: isSmallScreen ? Typography.size.bodySmall : Typography.size.body,
              lineHeight: isSmallScreen ? Typography.lineHeight.bodySmall : Typography.lineHeight.body,
            }
          ]}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );

  // Render skills tags
  const renderSkills = () => {
    if (!showSkills || !experience.skills) return null;
    
    return (
      <View style={styles.skillsContainer}>
        {experience.skills.map((skill, index) => (
          <View 
            key={index} 
            style={[
              styles.skillTag,
              { backgroundColor: colors.tagTechBg }
            ]}
          >
            <Text style={[
              styles.skillText,
              { color: colors.tagTechText }
            ]}>
              {skill}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  // Row Layout (for tablets)
  if (effectiveLayout === 'row') {
    return (
      <View style={[
        styles.rowContainer,
        { 
          backgroundColor: colors.cardBackground,
          borderColor: colors.borderSubtle,
        }
      ]}>
        {/* Left Column - Company & Period */}
        <View style={styles.rowLeft}>
          <Text 
            style={[
              styles.companyName,
              { 
                color: colors.textHeading,
                fontSize: isSmallScreen ? Typography.size.body : Typography.size.cardTitle,
              }
            ]}
            numberOfLines={2}
          >
            {experience.company}
          </Text>
          
          <Text style={[
            styles.period,
            { 
              color: colors.textMuted,
              fontSize: isSmallScreen ? Typography.size.label : Typography.size.bodySmall,
            }
          ]}>
            {experience.period}
          </Text>
        </View>

        {/* Right Column - Title & Description */}
        <View style={styles.rowRight}>
          <Text style={[
            styles.title,
            { 
              color: colors.brandPrimary,
              fontSize: isSmallScreen ? Typography.size.bodySmall : Typography.size.body,
            }
          ]}>
            {experience.title}
          </Text>
          
          {variant !== 'compact' && renderDescription()}
          {renderSkills()}
        </View>
      </View>
    );
  }

  // Column Layout (Default for mobile)
  return (
    <View style={[
      styles.columnContainer,
      { 
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderSubtle,
      }
    ]}>
      {/* Header */}
      <View style={styles.columnHeader}>
        <View style={styles.companyInfo}>
          <Text 
            style={[
              styles.companyName,
              { 
                color: colors.textHeading,
                fontSize: isSmallScreen ? Typography.size.body : Typography.size.cardTitle,
              }
            ]}
            numberOfLines={2}
          >
            {experience.company}
          </Text>
          
          <Text style={[
            styles.title,
            { 
              color: colors.brandPrimary,
              fontSize: isSmallScreen ? Typography.size.bodySmall : Typography.size.body,
            }
          ]}>
            {experience.title}
          </Text>
        </View>
        
        <Text style={[
          styles.period,
          { 
            color: colors.textMuted,
            fontSize: isSmallScreen ? Typography.size.label : Typography.size.bodySmall,
          }
        ]}>
          {experience.period}
        </Text>
      </View>

      {/* Description */}
      {variant !== 'compact' && renderDescription()}
      
      {/* Skills */}
      {renderSkills()}
    </View>
  );
};

export default ExperienceCard;

const styles = StyleSheet.create({
  // Column Layout (Mobile)
  columnContainer: {
    padding: isSmallScreen ? Spacing.s : Spacing.m,
    borderRadius: Spacing.radius.m,
    borderWidth: 1,
    marginBottom: isSmallScreen ? Spacing.s : Spacing.m,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  columnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: isSmallScreen ? Spacing.s : Spacing.m,
    flexWrap: 'wrap',
  },
  companyInfo: {
    flex: 1,
    marginRight: Spacing.s,
  },
  
  // Row Layout (Tablet)
  rowContainer: {
    flexDirection: 'row',
    padding: isSmallScreen ? Spacing.s : Spacing.m,
    borderRadius: Spacing.radius.m,
    borderWidth: 1,
    marginBottom: isSmallScreen ? Spacing.s : Spacing.m,
  },
  rowLeft: {
    width: isTablet ? '30%' : '35%',
    marginRight: Spacing.m,
    paddingRight: Spacing.s,
  },
  rowRight: {
    flex: 1,
  },
  
  // Common Styles
  companyName: {
    fontFamily: Typography.font.heading,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  title: {
    fontFamily: Typography.font.bodyBold,
    fontWeight: '600',
  },
  period: {
    fontFamily: Typography.font.body,
    fontStyle: 'italic',
  },
  descriptionContainer: {
    marginTop: Spacing.s,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: isSmallScreen ? Spacing.xs : Spacing.s,
  },
  bullet: {
    fontSize: Typography.size.body,
    marginRight: Spacing.s,
    marginTop: 3,
  },
  descriptionText: {
    fontFamily: Typography.font.body,
    flex: 1,
    flexWrap: 'wrap',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
    marginTop: Spacing.m,
  },
  skillTag: {
    paddingHorizontal: isSmallScreen ? Spacing.s : Spacing.m,
    paddingVertical: isSmallScreen ? Spacing.xxs : Spacing.xs,
    borderRadius: Spacing.radius.pill,
  },
  skillText: {
    fontFamily: Typography.font.bodyMedium,
    fontSize: isSmallScreen ? Typography.size.micro : Typography.size.label,
  },
});