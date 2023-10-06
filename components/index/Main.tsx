import React from 'react';
import {  TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import { Link,useRouter,router  } from 'expo-router';
export function Main() {
    const router = useRouter();

  return (
    <View style={styles.main}>
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Медицина международного  уровня</Text>
        <Image source={require('../img/mainImg.png')} style={styles.mainImg} />
        <View style={styles.mainBtns}>
            
            <TouchableOpacity style={styles.mainPlayer} onPress={() => {router.replace('/Player');}}>
              <Text style={styles.buttonText}>Видео о нас</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.mainAdd} onPress={() => {/* Действие при нажатии */}}>
                <Text style={styles.buttonText}>Записаться на прием</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
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
