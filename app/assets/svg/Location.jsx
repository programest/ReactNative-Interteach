
import * as React from 'react';
import Svg, { Circle, Rect, Path,G, Defs, ClipPath} from 'react-native-svg';

export default function Location(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_1221_400)">
    <Path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M17 10C17.0148 10.8414 16.8005 11.671 16.38 12.4C15.36 14.1 12 19 12 19C12 19 8.64004 14.1 7.61004 12.41C7.19128 11.6771 6.98038 10.8439 7.00004 10C7.00004 8.67392 7.52682 7.40215 8.4645 6.46447C9.40219 5.52678 10.674 5 12 5C13.3261 5 14.5979 5.52678 15.5356 6.46447C16.4733 7.40215 17 8.67392 17 10Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </G>
    <Defs>
    <ClipPath id="clip0_1221_400">
    <Rect width="24" height="24" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
  );
}