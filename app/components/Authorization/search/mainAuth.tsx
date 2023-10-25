import React , { useState, useEffect}from 'react';
import {  TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Text, View } from '../../../../constants/Themed';
import { Link,useRouter,router  } from 'expo-router';
import SearchComponent from '../SearchAuth';

export function Main() {
      const router = useRouter();
      const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Lemon', 'Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Lemon'];

  return (
    <>
   
    
    <View style={styles.main}>
      <View style={styles.mainContent}>
   
          <SearchComponent data={data} />
      
        <Text style={styles.mainTitle}>asdдного  уровня</Text>
    
        <Image source={require('../../../assets/images/mainImg.png')} style={styles.mainImg} />
        <View style={styles.mainBtns}>
           

              <TouchableOpacity style={styles.mainPlayer} onPress={() => router.push('/components/Authorization/search/doctor/doctorPageAuth')}>
             
                <Text style={styles.buttonText}>Врач</Text>
                
              </TouchableOpacity>
        
            <TouchableOpacity style={styles.mainAdd} onPress={() => {router.push('/components/home/MainAuth')}}>
                <Text style={styles.buttonText}>Записаться на прием</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-start',
    flex: 1,
    position: 'relative',
    maxWidth: '100%',
 
    alignItems: 'center',
  },
  mainContent: {
    marginTop: 30,
   width: '100%',
   

  },
  mainImg: {
    marginBottom: 40
  },

  mainBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
 
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  mainPlayer: {
    height: 50,
    width:' 40%',
    alignItems: 'center',
    backgroundColor: '#08367B', // Пример цвета фона
    padding: 15,
    borderRadius: 5,
    marginRight: 25,
  },
  mainAdd: {
    alignItems: 'center',
    backgroundColor: '#28A745', // Пример цвета фона
    padding: 15,
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Пример цвета текста
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
