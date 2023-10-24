
import * as React from 'react';
import Svg, { Circle, Rect, Path,} from 'react-native-svg';

export default function EnjoySecond(props) {
    const { width, color,height, ...otherProps } = props; 
  return (
   
    <Svg width={width} height={height} viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg"  {...otherProps}>
    <Path d="M32.2484 15.002C31.7945 14.9781 31.3338 15.1696 30.9869 15.6047L23.1699 25.3752L18.7321 19.8289C18.3851 19.3937 17.9245 19.2036 17.4705 19.2262C17.0617 19.2473 16.655 19.4374 16.3431 19.8289C16.0311 20.2189 15.8779 20.7272 15.861 21.2383C15.8418 21.8058 15.995 22.3817 16.3431 22.8154L21.9748 29.8557C22.3049 30.2683 22.7374 30.4738 23.1699 30.4738C23.6024 30.4738 24.035 30.2683 24.365 29.8557L33.3758 18.5912C33.7239 18.156 33.8759 17.5816 33.858 17.0141C33.8411 16.503 33.689 15.9947 33.3758 15.6047C33.0627 15.2132 32.6572 15.0217 32.2484 15.002Z" fill="#08367B"/>
    <Circle cx="23.7836" cy="22.9242" r="21.4242" stroke="#08367B" stroke-width="3"/>
    </Svg>
    
  );
}