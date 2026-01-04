import { useTheme } from '@/theme/ThemeContext'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import Section from '../Section'

const VerticalTabel = () => {
  const { theme } = useTheme(); 

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: theme.colors.sectionBackground,
      }
    ]}>
      <ScrollView>
        <Text style={[
          styles.titalText,
          {
            color: theme.colors.brandPrimary,
          }
        ]}>
          Social Media platforms
        </Text>
        <Section title="Facebook" icon={<Entypo name="facebook" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="Instagram" icon={<FontAwesome6 name="square-instagram" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="X" icon={<AntDesign name="x" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="LinkedIn" icon={<FontAwesome name="linkedin-square" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="Pinterest" icon={<FontAwesome6 name="square-pinterest" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="TikTok" icon={<FontAwesome6 name="tiktok" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="Snapchat" icon={<FontAwesome name="snapchat-square" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="Reddit" icon={<FontAwesome6 name="square-reddit" size={24} color={theme.colors.brandPrimary} />} />
        <Section title="Tumblr" icon={<FontAwesome name='tumblr-square' size={24} color={theme.colors.brandPrimary} />} />
        <Section title="WhatsApp" icon={<FontAwesome6 name="square-whatsapp" size={24} color={theme.colors.brandPrimary} />} />
      </ScrollView>
    </View>
  )
}

export default VerticalTabel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(10),
    margin: s(22),
    borderRadius: s(10),
  },
  titalText: {
    left: s(10),
    fontSize: s(20),
    fontWeight: '600',
    marginBottom: s(10),
  },
})