import * as React from 'react';
import Svg, { Circle, Rect, Path,} from 'react-native-svg';

export default function Invalid(props) {
  return (
   
    
    <Svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M2 2L17 17" stroke="#FF0000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M2 17L17 2" stroke="#FF0000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
   
    
  );
}