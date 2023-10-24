import * as React from 'react';
import Svg, { Circle, Rect, Defs, Pattern, Use, Image , XmlProps, xmlnsXlink} from 'react-native-svg';

export default function LogoImg(props) {
  return (
<Svg width="190" height="57" viewBox="0 0 186 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} xmlnsXlink="http://www.w3.org/1999/xlink">
    <Rect y="5" width="38.3214" height="29.0714" fill="url(#pattern0)"/>
    <Rect x="45" width="141" height="37" fill="url(#pattern1)"/>
    <Defs>
    <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <Use xlinkHref="#image0_352_496" transform="matrix(0.00428599 0 0 0.00564972 -0.00574715 0)"/>
    </Pattern>
    <Pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
    <Use xlinkHref="#image1_352_496" transform="matrix(0.00143885 0 0 0.00548318 0 -0.00171106)"/>
    </Pattern>

    </Defs>
    </Svg>

  );
}