import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../../constants/Themed';

interface DoctorSelectHourProps {
  time: string;
  setTime: (time: string) => void;
  data: { schedule: ScheduleItem[] };
  day: string;
}

interface ScheduleItem {
  day: string;
  day_number: number;
  hours: string[]; // Добавьте тип для массива часов
}

export default function DoctorSelectHour({ time, setTime, data, day }: DoctorSelectHourProps) {
  return (
    <View>
      <Text style={styles.titleSection}>Выберите время:</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: 100 }}>
          {data.schedule
            .filter((item) => item.day === day)
            .map((item, index) => {
              const sortedHours = item.hours.sort((a, b) => {
                const timeA = parseInt(a.replace(':', ''));
                const timeB = parseInt(b.replace(':', ''));
                return timeA - timeB;
              });

              return (
                <View key={index} style={{ flexDirection: 'row' }}>
                  {sortedHours.map((hour, hourIndex) => (
                    <TouchableOpacity key={hourIndex} onPress={() => setTime(hour)}>
                      <View style={[styles.hoursBlock, time === hour && styles.activeHour]}>
                        <Text style={[styles.hours, time === hour && styles.activeHour]}>{hour}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            })}
        </ScrollView>
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
    backgroundColor: '#08367B',
    borderColor: '#08367B',
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
