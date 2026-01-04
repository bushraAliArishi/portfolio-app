import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FunctionComponent } from 'react'
import { s } from 'react-native-size-matters'
import { useTheme } from '@/theme/ThemeContext'
import SocialButton from './ui/SocialButton'
import SendButton from './ui/SendButton'

interface SectionProps {
  title?: string
  icon?: React.ReactNode
}

const Section: FunctionComponent<SectionProps> = ({ title, icon }) => { 
  title = title || "Send to Social"
  const { theme } = useTheme(); 
  
  return (
    <View style={[
      styles.continuer,
      {
        borderBottomColor: theme.colors.borderSubtle,
      }
    ]}>
      <View style={styles.social}>
        <View style={[
          styles.socialCircale,
          {
            borderColor: theme.colors.brandPrimary,
          }
        ]}>
          {icon ? icon : <SocialButton />}
        </View>
        <Text style={[
          styles.socialLabel,
          {
            color: theme.colors.textBody,
          }
        ]}>
          {title}
        </Text>
      </View>
      <SendButton />
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
  continuer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(15),
    paddingVertical: s(15),
    gap: s(10),
    borderBottomWidth: s(1),
    paddingBottom: s(10),
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap: s(10),
  },
  socialLabel: {
    fontSize: s(10),
    fontWeight: '500',
  },
  socialCircale: {
    width: s(25),
    height: s(25),
    borderRadius: s(13),
    borderWidth: s(1),
    justifyContent: 'center',
    alignItems: 'center',
  }
})