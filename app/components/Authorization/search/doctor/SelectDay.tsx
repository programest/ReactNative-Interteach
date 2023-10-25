import React , { useState, useEffect}from 'react';
import {  TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from '../../../../../constants/Themed';
import { Link,useRouter,router  } from 'expo-router';


interface DoctorSelectDayProps {
    day: string;
    setDay: (day: string) => void;
    data: { schedule: ScheduleItem[] };
  }
  
  interface ScheduleItem {
    day: string;
    day_number: number;
  }
export default function DoctorSelectDay({ day, setDay, data }: DoctorSelectDayProps) {
    const onPressDay = (item: any) => {
        if (day === item.day) {
                             
          setDay('');
        } else {
          // Иначе, установить новый активный день
          setDay(item.day);
        }
      }
  return (
    <View style={{height: 150,  marginBottom: 30}}>
    <Text style={styles.titleSection}>Выберите день:</Text>
      <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} >
          {data.schedule.map((item, index) => (
            
            <TouchableOpacity key={index}   onPress={() => {onPressDay(item)}}>
             <View style={[styles.scheduleBlock, day === item.day && styles.active ]}>

                <Text style={[styles.day, day === item.day && styles.active]}>{item.day}</Text>
                <Text style={[styles.dayNumber,  day === item.day && styles.active]}>{item.day_number}</Text>
              </View>
            </TouchableOpacity>
            
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    titleSection:{
        fontSize: 17,
        fontWeight: '700',
   
        marginBottom: 15
      },
       scheduleBlock: {
        borderRadius: 30,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fb',
        width: 80, 
        height: 100,
        marginRight: 10,
      },
      active: {
        color: '#fff',
        backgroundColor: '#0957df'
      },dayNumber: {
        fontSize: 25,
      },day: {
        fontSize: 20,
        color: '#969696'
      },
});
