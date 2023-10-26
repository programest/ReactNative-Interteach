
import * as React from 'react';
import Svg, { Circle, Rect, Path,} from 'react-native-svg';

export default function SuccessMessage(color) {

  return (
    <Svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.495 0A12.644 12.644 0 0 0 3.66 3.662 12.654 12.654 0 0 0 0 12.5c0 3.272 1.346 6.524 3.659 8.838A12.643 12.643 0 0 0 12.495 25c3.273 0 6.526-1.346 8.841-3.66A12.649 12.649 0 0 0 25 12.5h-3.333c0 2.4-.99 4.786-2.688 6.483a9.283 9.283 0 0 1-6.484 2.684 9.27 9.27 0 0 1-6.48-2.686A9.278 9.278 0 0 1 3.334 12.5c0-2.4.987-4.784 2.683-6.481a9.27 9.27 0 0 1 6.48-2.686h.005V0h-.006Z" fill="#ECF0F1"/>
    <Path d="m10.12 9.25-1.944 1.943 4.24 4.241 1.944-1.943-4.24-4.241Z" fill="#ECF0F1"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.254 1.908 10.572 13.59l1.944 1.944L24.198 3.852l-1.944-1.944Z" fill="#ECF0F1"/>
</Svg>
    
  );
}