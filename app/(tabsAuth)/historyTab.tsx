import { StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components/header/Header';

import { Text, View } from '../../constants/Themed';
import { Main } from '../components/home/Main';

export default function HistoryTab() {
  return (
    <ScrollView contentContainerStyle={{justifyContent:'center', alignItems: 'center', flex: 1}}> 
      <View style={styles.container}>

          <Main/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
 
});
