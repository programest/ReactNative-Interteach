import { ScrollView, StyleSheet } from 'react-native';


import { Text, View } from '../../constants/Themed';
import { Cabinet } from '../components/sign-in/Cabinet';
export default function AnalysisTab() {
  return (

      <View style={styles.container}>
          <Cabinet />
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%'
  },
});
