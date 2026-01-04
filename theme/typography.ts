// theme/typography.ts
import { Platform } from 'react-native';

export const Typography = {
  /* ========================= FONT FAMILIES ========================= */
  font: {
    heading: 'Playfair-SemiBold',
    headingAlt: 'Playfair-Medium',
    body: 'Inter-Regular',
    bodyMedium: 'Inter-Medium',
    bodyBold: 'Inter-SemiBold',
  },

  /* ========================= FONT SIZES - RESPONSIVE ========================= */
  size: {
    hero: 36,
    pageTitle: 28,
    sectionTitle: 22,
    cardTitle: 18,
    body: 16, 
    bodySmall: 14,
    label: 12,
    micro: 10,
  },

  lineHeight: {
    hero: 44,
    pageTitle: 34,
    sectionTitle: 28,
    cardTitle: 24,
    body: 24, 
    bodySmall: 20,
    label: 16,
  },

  letterSpacing: {
    tight: -0.4,
    normal: 0,
    wide: 0.6,
    caps: 1.2,
  },
};