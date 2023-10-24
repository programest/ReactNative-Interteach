import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { View } from "../../constants/Themed"
import { ContentLoaderCustom } from "../../constants/Themed"
import { Stack } from "expo-router"
const PlayerLoader = (props: any) => (
  <View  style={{justifyContent:'center', alignItems: 'center', zIndex: 1000, height: '100%'}}>
     <Stack.Screen options={{ title: 'Загрузка...' }} />
  <ContentLoaderCustom 
    {...props}
  >
   
    <Rect x="0" y="45" rx="7" ry="7" width='100%'  height="220" /> 
    <Rect x="0" y="300" rx="11" ry="11" width="140" height="23" /> 
    <Rect x="0" y="7" rx="11" ry="11" width="140" height="23" /> 
    <Rect x="0" y="340" rx="7" ry="7" width='100%'  height="220" />
  </ContentLoaderCustom>
  </View>
)

export default PlayerLoader
