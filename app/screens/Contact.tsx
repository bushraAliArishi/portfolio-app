import { useAppTheme } from '@/app/hook/useAppTheme'
import { Typography } from '@/theme/typography'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { s } from 'react-native-size-matters'
import MainLayout from '../components/layouts/MainLayout'
import VerticalTabel from '../components/layouts/VerticalTabel'

const Contact = () => {
  const { colors } = useAppTheme();

  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <Text style={[styles.pageHeader, { color: colors.brandPrimary }]}>
          Contact
        </Text>
        <VerticalTabel />
      </View>
    </MainLayout>
  )
}

export default Contact

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: s(24),
    fontWeight: '700',
    fontFamily: Typography.font.body,
    marginBottom: s(20),
    marginLeft: s(20),
    marginTop: s(20)
  },
})