import * as React from 'react';
import Svg, { Circle, Rect, Path, Defs, G, ClipPath} from 'react-native-svg';

export default function TabBarHistory(props) {
    const { width,height,color, ...otherProps } = props; 
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_1219_378)">
    <Path d="M12.1019 0C5.68606 0 0.484009 5.2021 0.484009 11.6179C0.484009 18.0337 5.68606 23.2358 12.1019 23.2358C14.5689 23.2358 16.857 22.4662 18.7377 21.1554L27.5235 29.9398C27.6028 30.0192 27.7313 30.0192 27.8064 29.9453L29.4617 28.2901C29.5382 28.2136 29.5314 28.0824 29.4562 28.0072L20.7851 19.3361C22.6112 17.2846 23.7197 14.581 23.7197 11.6178C23.7197 5.2021 18.5177 0 12.1019 0ZM12.1019 21.8689C6.44057 21.8689 1.8508 17.2792 1.8508 11.6179C1.8508 5.95656 6.44052 1.36684 12.1019 1.36684C17.7632 1.36684 22.3529 5.95656 22.3529 11.6179C22.3529 17.2792 17.7632 21.8689 12.1019 21.8689Z" fill={color}/>
    </G>
    <Defs>
    <ClipPath id="clip0_1219_378">
    <Rect width="30" height="30" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    
    
    
  );
}