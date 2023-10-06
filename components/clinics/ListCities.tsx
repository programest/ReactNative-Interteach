import React from 'react';
import {  TouchableOpacity, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import ClinicItem from './ClinicItem'
import { Link,useRouter } from 'expo-router';
export function ListCities() {
  const data = {
      'Алматы': [
        {
          'title': 'Международная клиника «Интертич» (пр. Назарбаева 275 Е)',
          'phone': [
            "+7 (727) 3 200 200",
            "+7 701 981 81 54",
            "+7 747 094 46 91"
          ],
          'image': 'https://app.interteach.kz/img/mc1.png',
          'adress': 'пр. Назарбаева 275 Е, уг. ул. Хаджи Мукана',
          'hours': [
            {'Mon_Fri' : '08.00 – 20.00'},
            {'Sat_Sun' : '08.00 – 20.00'},
            {'Sun' : ''}
          ]
        },
        
      ],
      
  }
  const router = useRouter();
  const clinicsWords = (clinics: number) => {
    return clinics === 1 ? "клиника" : clinics >= 2 && clinics <= 4 ? "клиники" : "клиник";
  };
  return (
    <View style={styles.clinicsList}>
    {Object.entries(data).map(([city, clinics]) => (
      
        <View key={city} style={styles.clinicItem} >
          
            <Text style={styles.clinicTitle}>{city}</Text>
            <Text style={styles.clinicNum}>{clinics.length} {clinicsWords(clinics.length)}</Text>
          
        </View>
      
      
    ))}
</View>
  );
}

const styles = StyleSheet.create({
  clinicsList: {
      width: '100%',
     
      marginTop: 40,
      flex: 1,
      flexDirection: 'column',
  },
  cliniclink: {
    width: "100%",

  },
  clinicItem: {
      marginBottom: 13,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'rgb(214, 214, 214)',
      height: 60,

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  clinicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ED1C24',
  },
  clinicNum:{
    fontWeight: '400',
    color: '#007bff',
    fontSize: 14
  }
});
