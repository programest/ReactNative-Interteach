import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from 'expo-router';
import { Link,useRouter,router  } from 'expo-router';
export default function Player() {
  const video = React.useRef(null);
  const router = useRouter();
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
       <Button
        title="Назад"
        onPress={() => {router.replace('/(tabs)');}}
      />
      
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://www.shutterstock.com/shutterstock/videos/1079039945/preview/stock-footage-solar-power-plant-and-windmills-aerial-view-renewable-energy-green-tech.webm' }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: '100%',
      height: '100%',
      flex: 1
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }

})