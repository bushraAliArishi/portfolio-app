import React from 'react';
import { Image, ImageStyle, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface AppImageProps {
  uri: string;
  style: ImageStyle;
  resizeMode?: 'contain' | 'cover' | 'stretch';
}

export const AppImage = ({ uri, style, resizeMode = 'contain' }: AppImageProps) => {
  const isSvg = uri.toLowerCase().endsWith('.svg');

  if (isSvg) {
    return (
      <View style={style}>
        <SvgUri
          width="100%"
          height="100%"
          uri={uri}
        />
      </View>
    );
  }

  return <Image source={{ uri }} style={style} resizeMode={resizeMode} />;
};