import BushraLogo from '@/assets/SVG/BushraLogo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainLayout from '../components/layouts/MainLayout';
import BlurBackground from '../components/ui/BulrBackground';


const IntroPage = () => {
    return( 
         <MainLayout>
        <View style={styles.container}>
            <BlurBackground />
            <BushraLogo  />
        </View>
        </MainLayout>
    );
  }
export default IntroPage;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },  
    });
    