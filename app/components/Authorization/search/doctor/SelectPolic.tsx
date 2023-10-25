import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView , TouchableWithoutFeedback} from 'react-native';
import { Text, View } from '../../../../../constants/Themed';
import Radio from '../../../hooks/Radio';
import {useState} from 'react'
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

const handleSelect = (option: string) => {
  setSelectedOption(option);
};
  return (
    <View style={{  marginBottom: 30}}>
    <Text style={styles.titleSection}>Выберите полис:</Text>
    <View style={{   borderWidth: 1, borderColor: '#ccc', marginBottom: 10, width: '95%', padding: 10, borderRadius: 10}}>
        <TouchableWithoutFeedback onPress={() =>  setIsOpen(!isOpen)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{}}>№2131232131</Text>
            <Text style={{}}>Адиль</Text>
          </View>
        </TouchableWithoutFeedback>
        {isOpen && (
          <View style={{marginTop: 10,}}>
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
  activeHour: {
    backgroundColor: '#0957df',
    borderColor: '#0957df',
    color: '#fff',
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
