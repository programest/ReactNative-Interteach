import React, { useState, useEffect } from 'react';
import {  TouchableOpacity, StyleSheet,  FlatList, ActivityIndicator, RefreshControl, SafeAreaView   } from 'react-native';
import { Text, View } from '../../../constants/Themed';
import ClinicItem from './ClinicItem'
import { Link,useRouter } from 'expo-router';
import Error from '../Error';
import { router } from 'expo-router';
import ClinicsLoading from '../../loadingScreens/ClinicsLoading';
import { Stack } from 'expo-router';
export function ListCities() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(true)
  const fetchPosts = () => {
    fetch('https://app.interteach.kz/api/')
        .then((response) => response.json())
        .then((json) => {
            setData(json); // Помещаем полученные данные в массив
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }
  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(data)

if (error) {
  // Если произошла ошибка, показать другой экран или компонент
  return (
    <Error />
  );
}
  const clinicsWords = (clinics: number) => {
    return clinics === 1 ? "клиника" : clinics >= 2 && clinics <= 4 ? "клиники" : "клиник";
  };

  const keyValuePairData = Object.entries(data).map(([city, clinics]) => ({ city, clinics }));

  return (
    <View style={styles.clinicsList}>
    
      {loading === false ? (
    
        <FlatList
          keyExtractor={(item, index) => item.city}
          data={keyValuePairData}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPosts} />}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.clinicItem}>
            
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                  height: '100%',
                  paddingLeft: 10,
                  paddingRight: 15,
                }}
                onPress={() => router.push('/components/clinics/Application', { params: '33333' })}


              >
                <Text style={styles.clinicTitle}>{item.city}</Text>
                <Text style={styles.clinicNum}>
                  {item.clinics.length} {clinicsWords(item.clinics.length)}
                </Text>
                
              </TouchableOpacity>
             
            </View>
          )}
        />
      ) : <ClinicsLoading></ClinicsLoading>}
    </View>
     
  );

}

const styles = StyleSheet.create({
  clinicsList: {
    marginTop: 40,
    flex: 1,
  },
  clinicItem: {
    borderWidth: 2,
    borderColor: 'rgb(214, 214, 214)',
    flexDirection: 'row', // Выравнивание текста горизонтально
    alignItems: 'center', // Выравнивание текста по вертикали
    justifyContent: 'space-between', // Распределение пространства между элементами
    marginBottom: 10,
    height: 60,
    width: '100%',
    borderRadius: 5,
  },
  clinicItemRow:{
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
   
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clinicItemLink: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
   
  
  },
  clinicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ED1C24',
  },
  clinicNum: {
    fontWeight: '400',
    color: '#007bff',
    fontSize: 14,
  },
});

