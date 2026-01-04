import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';
const ProfileIcon = ({ color, ...props }: SvgProps) => {
    const { theme } = useTheme();
    const iconColor = color || theme.colors.brandPrimary;

  
  return(<Svg
    width={50}
    height={50}
    viewBox="0 0 800 800"
    fill="none"
    {...props}
  >
    <Path
      opacity={0.5}
      d="M733.335 400.001C733.335 584.095 584.095 733.335 400.001 733.335C215.906 733.335 66.668 584.095 66.668 400.001C66.668 215.906 215.906 66.668 400.001 66.668C584.095 66.668 733.335 215.906 733.335 400.001Z"
            fill={iconColor}  

    />
    <Path
      d="M560.235 633.707C514.661 665.013 459.471 683.333 400.001 683.333C340.531 683.333 285.342 665.01 239.768 633.703C219.64 619.877 211.038 593.54 222.741 572.107C247.002 527.673 296.992 500 400.001 500C503.011 500 553.001 527.677 577.261 572.107C588.965 593.54 580.361 619.88 560.235 633.707Z"
            fill={iconColor}  

    />
    <Path
      d="M399.999 400C455.229 400 499.999 355.23 499.999 300C499.999 244.772 455.229 200 399.999 200C344.772 200 300 244.772 300 300C300 355.23 344.772 400 399.999 400Z"
            fill={iconColor}  

    />
  </Svg>)
};
export default ProfileIcon;
