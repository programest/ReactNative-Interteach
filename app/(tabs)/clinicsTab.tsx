import { StyleSheet } from 'react-native';


import { Text, View } from '../../constants/Themed';
import { ListCities } from '../components/clinics/ListCities';
export default function Clinics() {
  return (
    <View style={styles.container}>
        <ListCities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    
  },
 
});
