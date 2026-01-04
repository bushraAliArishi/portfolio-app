import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect,SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';
const GoldBluredBackground = ({ color, ...props }: SvgProps) => {
      const { theme } = useTheme();
      const iconColor = color || theme.colors.brandAccent;
      return(
  <Svg
    width={393}
    height={852}
    viewBox="0 0 393 852"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_522_6)" filter="url(#filter0_f_522_6)">
      <Path
        d="M184 325.5C252.5 309.819 568.686 909 487.5 909C406.314 909 152.497 587.895 152.497 504.5C107.496 350.499 -180.679 58.5 -71.6768 0.5C9.50901 0.5 59.5 354 184 325.5Z"
        fill={iconColor}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_522_6">
        <Rect width={393} height={852} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
)
};
export default GoldBluredBackground;
