import React , { useState, useEffect}from 'react';
import {  TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList, ScrollView , TouchableWithoutFeedback} from 'react-native';
import { Text, View } from '../../../../../constants/Themed';
import { Link,useRouter,router, Stack  } from 'expo-router';
import DoctorSelectDay from './SelectDay';
import DoctorSelectHour from './SelectHour';
import DoctorSelectPolic from './SelectPolic';
export default function DoctorPageAuth() {
  const data = {
    name: "Иванов Иван Иванович",
    specialty: "Хирург",
    schedule: [
      {
        day: "пн",
        day_number: 20,
        hours: ["9:40", "10:30", "07:40", "8:30"]
      },
      {
        day: "вт",
        day_number: 21,
        hours: ["07:40", "8:30"]
      },
      {
        day: "ср",
        day_number: 22,
        hours: ["12:40", "13:30"]
      },
      {
        day: "чт",
        day_number: 23,
        hours: ["11:40", "12:00"]
      },
      {
        day: "чт",
        day_number: 23,
        hours: ["11:40", "12:00"]
      }
    ],
    address: "ул. Первая, 123"
  };

  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    
<ScrollView >
    <View style={styles.doctor}>
       <Stack.Screen options={{ title: 'Врач' }} />
        
           
     
            
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.specialty}>{data.specialty}</Text>
            <View style={{flexDirection: 'column', marginLeft: 20}}>
                <DoctorSelectDay data={data} setDay={setDay} day={day} />
              {day ? (
                <DoctorSelectHour time={time} setTime={setTime} data={data}  day={day}/>
              ) : <></>}
                <DoctorSelectPolic isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
              <View>
                <TouchableOpacity style={styles.doctorBtn}>
                    <Text style={styles.doctorBtnText}>Записаться</Text>
                </TouchableOpacity>
            </View>
            

            </View>
            
          

    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
     doctor: {
      minHeight: '100%',
      alignItems: 'center',
      flex: 1,
      paddingBottom: 20
    },
    filterList: {
   
    },
    doctorBtn: {
      backgroundColor: '#0957df',
      width: '95%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      textAlign: 'center',
      borderRadius: 10
    },
    doctorBtnText: {
      color: '#fff',
      fontSize: 16
    },
    active: {
      color: '#fff',
      backgroundColor: '#0957df'
    },
    titleSection:{
      fontSize: 17,
      fontWeight: '700',
 
      marginBottom: 15
    },
    
    name: {
      fontSize: 25, 
      fontWeight: '700',
      marginTop: 20,
      marginBottom: 10
    },
    specialty: {
      marginBottom: 30,
      fontSize: 18, 
      color: '#969696',
      fontWeight: '700',
    },
   
    
   
});
