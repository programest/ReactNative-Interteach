import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "../../constants/Themed";
import { Stack } from "expo-router";
import { ContentLoaderCustom } from "../../constants/Themed"
const MyLoader = (props: any) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center', // Center content vertically
      alignItems: 'center',     // Center content horizontally
      zIndex: 1000,
    }}
  >

    <ContentLoaderCustom
     {...props}
    >
      {[...Array(9)].map((_, index) => (
        <React.Fragment key={index}>
        
          <Rect
            x={2}
            y={(10 + 60 + 10) * index}
            rx="4"
            ry="4"
            width="100%"
            height="60"
          />
         
          <Rect
            x={7}
            y={(10 + 60 + 10) * index + 5}
            rx="0"
            ry="0"
            width="97%"
            height="50"
          />
    
          <Rect
            x= '7%'
            y={(10 + 60 + 10) * index + 27}
            rx="0"
            ry="0"
            width="30"
            height="5"
          />
       
          <Rect
            x= '82%'
            y={(10 + 60 + 10) * index + 27}
            rx="0"
            ry="0"
            width="45"
            height="5"
          />
        </React.Fragment>
      ))}
    </ContentLoaderCustom>
  </View>
);

export default MyLoader;
