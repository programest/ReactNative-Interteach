import React, {FC, useState} from 'react';
import {  TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import { Text, View } from '../../../constants/Themed';
import { Link,useRouter, Stack, useLocalSearchParams, useGlobalSearchParams} from 'expo-router';
import extractNestedParams from '../hooks/useRecurce';
import { Header } from '../header/Header';
 interface ClinicProps{
    data: []
 }
 
 const ClinicItem: FC<ClinicProps> = (props: any) => {
  const params = useLocalSearchParams<any>();
  
  console.log(params)
    const [isExpanded, setIsExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
        Animated.timing(animation, {
          toValue: isExpanded ? 0 : 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      };
      const animatedHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 600], // Высота контента аккордеона при развернутом состоянии
      });

  return (
    <View>
          <View >
          <Stack.Screen options={{ title: 'Назад' }} />

          <TouchableOpacity onPress={toggleAccordion}>
            <Text>{params.title}</Text>
          </TouchableOpacity>
          <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
            <Text>{params.phone}</Text>
            <Image style={{width: '100%', height: 300}} source={{ uri: params['image'] }}/>
            <View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{params.adress}</Text>
                
              </View>
              <View></View>
            </View>
          </Animated.View>  
        </View>
     


  </View>
  );
}
export default ClinicItem;
const styles = StyleSheet.create({
  
});
