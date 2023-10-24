import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Stack } from 'expo-router';
import PlayerLoader from '../../loadingScreens/PlayerLoading'

const CustomYoutubePlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [loading, setLoading] = useState<boolean>(true);

  const handleOnReady = () => {
    {loading && setLoading(false)}
    
  };

  return (
    <View style={{ flex: 1, height: '100%' }}>
    {loading &&  <PlayerLoader  /> }
      <ScrollView>
     
        <Stack.Screen options={{ title: 'Видео о нас' }} />
       
        <SafeAreaView style={styles.container}>
        
          <View style={{ marginBottom: 30, marginTop: 5 }}>
            <Text style={styles.videoTtile}>Коротко о нас: </Text>
            
              <YoutubePlayer
                webViewStyle={ {opacity:0.99} }
                height={220}
                videoId="GPp_T9JSPmk"
                play={isPlaying}
                volume={volume}
              />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.videoTtile}>Как все начиналось:</Text>
          
              <YoutubePlayer
                webViewStyle={ {opacity:0.99} }
                height={220}
                videoId="GdXpUFt_yD4"
                play={isPlaying}
                volume={volume}
                onReady={handleOnReady}
              />
           
            
          </View>
          
        </SafeAreaView>
       
      </ScrollView>
       
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  videoTtile: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default CustomYoutubePlayer;
