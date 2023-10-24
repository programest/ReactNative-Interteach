import * as React from 'react';
import Svg, { Circle, Rect, Path, Defs, G, ClipPath} from 'react-native-svg';

export default function TabBarAnalysis(props) {
  const { width,height,color, ...otherProps } = props; 
  return (
      <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_1219_367)">
      <Path d="M7.5 6.87548H22.5C22.6658 6.87548 22.8247 6.80964 22.9419 6.69242C23.0592 6.57521 23.125 6.41624 23.125 6.25048C23.125 6.08472 23.0592 5.92575 22.9419 5.80854C22.8247 5.69133 22.6658 5.62548 22.5 5.62548H21.875V4.37548C21.875 4.04396 21.7433 3.72602 21.5089 3.4916C21.2745 3.25718 20.9565 3.12548 20.625 3.12548H18.6981C18.5511 2.25095 18.099 1.45681 17.4219 0.884078C16.7449 0.311341 15.8868 -0.00292969 15 -0.00292969C14.1132 -0.00292969 13.2551 0.311341 12.5781 0.884078C11.901 1.45681 11.4489 2.25095 11.3019 3.12548H9.375C9.04348 3.12548 8.72554 3.25718 8.49112 3.4916C8.2567 3.72602 8.125 4.04396 8.125 4.37548V5.62548H7.5C7.33424 5.62548 7.17527 5.69133 7.05806 5.80854C6.94085 5.92575 6.875 6.08472 6.875 6.25048C6.875 6.41624 6.94085 6.57521 7.05806 6.69242C7.17527 6.80964 7.33424 6.87548 7.5 6.87548ZM9.375 4.37548H11.875C12.0408 4.37548 12.1997 4.30963 12.3169 4.19242C12.4342 4.07521 12.5 3.91624 12.5 3.75048C12.5 3.08744 12.7634 2.45156 13.2322 1.98272C13.7011 1.51387 14.337 1.25048 15 1.25048C15.663 1.25048 16.2989 1.51387 16.7678 1.98272C17.2366 2.45156 17.5 3.08744 17.5 3.75048C17.5 3.91624 17.5658 4.07521 17.6831 4.19242C17.8003 4.30963 17.9592 4.37548 18.125 4.37548H20.625V5.62548H9.375V4.37548Z" fill={color}/>
      <Path d="M5.625 8.75V26.25C5.625 26.5815 5.7567 26.8995 5.99112 27.1339C6.22554 27.3683 6.54348 27.5 6.875 27.5H23.125C23.4565 27.5 23.7745 27.3683 24.0089 27.1339C24.2433 26.8995 24.375 26.5815 24.375 26.25V8.75C24.375 8.58424 24.3092 8.42527 24.1919 8.30806C24.0747 8.19085 23.9158 8.125 23.75 8.125H6.25C6.08424 8.125 5.92527 8.19085 5.80806 8.30806C5.69085 8.42527 5.625 8.58424 5.625 8.75ZM6.875 9.375H23.125V26.25H6.875V9.375Z" fill={color}/>
      <Path d="M15.625 3.125H14.375C14.2092 3.125 14.0503 3.19085 13.9331 3.30806C13.8158 3.42527 13.75 3.58424 13.75 3.75C13.75 3.91576 13.8158 4.07473 13.9331 4.19194C14.0503 4.30915 14.2092 4.375 14.375 4.375H15.625C15.7908 4.375 15.9497 4.30915 16.0669 4.19194C16.1842 4.07473 16.25 3.91576 16.25 3.75C16.25 3.58424 16.1842 3.42527 16.0669 3.30806C15.9497 3.19085 15.7908 3.125 15.625 3.125Z" fill={color}/>
      <Path d="M21.25 21.2508H19.0087L16.6919 18.934C16.5747 18.8168 16.4157 18.751 16.25 18.751C16.0843 18.751 15.9253 18.8168 15.8081 18.934L12.5 22.2421L11.0669 20.809C10.9497 20.6917 10.7907 20.6259 10.625 20.6258H8.75C8.58424 20.6258 8.42527 20.6917 8.30806 20.8089C8.19085 20.9261 8.125 21.0851 8.125 21.2508C8.125 21.4166 8.19085 21.5756 8.30806 21.6928C8.42527 21.81 8.58424 21.8758 8.75 21.8758H10.3663L12.0581 23.5677C12.1753 23.6849 12.3343 23.7507 12.5 23.7507C12.6657 23.7507 12.8247 23.6849 12.9419 23.5677L16.25 20.2596L18.3081 22.3177C18.4253 22.4349 18.5843 22.5008 18.75 22.5008H21.25C21.4158 22.5008 21.5747 22.435 21.6919 22.3178C21.8092 22.2006 21.875 22.0416 21.875 21.8758C21.875 21.7101 21.8092 21.5511 21.6919 21.4339C21.5747 21.3167 21.4158 21.2508 21.25 21.2508Z" fill={color}/>
      <Path d="M24.375 3.75C24.2092 3.75 24.0503 3.81585 23.9331 3.93306C23.8158 4.05027 23.75 4.20924 23.75 4.375C23.75 4.54076 23.8158 4.69973 23.9331 4.81694C24.0503 4.93415 24.2092 5 24.375 5C24.7065 5 25.0245 5.1317 25.2589 5.36612C25.4933 5.60054 25.625 5.91848 25.625 6.25V27.5C25.625 27.8315 25.4933 28.1495 25.2589 28.3839C25.0245 28.6183 24.7065 28.75 24.375 28.75H5.625C5.29348 28.75 4.97554 28.6183 4.74112 28.3839C4.5067 28.1495 4.375 27.8315 4.375 27.5V6.25C4.375 5.91848 4.5067 5.60054 4.74112 5.36612C4.97554 5.1317 5.29348 5 5.625 5C5.79076 5 5.94973 4.93415 6.06694 4.81694C6.18415 4.69973 6.25 4.54076 6.25 4.375C6.25 4.20924 6.18415 4.05027 6.06694 3.93306C5.94973 3.81585 5.79076 3.75 5.625 3.75C4.96196 3.75 4.32607 4.01339 3.85723 4.48223C3.38839 4.95107 3.125 5.58696 3.125 6.25V27.5C3.125 28.163 3.38839 28.7989 3.85723 29.2678C4.32607 29.7366 4.96196 30 5.625 30H24.375C25.038 30 25.6739 29.7366 26.1428 29.2678C26.6116 28.7989 26.875 28.163 26.875 27.5V6.25C26.875 5.58696 26.6116 4.95107 26.1428 4.48223C25.6739 4.01339 25.038 3.75 24.375 3.75Z" fill={color}/>
      <Path d="M10 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V12.5C15 12.1685 14.8683 11.8505 14.6339 11.6161C14.3995 11.3817 14.0815 11.25 13.75 11.25H10C9.66848 11.25 9.35054 11.3817 9.11612 11.6161C8.8817 11.8505 8.75 12.1685 8.75 12.5V13.75C8.75 14.0815 8.8817 14.3995 9.11612 14.6339C9.35054 14.8683 9.66848 15 10 15ZM10 12.5H13.75V13.75H10V12.5Z" fill={color}/>
      <Path d="M16.875 13.75H18.75V15.625C18.75 15.7908 18.8158 15.9497 18.9331 16.0669C19.0503 16.1842 19.2092 16.25 19.375 16.25C19.5408 16.25 19.6997 16.1842 19.8169 16.0669C19.9342 15.9497 20 15.7908 20 15.625V13.125C20 12.9592 19.9342 12.8003 19.8169 12.6831C19.6997 12.5658 19.5408 12.5 19.375 12.5H16.875C16.7092 12.5 16.5503 12.5658 16.4331 12.6831C16.3158 12.8003 16.25 12.9592 16.25 13.125C16.25 13.2908 16.3158 13.4497 16.4331 13.5669C16.5503 13.6842 16.7092 13.75 16.875 13.75Z" fill={color}/>
      <Path d="M9.375 17.5H14.375C14.5408 17.5 14.6997 17.4342 14.8169 17.3169C14.9342 17.1997 15 17.0408 15 16.875C15 16.7092 14.9342 16.5503 14.8169 16.4331C14.6997 16.3158 14.5408 16.25 14.375 16.25H9.375C9.20924 16.25 9.05027 16.3158 8.93306 16.4331C8.81585 16.5503 8.75 16.7092 8.75 16.875C8.75 17.0408 8.81585 17.1997 8.93306 17.3169C9.05027 17.4342 9.20924 17.5 9.375 17.5Z" fill={color}/>
      </G>
      <Defs>
      <ClipPath id="clip0_1219_367">
      <Rect width="30" height="30" fill="white"/>
      </ClipPath>
      </Defs>
      </Svg>
      
    
  );
}