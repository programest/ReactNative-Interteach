import { Text, View} from "../../../constants/Themed";
import { StyleSheet, SafeAreaView, TouchableOpacity  } from "react-native";
import Swiper from 'react-native-swiper'
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import { router } from "expo-router";
export default function Enjoy() {
    return (
        <SafeAreaView style={{flex: 1,  paddingLeft: 10, paddingRight: 10,}}>
            <Swiper style={styles.wrapper} showsButtons={false} dot={<View style={styles.paginationDot} /> }    activeDot={<View style={styles.paginationActiveDot} />}>
                <View style={styles.slide1}>
                    <FirstScreen />
                </View>
                <View style={styles.slide2}>
                    <SecondScreen  />
                </View>
              
            </Swiper>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
       
        paddingBottom: 30
},
    slide1: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',

    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    paginationDot: {
        width: 15, // Ширина точки
        height: 15, // Высота точки
        borderRadius: 7.5, // Задаем круглую форму активной точке
        backgroundColor: '#00A1E4', // Цвет точки
        marginLeft: 5, // Отступ между точками
        marginRight: 5,
      },
      paginationActiveDot: {
        width: 15, // Ширина активной точки
        height: 15, // Высота активной точки
        borderRadius: 7.5, // Задаем круглую форму активной точке
        backgroundColor: '#FF0000', // Цвет активной точки
        marginLeft: 5, // Отступ между точками
        marginRight: 5,
      },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })