import { Text, View } from '../../../constants/Themed';
import {useState} from 'react'
import React from 'react';
import { StyleSheet, Image, TextInput, Button,TouchableOpacity, ActivityIndicator} from 'react-native';
import { Link, Tabs, useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';
import Validate from '../hooks/useValidate'
import PasswordView from '../../assets/svg/PasswordView'
import PasswordUnView from '../../assets/svg/PasswordUnView'
import ValidImg from '../../assets/svg/Valid'
import InValidImg from '../../assets/svg/Invalid'
import {useBackend} from '../hooks/useBackend';
import { ScrollView } from 'react-native-gesture-handler';
// Импортируйте SVG изображение
import Loading from '../Loading'

export function Cabinet() {
    const [iinValue, setiinValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false)
    const [viewPassword, setViewPassword] = useState<boolean>(true)

    const [errorIIN, setErrorIIN] =useState<string>('')
    const [validIIN, setValidIIN] =useState<string>('')
    const [errorPassword, setErrorPassword] =useState<string>('')
    const [validPassword, setValidPassword] =useState<string>('')
    const router = useRouter();

    
    const [backendActiveBtn, setBackendAcvtiveBtn] = useState<boolean>(false)
    const {data, loading, error, setData} = useBackend({backendActiveBtn,validPassword, validIIN })
    return (
        <ScrollView style={styles.cabinet}>
            {loading && <Loading loading={loading} /> }
            <Text style={styles.cabinetTtile}>Личный кабинет</Text>
            <View style={styles.cabinet__form}>
                

                <View style={styles.formIin}>
                    <Text style={styles.formLabelText}>ИИН:</Text>
                    <View style={[styles.formBlockInput, validIIN === 'valid' && styles.valid, validIIN === 'invalid' && styles.invalid ]}>
                        <TextInput
                            maxLength={12}
                            inputMode='numeric'
                            keyboardType='number-pad'
                            style={styles.formInput}
                            placeholder="Введите ИИН"
                            onChangeText={(inputValue) => {
                                const filteredInput = inputValue.replace(/[^0-9]/g, '');
                                setiinValue(filteredInput); 
                            }}
                            value={iinValue}
                        />
                        <View style={styles.validationImages}>
                            {validIIN=== 'valid'  && <ValidImg/>}
                            {validIIN=== 'invalid'  && <InValidImg/>}
                        </View>
                    </View>
                    <Validate error={errorIIN} valid={validIIN} value={iinValue} setError={setErrorIIN} mod='iin' setValid={setValidIIN} active={backendActiveBtn} />

                </View>
                <View style={styles.formPassword}>
                    <Text style={styles.formLabelText}>Пароль:</Text>
                    <View style={[styles.formBlockInput, validPassword === 'valid' && styles.valid, validPassword === 'invalid' && styles.invalid ]}>
                        <TextInput
                            secureTextEntry={viewPassword ? true : false}
                            style={[styles.formInput, validPassword === 'valid' && styles.valid , validPassword === 'invalid' && styles.invalid] }
                            placeholder="Введите пароль"
                            onChangeText={(inputValue) => {
                                const filteredInput = inputValue.replace(/\s/g, '');
                                setPasswordValue(filteredInput); 
                            }}                        
                        value={passwordValue}
                        />
                        <View style={styles.validationImagesPass}>
                            {validPassword  === 'valid'  && <ValidImg/>}
                            {validPassword  === 'invalid'  && <InValidImg/>}
                        </View>
                        <TouchableOpacity style={styles.passwordView} onPress={() => setViewPassword(prev => !prev)}>
                            {viewPassword ? <  PasswordUnView/> : <PasswordView/>} 
                        </TouchableOpacity>
                    </View>
                    
                    <Validate error={errorPassword} valid={validPassword} value={passwordValue} setError={setErrorPassword} mod='password' setValid={setValidPassword} active={backendActiveBtn}  />
                </View>
                {/* <View style={styles.errorBlock}>
                    <Text style={styles.errorText}>Неверный логин или пароль</Text>
                </View> */}
                <View style={styles.formCheckboxBlock}>
                    <Checkbox
                        style={styles.formCheckbox}
                        value={remember}
                        onValueChange={setRemember}
                        color={remember ? '#00A1E4' : undefined}
                        />
                    <Text onPress={() => setRemember(prev => !prev)} style={styles.checkboxlabel}>Запомнить меня?</Text>
                </View>
                
                <TouchableOpacity style={styles.formButton} onPress={() => {setBackendAcvtiveBtn( prev => !prev)}}>
                    <Text style={styles.formButtonText}>Войти</Text>
                </TouchableOpacity>

                
                <View style={styles.formReloadBlock}>
                <TouchableOpacity
                    onPress={() => router.push('/components/sign-in/ForgotPassword')}>
                    <Text style={styles.reloadText}>Восстановить пароль</Text>
                </TouchableOpacity>
                    <Text style={styles.reloadTextSpan}>или</Text>
                    <Text onPress={() => {}} style={styles.reloadText}>Получить доступ к личному кабинету </Text>
                </View>
                <Text style={styles.formAdminText}>Ресурс ограниченного доступа (п.8 ст.1 Закона РК от 16.11.2015 № 401-V «О доступе к информации»).</Text>
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        color: '#FF0000',
        fontWeight: '600',
        marginBottom: 10
    },
    errorBlock: {

    },
    checkboxlabel: {
        
    },
    
    formAdminText: {
        textAlign: 'center'
    },
    formReloadBlock: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    formBlockInput: {
        flexDirection: 'row',
        borderWidth: 1,

        borderRadius: 3,
    },
    formCheckboxBlock: {
        marginBottom: 20,
        flexDirection: 'row'
    },
    reloadText: {
        color: '#FF0000',
        fontSize: 16,

    },
    formCheckbox: {
        marginRight: 10,
        alignSelf: 'center',
    },
    formIin: {
        marginBottom: 25,
    },
    formPassword: {
        marginBottom: 20
    },
    cabinet: {
        marginTop:30,
        flex: 1
    },
    cabinetTtile: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 25,
    },
    reloadTextSpan: {
        marginTop: 5,
        marginBottom: 5
    },

    cabinet__form: {
        justifyContent: 'center'
    },
    formLabelText:{
        fontSize: 17,
        marginBottom: 10,
        fontWeight: '500'
    },
    formInput:{
        paddingRight: 70,
        padding: 10,

        
        width: '100%',
        height: 40,
    },
    formButton:{
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
    validationImages: {
        position: 'absolute',
        right: 10,
        top: 9
    },
    validationImagesPass: {
        position: 'absolute',
        right: 40,
        top: 9
    },

    passwordView: {
        position: 'absolute',
        right: 10,
        top: 8,
    },

    valid: {
        borderColor: '#28A745'
    },
    invalid: {
        borderColor: '#FF0D0D'
    },
});
