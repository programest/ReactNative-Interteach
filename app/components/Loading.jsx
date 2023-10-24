import React from 'react';
import { View, Modal, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ loading }) => {
  return (
    <Modal
    transparent={true}
    animationType="fade"
    visible={loading}
    onRequestClose={() => {}}
  >
    <View style={styles.container}>
      <ActivityIndicator size='large' color="#00A1E4" />
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Затемненный фон
      },
});

export default Loading;
