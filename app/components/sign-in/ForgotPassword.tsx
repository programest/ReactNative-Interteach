
import * as React from 'react';
import {useState} from 'react'
import { Text, View,  } from '../../../constants/Themed';
import { Image, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Linking  } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Stack } from 'expo-router';

export default function ForgotPassword() {
  const [iin, setIIN] = useState<string>()
  const [dataRefresh, setDataRefresh] = useState<boolean>()
    return (
        <>
            <Stack.Screen
            options={{
              title: 'Забыли пароль',
            }}
            />

          <View style={{flex: 1, alignItems: 'center', paddingTop: 50, padding: 30}}>
          <Image source={require('../../assets/images/forgotPass.png')} style={styles.forgotImg} />
          <SafeAreaView style={{ width: '100%', marginTop: 30, marginBottom: 30}}>
            <View style={styles.forgotBlockInput}> 
                <TextInput
                    value={iin}
                    onChangeText={(inputValue) => {
                      const filteredInput = inputValue.replace(/[^0-9]/g, '');
                      setIIN(filteredInput); 
                  }}
                  maxLength={12}
                  inputMode='numeric'
                    placeholder={'Введите ИИН'}
                    style={styles.forgotInput}
                    keyboardType="numeric"
                    
                />   
               
            </View>
            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                <Checkbox
                    style={styles.forgotCheckbox}
                    value={dataRefresh}
                    onValueChange={setDataRefresh}
                    color={dataRefresh ? '#00A1E4' : undefined}
                    />
                  <View style={{flexDirection: 'row'}}>
                    <Text onPress={() => {setDataRefresh(prev => !prev)}}   style={[styles.forgotCheckboxlabel, {marginRight: 4}]}>Согласен на обработку</Text>
                    <Text   onPress={() => {Linking.openURL('https://app.interteach.kz/agreement.php')}}   style={[styles.forgotCheckboxlabel, {marginRight: 4,   color: '#EA0000',}]} >
                      персональных данных
                    </Text>
                  </View>
            </View>
            <TouchableOpacity style={styles.forgotBtn}>
                  <Text style={{color: '#fff', fontWeight: '600'}}>Восстановить пароль</Text>
            </TouchableOpacity>
           
          </SafeAreaView>
          </View>




        </>
     
    );
  
};
const styles = StyleSheet.create({
  forgotCheckbox: {
    marginRight: 8
  },
  forgotImg: {

  },
  forgotCheckboxlabel: {
    fontSize: 14,
  
    fontWeight: '600'
  },
  forgotBlockInput: {
    width:  '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  forgotInput: {
    
  },
  forgotBtn: {
    marginTop: 15,
    backgroundColor: '#28A745',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
