import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { View } from "../../constants/Themed"
import { Stack } from "expo-router"
import { ContentLoaderCustom } from "../../constants/Themed"
const NotificationLoading = (props: any) => (
  <View  style={{justifyContent:'center', alignItems: 'center', zIndex: 1000, height: '100%'}}>
     <Stack.Screen options={{ title: 'Загрузка...' }} />
  <ContentLoaderCustom 
    {...props}
  >
   
   <Rect x="0" y="5" rx="7" ry="7" width="100%" height="220" /> 
    <Rect x="2" y="239" rx="11" ry="11" width="140" height="23" /> 
    <Rect x="9" y="282" rx="2" ry="2" width="85" height="12" /> 
    <Rect x='71%' y="268" rx="7" ry="7" width="97" height="31" /> 
    <Rect x="3" y="346" rx="7" ry="7" width="100%" height="220" /> 
    <Rect x="11" y="580" rx="11" ry="11" width="140" height="23" /> 
    <Rect x="18" y="623" rx="2" ry="2" width="85" height="12" /> 
    <Rect x='71%'  y="609" rx="7" ry="7" width="97" height="31" />
  </ContentLoaderCustom>
  </View>
)

export default NotificationLoading
