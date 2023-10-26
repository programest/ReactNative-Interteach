import React , {useRef} from 'react';
import { TouchableOpacity, StyleSheet, ScrollView , TouchableWithoutFeedback, Animated, Easing} from 'react-native';
import { Text, View } from '../../../../../constants/Themed';
import Radio from '../../../hooks/Radio';
import {useState} from 'react'
import InputArrow from '../../../../assets/svg/InputArrow'

interface DoctorSelectPolicProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    data: { schedule: ScheduleItem[] };

}

interface ScheduleItem {
  day: string;
  day_number: number;
  hours: string[]; 
}

export default function DoctorSelectPolic({ isOpen, setIsOpen, data }: DoctorSelectPolicProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');

const options: string[] = ['Option 1', 'Option 2', 'Option 3'];
const rotationValue = useRef(new Animated.Value(0)).current;
const handleSelect = (option: string) => {
  setSelectedOption(option);
};
const toggleRotation = () => {
  const toValue = isOpen ? 0 : 1;

  Animated.timing(rotationValue, {
    toValue,
    duration: 300, // Длительность анимации в миллисекундах
    easing: Easing.linear, // Функция интерполяции для анимации
    useNativeDriver: false, // Устанавливаем в false, так как используем CSS-свойство transform
  }).start();

  setIsOpen(!isOpen);
};
  return (
    <View style={{  marginBottom: 30}}>
    <Text style={styles.titleSection}>Выберите полис:</Text>
    <View style={{    width: '95%', minHeight: 40 , paddingLeft: 10, paddingRight: 10, borderRadius: 10, borderWidth: 2  }} >
        <TouchableWithoutFeedback style={{  flex: 1,  height: '100%', backgroundColor: 'red', marginBottom: 10,}} onPress={toggleRotation}>
          <View style={[{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', flex: 1, } , isOpen && {paddingTop: 10}]}>
            <Text style={{}}>№2131232131</Text>
            <Text style={{}}>Адиль</Text>
            <Animated.View
            style={{
              transform: [
                {
                  rotate: rotationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'], // Укажите начальный и конечный угол вращения
                  }),
                },
              ],
            }}
          >
            <InputArrow  />
          </Animated.View>

          </View>
        </TouchableWithoutFeedback>
        {isOpen && (
          <View style={{marginTop: 20,}}>
            <Radio options={options} selectedOption={selectedOption} onSelect={handleSelect} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hoursBlock: {
    borderRadius: 30,
    width: 100,
    borderWidth: 2,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
  },
  
  hours: {
    fontSize: 17,
  },
  titleSection: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 15,
  },
});
