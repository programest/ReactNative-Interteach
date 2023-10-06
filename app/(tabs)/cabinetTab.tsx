import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Cabinet } from '../../components/Cabinet';
export default function CabinetTab() {
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
