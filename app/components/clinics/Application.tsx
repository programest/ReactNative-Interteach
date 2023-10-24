import React, {FC, useState} from 'react';
import Checkbox from 'expo-checkbox';
import {  TouchableOpacity, StyleSheet, Animated, ScrollView , SafeAreaView, Linking, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from '../../../constants/Themed';
import { Link,useRouter, Stack, useLocalSearchParams} from 'expo-router';
import {MaskedTextInput} from 'react-native-mask-text';

 interface ApplicationProps{
    data: []
 }
 
 const Application: FC<ApplicationProps> = () => {
    const [userName, setUserName] = useState<string>()
    const [card, setCard] = useState<string>()
    const [dateBirthday, setDateBirthday] = useState<string>()
    const [phone, setPhone] = useState<string>('')
    const [doctor, setDoctor] = useState<string>('Выберите ')
    const [message, setMessage] = useState<string>()
    const [checkbox, setCheckbox] = useState<boolean>()
    console.log(typeof(phone))

    const formatTextChange = (text: string) => {
      setUserName(text.replace(/[0-9]/g, ''));
    };
    
  return (
    <>

        <Stack.Screen
        options={{
          title: 'Назад',
        }}
     />
    
      <ScrollView>
      <View style={{flex: 1, alignItems: 'center', paddingTop: 20, padding: 25}}>
        <Text style={styles.applicationTitle}>Алматы</Text>
        <SafeAreaView style={styles.applicationInputs}>
            <View style={styles.applicationBlockInput}> 
                <TextInput
                    value={userName}
                    onChangeText={formatTextChange}
    
                    placeholder={'ФИО'}
                    style={styles.applicationInput}
                    keyboardType="default"

                />   
            </View>
            <View style={styles.applicationBlockInput}> 
                <MaskedTextInput
                    value={card}
                    onChangeText={(card: string) => setCard(card)}
                    placeholder={'Номер страховой карты'}
                    style={styles.applicationInput}
                />   
            </View>
            <View style={styles.applicationBlockInput}> 
                <MaskedTextInput
                    type="date"
                    options={{
                      dateFormat: 'DD.MM.YYYY',
                    }}
                    mask={"DD.MM.YYYY"} 
                    value={dateBirthday}
                    onChangeText={setDateBirthday}
                    placeholder={'Дата рождения'}
                    style={styles.applicationInput}
                    keyboardType="numeric"
   
           
                />   
            </View>
            <View style={styles.applicationBlockInput}> 
                <MaskedTextInput
                  value={phone}
                    onChangeText={(formatted, extracted) => {
                      if (extracted.length >= 1){
                        setPhone('+7');
                      }
                      setPhone(formatted); // сохраняем форматированный номер
                    }}
                    mask={"+7 (999) 999-99-99"} 
                    placeholder={'Номер телефона'}
                    style={styles.applicationInput}
                    keyboardType="numeric"
                />   
                
            </View>
            <View style={styles.applicationBlockInput}> 
              <Picker
                  style={{borderWidth: 0, fontSize: 15, fontWeight: '500', paddingLeft: 0, marginLeft: -15}}
                  selectedValue={doctor}
                  onValueChange={(itemValue, itemIndex) => setDoctor(itemValue)}
              >
                  <Picker.Item style={{color: '#717171'}}  label="Выберите врача" value="" />
                  <Picker.Item label="Семейный врач" value="Семейный врач" />
                  <Picker.Item label="Педиатр" value="Педиатр" />
                  <Picker.Item label="Эндокринолог" value="Эндокринолог" />
                  <Picker.Item label="Невропатолог" value="Невропатолог" />
                  <Picker.Item label="Кардиолог" value="Кардиолог" />
                  <Picker.Item label="Оториноларинголог" value="Оториноларинголог" />
                  <Picker.Item label="Гастроэнтеролог" value="Гастроэнтеролог" />
                  <Picker.Item label="Хирург" value="Хирург" />
                  <Picker.Item label="Профпатолог" value="Профпатолог" />
                  <Picker.Item label="Уролог" value="Уролог" />
                  <Picker.Item label="Офтальмолог" value="Офтальмолог" />
                  <Picker.Item label="Гинеколог" value="Гинеколог" />
                  <Picker.Item label="Аллерголог" value="Аллерголог" />
                  <Picker.Item label="Психиатр" value="Психиатр" />
                  <Picker.Item label="Ревматолог" value="Ревматолог" />
                  <Picker.Item label="Стоматолог" value="Стоматолог" />
                  <Picker.Item label="Дерматолог" value="Дерматолог" />
                  <Picker.Item label="Врач УЗИ-Маммолог-Онколог" value="Врач УЗИ-Маммолог-Онколог" />
                  <Picker.Item label="Врач УЗИ-ОБП" value="Врач УЗИ-ОБП" />
                  <Picker.Item label="Врач УЗИ-ОМТ" value="Врач УЗИ-ОМТ" />
                  <Picker.Item label="Врач УЗИ-Кардиолог" value="Врач УЗИ-Кардиолог" />
                  <Picker.Item label="Травматолог" value="Травматолог" />
                  <Picker.Item label="Физиотерапевт" value="Физиотерапевт" />
              </Picker>
            </View>
            <View>
                <Text style={styles.applicationTextAreaTitle}>Обращение:</Text>
                <View style={[styles.applicationBlockInput, {minHeight: 80, padding: 10}]}> 
                  <MaskedTextInput
                      style={styles.applicationBlockTextArea}
                      multiline={true}
                      numberOfLines={10}
                      onChangeText={(text: string) => setMessage(text)}
                      value={message}/>
                </View>
            </View> 
            <View style={styles.formCheckboxBlock}>
                <Checkbox
                    style={styles.formCheckbox}
                    value={checkbox}
                    onValueChange={setCheckbox}
                    color={checkbox ? '#00A1E4' : undefined}
                    />
         
                <View style={{flexDirection: 'row'}}>
                    <Text onPress={() => {setCheckbox(prev => !prev)}}  style={[styles.checkboxlabel, {marginRight: -5}]}>Согласен на обработку</Text>
                    <Text   onPress={() => {Linking.openURL('https://app.interteach.kz/agreement.php')}}   style={[styles.checkboxlabel, {marginRight: 0,   color: '#EA0000',}]} >
                      персональных данных
                    </Text>
                  </View>
            </View>



            
            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.formButtonText}>Войти</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
        </View>
        </ScrollView>
   

  </>
    
  );
}
export default Application;
const styles = StyleSheet.create({
  applicationTitle: {
    fontSize: 24,
    color: '#08367B',
    fontWeight: '600',
    marginBottom: 25
  },
  applicationPicker: {
    fontSize: 14,
    
  },
  applicationBlockInput :{
    marginBottom: 20,
    
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 12
  },
  disabled:{
    color: '#414141'
  },
  applicationInputs: {
    width: '100%',
  },
  applicationInput: {
  
    fontSize: 15,
    fontWeight: '500'
  },

  applicationBlockTextArea:{
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top'
  },
  applicationTextAreaTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500'
  },
  formCheckboxBlock: {
    marginBottom: 10,
    marginTop: 40,
    flexDirection: 'row'
  },
  formCheckbox: {

  },
  checkboxlabel: {
    marginLeft: 10
  },
  formButton:{
    marginTop: 15,
    width: '100%',
    backgroundColor: '#28A745',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
   borderRadius: 5
},
formButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
},
});
