import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { useTheme } from '@/theme/ThemeContext'
import { s } from 'react-native-size-matters'

const SendButton = () => {
  const { theme } = useTheme(); 

  return (
    <TouchableOpacity>
      <View style={[
        styles.soical,
        {
          backgroundColor: theme.colors.brandAccent,
        }
      ]}>
        <Feather name="send" size={s(15)} color={theme.colors.brandPrimary} />
      </View>
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
  soical: {
    width: s(25),
    height: s(25),
    alignItems: 'center',
    justifyContent: 'center',
    gap: s(5),
    borderRadius: s(25),
  }
})