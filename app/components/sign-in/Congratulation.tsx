
import * as React from 'react';
import {useState} from 'react'
import { Text, View,  } from '../../../constants/Themed';
import { Image, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Linking  } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Stack, router } from 'expo-router';
import { Header } from '../header/Header';
export default function Congratulation() {

    return (
        <>
            <Stack.Screen
                options={{
                    header: () => <Header />,
                  }}
            />
           
            <View style={{flex: 1, alignItems: 'center', paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>
                <Text style={styles.congTitle}>Заявка успешно отправлена!</Text>
                <View style={{}}>
                    <Image source={require('../../assets/images/congImg.png')} />
                </View>
                <Text style={styles.congSubText}>Наши менеджеры скоро свяжуться с вами </Text>
                <TouchableOpacity style={styles.congBtn} onPress={() => router.replace('/')}>
                    <Text style={styles.congBtnText}>На главную </Text>
                </TouchableOpacity>
            </View>


        </>
     
    );
  
};
const styles = StyleSheet.create({
    congTitle: {
        color: '#08367B',
        fontWeight: '600',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 30
    },
    congSubText: {
        marginBottom: 40,
        fontSize: 25,
        color: '#FF0D0D',
        fontWeight: '500',
        textAlign: 'center',
    },
    congBtnText: {
        color: "#FFFFFF"
    },
    congBtn: {
        backgroundColor: '#28A745',
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});
