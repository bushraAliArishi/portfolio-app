import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';

const HamBurgerMenu = ({ color, ...props }: SvgProps) => {
      const { theme } = useTheme();
      const iconColor = color || theme.colors.brandAccent;
      return(
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    {...props}
  >
    <Path
      d="M666.665 233.336H133.332"
      stroke={iconColor}
      strokeWidth={50}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M666.665 400H133.332"
      stroke={iconColor}
      strokeWidth={50}
      strokeLinecap="round"
    />
    <Path
      d="M666.665 566.664H133.332"
      stroke={iconColor}
      strokeWidth={50}
      strokeLinecap="round"
    />
  </Svg>
)};
export default HamBurgerMenu;
