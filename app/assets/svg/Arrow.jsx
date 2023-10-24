import * as React from 'react';
import Svg, { Circle, Rect, Path,} from 'react-native-svg';

export default function Arrow(props) {
  const { width, color,height, ...otherProps } = props; 
  return (
   
    
   
    <Svg width={width} height={height} viewBox="0 0 21 16" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <Path d="M1.03093 9C0.461575 9 0 8.55229 0 8.00003C0 7.44778 0.461574 7.00007 1.03093 7.00007L18.9691 7C19.5384 7 20 7.44771 20 7.99997C20 8.55222 19.5384 8.99993 18.9691 8.99993L1.03093 9Z" fill={color} />
      <Path d="M13.9768 15.593C13.5246 16.1357 12.7914 16.1357 12.3392 15.593C11.8869 15.0504 11.8869 14.1705 12.3392 13.6279L18.2042 7.78065L12.3392 2.37211C11.8869 1.82946 11.8869 0.949637 12.3392 0.406988C12.7914 -0.135662 13.5246 -0.135662 13.9768 0.406988L20.654 6.78999L20.6608 6.79799C21.1131 7.34069 21.1131 8.22062 20.6608 8.76332L13.9768 15.593Z" fill={color} />
    </Svg>
   
    
  );
}