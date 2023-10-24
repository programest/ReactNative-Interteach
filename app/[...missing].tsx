import { Link, Stack } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../constants/Themed';
import Error from './components/Error';
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Вернуться назад' }} />
      <Error />
    </>
  );
}

const styles = StyleSheet.create({
  
});
