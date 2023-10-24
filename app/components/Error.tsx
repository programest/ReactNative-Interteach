import { Link, Stack } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../../constants/Themed';

export default function Error() {
  return (
    <>
    
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Ошибка</Text>
        <Image source={require('../assets/images/error.png')} style={styles.errorImages} />

        <Link href="/" style={styles.errorLink}>
          <Text style={styles.linkText}>Вернуться на главную!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  errorTitle: {
    fontSize: 45,
    marginBottom: 30,
    fontWeight: '700',
    color: '#ED1C24'
  },
  errorImages: {
    marginBottom: 10,
  },
  errorLink: {

    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 5,
    paddingVertical: 15,
  },
  linkText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
