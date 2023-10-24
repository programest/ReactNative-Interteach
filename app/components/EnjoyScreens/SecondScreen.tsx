import { router } from "expo-router";
import { Text, View} from "../../../constants/Themed";
import { StyleSheet, Image, SafeAreaView, FlatList , TouchableOpacity} from "react-native";
import Arrow from "../../assets/svg/Arrow";
import TabBarClinics from "../../assets/svg/TabBarClinics";
import EnjoySecond from '../../assets/svg/EnjoySecond'
import { firstEnjoyBol } from '../../redux/actions'; 
import { useSelector, useDispatch } from 'react-redux';
export default function SecondScreen() {
   
    const dispatch = useDispatch();
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', width: '100%' }}>
          <Text style={styles.enjoyTitle}>В клинике более 30 медицинских услуг </Text>
          <Image source={require('../../assets/images/enjoy2.png')} />
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                <View style={styles.enjoyBlock}>
                    <TabBarClinics width={55} height={55}  color='#08367B'  />
                    <Text style={{marginTop: 5, fontSize: 13}}>Нажмите на вкладку <Text style={styles.boldText}>“Клиники”</Text>  и выберите свой город </Text>
                </View>
                <Arrow width={70} color="#0A93E2" height={35} />
                <View style={styles.enjoyBlock}>
                    <EnjoySecond width={55} height={55} />
                    <Text style={{marginTop: 5, fontSize: 13}}>Выберите удобный адрес, и запишитесь на услугу по номеру телефона</Text>
                </View>
          </View>
          <View style={{ alignItems: 'center', width: '100%'}}>
           
            <TouchableOpacity style={[styles.enjoyBtn, {backgroundColor: '#08367B'}]} onPress={() =>  dispatch(firstEnjoyBol(false))}>
                <Text style={{color: '#fff', fontWeight: '600'}}>На главную</Text>
                <Arrow  color={'#fff'} width={30} height={15}></Arrow>

            </TouchableOpacity>
          
          </View>
        </SafeAreaView>
      );
    
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold', 
    },
    enjoyBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#007BFF',
        width: '40%',
        height: 140,
        marginTop: 30,
        marginBottom: 20,
        padding: 7,
        borderWidth: 2
    },
    enjoyRed: {
      
        fontWeight: '700',
        color: '#FF0000', // Устанавливаем цвет текста в красный
      },
      enjoyBtn: {
        backgroundColor: '#28A745',
        height: 50, 
        
        width: '35%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
      },
      enjoyTitle: {
        fontSize: 30, 
        fontWeight: '600',
         marginBottom: 30
      },
      enjoySubTitle: {
        fontSize: 35, 
        fontWeight: '700',
        marginBottom: 3
      },
      enjoySubTitleIn: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 30
      },
      enjoyItem: {
        fontSize: 17,
        fontWeight: '500',
        flexWrap: 'wrap'
      },
      enjoyListCircle: {
        marginRight: 10,
        backgroundColor: '#00A1E4',
        width: 10,
        height: 10,
        borderRadius: 40
      }
  })