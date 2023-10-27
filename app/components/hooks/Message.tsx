import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';
import SuccessMessage from '../../assets/svg/SuccessMessage'
import ErrorMessage from '../../assets/svg/ErrorMessage'
import AttentionMessage from '../../assets/svg/AttentionMessage'
interface MessageProps {

}

const Message: React.FC<MessageProps> = () => {
  const slideInAnimation = new Animated.Value(0);
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.MESSAGES);

  useEffect(() => {
    if (messages.length > 0) {
      Animated.timing(slideInAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        dispatch({ type: 'REMOVE_MESSAGE' }); // Удаление сообщения через 4 секунды

        Animated.timing(slideInAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {});
      }, 5000);
    }
    console.log(messages)
  }, [dispatch, messages]);

  return (
    <>
    {messages.length !== 0 ? (
        <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateX: slideInAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-200, 0],
              }),
            },
          ],
        },
      ]}
    >
     <TouchableOpacity>
  
    {messages.map((message: any, index: any) => (
        <View style={[styles.messageBlock, message.type ==='error' ? styles.error : message.type === 'nice' ? styles.nice : {}]}  key={index}>
            {message.type ==='error' ? <ErrorMessage /> : message.type === 'nice' ? <SuccessMessage  />: <AttentionMessage />}
            
            <Text style={[styles.messageText]} key={index}>
                {message.text}
            </Text>
            
        </View>
    
    ))}
  
</TouchableOpacity>
        </Animated.View>
    ) : (
        <></>
      )}    
      </>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    zIndex: 100,
    left: 20,
  
    
  },
 
  messageBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgb(50, 50, 50)',
    borderRadius: 5,
  },
  messageText: {
    marginLeft: 10,
    color: 'white',
  },
  error: {
    backgroundColor: '#d32f2f',
    boxShadow: ' 0px 3px 5px -1px rgba(211, 47, 47, 0.1), 0px 6px 10px 0px rgba(211, 47, 47, 0.14), 0px 1px 18px 0px rgba(211, 47, 47, 0.12)'
  },
  nice: {
    backgroundColor: 'rgb(46, 125, 50)',
    boxShadow: '0px 3px 5px -1px rgba(46, 125, 50, 0.1), 0px 6px 10px 0px rgba(46, 125, 50, 0.14), 0px 1px 18px 0px rgba(46, 125, 50, 0.12);'
  },
});
