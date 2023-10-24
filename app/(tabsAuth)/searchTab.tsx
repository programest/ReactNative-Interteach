import { StyleSheet } from 'react-native';


import { Text, View } from '../../constants/Themed';
import { Main } from '../components/Authorization/search/mainAuth';
export default function SearchTab() {
  return (
    <View style={styles.container}>
        <Main />
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
