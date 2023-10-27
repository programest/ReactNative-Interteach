import React , { useState, useEffect}from 'react';
import {  TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, View} from '../../../../constants/Themed';
import { Link,useRouter,router  } from 'expo-router';


interface NoResultSearchProps {
    result: string;
}
 
export default function NoResultSearch({result}: NoResultSearchProps) {
  return (
    <View style={{ width: '100%', marginTop: 40, justifyContent: 'center', alignItems: 'center',  height: '100%', borderRadius: 10,  backgroundColor: '#E8E8E8'}}>
      <Text style={{ fontSize: 22, fontWeight: '400' }}>
        Ничего не нашлось по запросу:  
      </Text  >
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 30 }}>{result}</Text>
      <Image  style={{width: 250, height: 200, resizeMode: 'contain' }} source={require('../../../assets/images/noSearch.png')} />
      <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 30 , textAlign: 'center'}}>
        Попробуйте поискать по-другому {'\n'} или {'\n'} сократить запрос
      </Text>
  </View>
  );
}

const styles = StyleSheet.create({
   
});
