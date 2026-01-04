import GoldBluredBackground from '@/assets/SVG/GoldBluredBackground';
import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';

export default function BlurBackground() {


    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <GoldBluredBackground></GoldBluredBackground>
        </View>
    );
}