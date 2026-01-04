// app/components/headers/ExperienceHeader.tsx
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/theme/ThemeContext'
import { Typography } from '@/theme/typography'
import { Spacing } from '@/theme/spacing'

interface ExperienceHeaderProps {
  title: string
  positions: number
  years: number
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ title, positions, years }) => {
  const router = useRouter()
  const { theme } = useTheme()
  const { colors } = theme

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.replace('/')
    }
  }

  return (
    <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
      {/* Back Button */}
      <TouchableOpacity 
        onPress={handleBack}
        style={styles.backButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons 
          name="arrow-back" 
          size={24} 
          color={colors.brandPrimary} 
        />
      </TouchableOpacity>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={[
          styles.headerTitle,
          { 
            color: colors.textHeading,
            fontFamily: Typography.font.heading
          }
        ]}>
          {title}
        </Text>
        <Text style={[
          styles.headerSubtitle,
          { 
            color: colors.textMuted,
            fontFamily: Typography.font.body
          }
        ]}>
          {positions} positions • {years}+ years
        </Text>
      </View>
    </View>
  )
}

export default ExperienceHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.m,
    paddingVertical: Spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: Spacing.xs,
    marginRight: Spacing.m,
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: Typography.size.pageTitle,
    fontWeight: '700',
    marginBottom: Spacing.xxs,
  },
  headerSubtitle: {
    fontSize: Typography.size.body,
    opacity: 0.8,
  },
})