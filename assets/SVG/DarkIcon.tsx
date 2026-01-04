import * as React from "react";
import Svg, { Path,SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';
const DarkIcon = ({ color, ...props }: SvgProps) => {
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M733.335 400.014C733.335 584.107 584.095 733.347 400.001 733.347C361.195 733.347 323.935 726.714 289.297 714.524C274.714 679.241 266.668 640.567 266.668 600.014C266.668 525.974 293.49 458.197 337.948 405.874C377.001 462.727 442.481 500.014 516.668 500.014C595.385 500.014 664.298 458.034 702.241 395.241C710.218 382.041 733.335 384.591 733.335 400.014Z"
      fill={iconColor}
    />
    <Path
      d="M66.668 399.997C66.668 545.284 159.619 668.861 289.297 714.507C274.714 679.224 266.668 640.551 266.668 599.997C266.668 525.957 293.49 458.181 337.948 405.857C314.01 371.007 300.001 328.805 300.001 283.331C300.001 204.612 341.981 135.699 404.775 97.7561C417.975 89.7797 415.425 66.6641 400.001 66.6641C215.906 66.6641 66.668 215.902 66.668 399.997Z"
      fill={iconColor}
    />
  </Svg>
)};
export default DarkIcon;
