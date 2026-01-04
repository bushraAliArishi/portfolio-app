// ui/BackIcon.tsx
import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { s } from 'react-native-size-matters'
import { useTheme } from '@/theme/ThemeContext'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

interface BackIconProps {
  onPress?: () => void
  size?: number
  color?: string
  style?: ViewStyle
}

const BackIcon = ({ onPress, size = 24, color, style }: BackIconProps) => {
  const { theme } = useTheme(); 
  const router = useRouter()

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.back()
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      activeOpacity={0.7}
    >
      <Feather
        name="chevron-left"
        size={s(size)}
        color={color || theme.colors.textHeading}
      />
    </TouchableOpacity>
  )
}

export default BackIcon

const styles = StyleSheet.create({
  container: {
    padding: s(4),
  },
})