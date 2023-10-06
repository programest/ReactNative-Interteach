import React, {FC, useState} from 'react';
import {  TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Text, View } from '../Themed';

 interface ClinicProps{
    data: []
 }
 const ClinicItem: FC<ClinicProps> = ({ data }) => {
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
        outputRange: [0, 100], // Высота контента аккордеона при развернутом состоянии
      });
  return (
    <View>
    <TouchableOpacity onPress={toggleAccordion}>
      <Text>{isExpanded ? 'Свернуть' : 'Развернуть'}</Text>
    </TouchableOpacity>
    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
      <Text>Содержание аккордеона</Text>
    </Animated.View>
  </View>
  );
}
export default ClinicItem;
const styles = StyleSheet.create({
  
});
