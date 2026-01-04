import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
import { useTheme } from '@/theme/ThemeContext';
const SaudiRiyalSymbol = ({ color, ...props }: SvgProps) => {
  const { theme } = useTheme();
  const iconColor = color || theme.colors.brandPrimary;

  return(
  <Svg
    width={1125}
    height={1257}
    viewBox="0 0 1125 1257"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_534_14)">
      <Path
        d="M699.619 1113.02C679.559 1157.5 666.299 1205.77 661.219 1256.39L1085.73 1166.15C1105.79 1121.68 1119.04 1073.4 1124.13 1022.78L699.619 1113.02Z"
              fill={iconColor}  

      />
      <Path
        d="M1085.73 895.8C1105.79 851.33 1119.05 803.05 1124.13 752.43L793.448 822.76V687.56L1085.72 625.45C1105.78 580.98 1119.04 532.7 1124.12 482.08L793.438 552.35V66.13C742.768 94.58 697.768 132.45 661.188 177.12V580.47L528.938 608.58V0C478.268 28.44 433.268 66.32 396.688 110.99V636.68L100.778 699.56C80.7183 744.03 67.4483 792.31 62.3583 842.93L396.688 771.88V942.14L38.3883 1018.28C18.3283 1062.75 5.06828 1111.03 -0.0117188 1161.65L375.028 1081.95C405.558 1075.6 431.798 1057.55 448.858 1032.71L517.638 930.74V930.72C524.778 920.17 528.938 907.45 528.938 893.75V743.77L661.188 715.66V986.06L1085.72 895.78L1085.73 895.8Z"
              fill={iconColor}  

      />
    </G>
    <Defs>
      <ClipPath id="clip0_534_14">
        <Rect width={1124.14} height={1256.39} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>)
};
export default SaudiRiyalSymbol;
