// ui/Avatar.tsx
import { useTheme } from '@/theme/ThemeContext'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'

interface UserAvatarProps {
  size?: number
  onPress?: () => void
  imageUrl?: string
  name?: string
}

const UserAvatar = ({ size = 60, onPress, imageUrl, name = 'Bushra Ali Arishi' }: UserAvatarProps) => {
  const { theme } = useTheme(); 

  const Container = onPress ? TouchableOpacity : View

  const getInitials = (userName: string) => {
    return userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2)
  }

  if (imageUrl) {
    
    return (
      <Container
        style={[
          styles.avatarContainer,
          {
            width: s(size),
            height: s(size),
            borderRadius: s(size / 2),
            borderWidth: 2,
            borderColor: theme.colors.borderSubtle,
            backgroundColor: theme.colors.brandSage,
          }
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.avatarText,
          {
            fontSize: s(size * 0.35),
            color: theme.colors.textInverse,
          }
        ]}>
          {getInitials(name)}
        </Text>
      </Container>
    )
  }

  return (
    <Container
      style={[
        styles.avatarContainer,
        {
          width: s(size),
          height: s(size),
          borderRadius: s(size / 2),
          backgroundColor: theme.colors.brandSage,
          borderWidth: 2,
          borderColor: theme.colors.borderSubtle,
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.avatarText,
        {
          fontSize: s(size * 0.35),
          color: theme.colors.textInverse,
        }
      ]}>
        {getInitials(name)}
      </Text>
    </Container>
  )
}

export default UserAvatar

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: s(0),
      height: s(2),
    },
    shadowOpacity: s(0.1),
    shadowRadius: s(4),
    elevation: s(3),
    marginTop:s(10),
    marginBottom:s(10),
  },
  avatarText: {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: '600',
  },
})