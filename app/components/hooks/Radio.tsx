// Radio.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const Radio: React.FC<RadioProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(option)}
          style={[
            styles.option,
            option === selectedOption ? styles.selectedOption : null,
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  option: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#eaeff1',
  },
  optionText: {
    color: 'black',
  },
});

export default Radio;
