import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';
const SearchIcon = ({ color, ...props }: SvgProps) => {
    const { theme } = useTheme();
    const iconColor = color || theme.colors.brandPrimary;

  return(
  <Svg
    width={50}
    height={50}
    viewBox="0 0 800 800"
    fill="none"
    {...props}
  >
    <Path
      opacity={0.5}
      d="M677.111 371.884C677.111 540.454 540.458 677.107 371.888 677.107C203.32 677.107 66.668 540.454 66.668 371.884C66.668 203.316 203.32 66.6641 371.888 66.6641C540.458 66.6641 677.111 203.316 677.111 371.884Z"
            fill={iconColor}  

    />
    <Path
      d="M570.004 604.061L692.214 726.271C701.624 735.681 716.881 735.681 726.291 726.271C735.701 716.861 735.701 701.604 726.291 692.194L604.081 569.984C593.634 582.218 582.237 593.614 570.004 604.061Z"
            fill={iconColor}  

    />
  </Svg>)
};
export default SearchIcon;
