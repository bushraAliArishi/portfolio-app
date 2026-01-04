import { StyleSheet, View , Text} from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import UserAvatar from '../ui/Avatar'
import { useTheme } from '@/theme/ThemeContext'
import { Typography } from '@/theme/typography'

const MobileHeader = () => {  
  const { theme } = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.pageBackground }]}>
      {/* Left side - Name and Title */}
      <View style={styles.textContainer}>
        {/* <Text style={styles.title}>t</Text> */}
      </View>
      
      {/* Right side - Avatar */}
      <UserAvatar />
    </View>
  )
}

export default MobileHeader  

const styles = StyleSheet.create({
  container: {
    marginTop: vs(5),
    marginBottom: vs(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(15),
  },
  textContainer: {
    flex: 1,
    marginRight: s(15),
  },
  greeting: {
    fontSize: s(14),
    fontFamily: Typography.font.body,
    marginBottom: vs(2),
  },
  name: {
    fontSize: s(24),
    fontFamily: Typography.font.heading,
    fontWeight: '600',
    lineHeight: s(30),
    marginBottom: vs(6),
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: vs(2),
  },
  title: {
    fontSize: s(12),
    fontFamily: Typography.font.bodyMedium,
    fontWeight: '500',
  },
  titleSeparator: {
    fontSize: s(12),
    marginHorizontal: s(4),
  }
})