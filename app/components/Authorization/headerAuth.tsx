import { Text, View } from '../../../constants/Themed';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Notification from '../../assets/svg/Notification'
import Account from '../../assets/svg/Account'
import { Link, Tabs } from 'expo-router';
// Импортируйте SVG изображение


export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerBlock}>
        <View style={styles.headerBlock__img}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImg} />
        </View>
        <View style={styles.headerBlock__info}>
        <Link href="/components/header/Notification" style={styles.headerNotification}>
          <Notification  />
        </Link>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover'
  },

  header: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%'
  },
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerBlock__img: {
    width: 230,
    height: 40,
   

  },
  headerBlock__info: {
    flexDirection: 'row'
  },
  headerNotification: {
    marginRight: 25
  },
  headerAccount: {
    marginRight: 5
  }
});
