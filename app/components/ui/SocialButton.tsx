import { StyleSheet, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import { useTheme } from '@/theme/ThemeContext'

const SocialButton = () => {
  const { theme } = useTheme(); 

  return (
    <View style={[
      styles.socialLogo,
      {
        borderColor: theme.colors.brandPrimary,
      }
    ]}>
      {/* You can add content here */}
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
  socialLogo: {
    borderWidth: s(1),
    width: s(25),
    height: s(25),
    borderRadius: s(13),
  }
})