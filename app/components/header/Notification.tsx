import React, {FC, useEffect, useState} from 'react';
import {  TouchableOpacity, StyleSheet, ScrollView , Image, FlatList, ActivityIndicator, RefreshControl,SafeAreaView } from 'react-native';

import { Text, View } from '../../../constants/Themed';
import Arrow from '../../assets/svg/Arrow'
import { Link, Stack } from 'expo-router';
import NotificationLoading from '../../loadingScreens/NotificationLoading';
import Error from '../Error';

interface NotificationProps{

}


//  const data = [
//     {
//         'title': 'Суточный мониторинг артериального давления: почему это важно?',
//         'img': 'https://app.interteach.kz/img/mc1.png',
//         'date': '10.02.2023',
//         'link': 'https://music.yandex.kz/home'
//     },
    
//  ]

 const Notification: FC<NotificationProps> = () => {
    const [data, setData] = useState<any>([])
    
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const fetchPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((json) => {
                setData(json); // Помещаем полученные данные в массив
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        }
    useEffect(() => {
        fetchPosts()
    }, [])
    const formatDate = (dateString: number) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0'); // День
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяц (начинается с 0)
        const year = date.getFullYear(); // Год
      
        return `${day}.${month}.${year}`;
      };
      
      const renderImage = (itemImg: any) => {
        if (itemImg !== undefined){
            if (itemImg.startsWith('../../assets/images/')) {
                // Локальное изображение
                return <Image  source={require('../../assets/images/news.png')}  style={styles.notificationImage} />;
              } else if (itemImg.startsWith('https://')) {
                // Удаленное изображение
                return <Image source={{ uri: itemImg}} style={styles.notificationImage} />;
              } 
        }else {
            return <Image source={require('../../assets/images/news.png')} style={styles.notificationImage} />;
          }
        
      };
     
     

      if (error) {
        // Если произошла ошибка, показать другой экран или компонент
        return (
          <Error />
        );
      }
  return (
        <>
        
        {loading === false ? (
            <>
            <Stack.Screen options={{ title: 'Уведомления' }} />
            <View  style={styles.notificationBlocks}>
            <SafeAreaView>
                <FlatList data={data} refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPosts} />} renderItem={({item}) => (
                    
                    <View style={styles.notificationBlock}>
                        <View style={styles.notificationBlockImage}>
                        {renderImage(item.img)}

                        </View>
                        <Text style={styles.notificationTitle}>{item.title}</Text>
                        <View style={styles.notificationDateBlock}>
                            <Text style={styles.notificationDate}>{item.date || formatDate(Date.now())}</Text>
                            <TouchableOpacity style={styles.notificationBtn} onPress={() => {}}>
                                <Text style={styles.notificationBtnText}>Подробнее</Text>  
                                <Arrow  color={'#fff'} width={30} height={15}></Arrow>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}/> 
                </SafeAreaView>
              </View>
              </>
        ): <NotificationLoading /> }
        </>
    )
}
export default Notification;
const styles = StyleSheet.create({
    notificationBlocks: {

        flex: 1,
        
    },
    notificationBlock: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50

    },
    notificationBlockImage: {
        width: '100%',
        height: 200,

    },
    notificationImage: {
        marginBottom: 15,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 25

    },
    notificationDateBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    notificationDate: {
        fontWeight: '500',
        fontSize: 15
    },
    notificationBtn: {
        flexDirection: 'row',
        backgroundColor: '#28A745',
        minWidth: 120,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 5,

        height: 40
    },
    notificationBtnText: {
        marginRight: 10,
        color: '#FFFFFF',
        fontWeight: '500'
    }
    
});
