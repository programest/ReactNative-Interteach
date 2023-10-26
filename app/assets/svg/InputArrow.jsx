
import * as React from 'react';
import Svg, { Circle, Rect, Path,} from 'react-native-svg';

export default function InputArrow(props) {
    const {width = 30, height = 10, ...otherProps} = props
  return (
    
    <Svg width={width} height={height}  viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <Path d="M7.49901 5.56499L17.3569 -5.70493C17.7327 -6.09836 18.3424 -6.09836 18.7182 -5.70493C19.0939 -5.31151 19.0939 -4.67284 18.7182 -4.27942L8.22857 7.71327C8.02821 7.92349 7.76169 8.01259 7.5 7.99858C7.23732 8.01259 6.97179 7.92349 6.7714 7.71327L-3.71815 -4.27942C-4.09395 -4.67284 -4.09395 -5.31151 -3.71815 -5.70493C-3.34238 -6.09836 -2.73265 -6.09836 -2.35688 -5.70493L7.49901 5.56499Z" fill="#4D4D4D"/>
        </Svg>

  );
}