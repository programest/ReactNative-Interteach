import React, {FC, useEffect, useState } from 'react';
import { Text } from '../Themed';
interface ValidationItem{
   error: string
   valid: string
   value: any
   setError: (value: string) => void;
   mod: string
   setValid: (value: string) => void;
   active: boolean
}

const Validate: FC<ValidationItem> = ({error, valid, value, setError, mod, setValid, active}) => {
    useEffect(() => {
        if (active){
            if( mod === 'iin'){
                if (value.length === 12 ){
                    setValid('valid')
                    setError('')
                    
                }else{
                    setValid('invalid')
                    setError('Заполните поле ИИН')
                   
                }
            }else if (mod === 'password'){
                if (value.length >= 6 ){
                    setValid('valid')
                    setError('')
                    
                }else{
                    setValid('invalid')
                    setError('Заполните поле пароля')
                   
                }
            }
        }
    }, [value, active])
    return(
        <>
        {error && (valid==='invalid' || valid ==='')  && active && ( <Text data-testid={'TestErrorMessage'} style={{ color: '#FF0000', marginTop: 5, fontSize: 14 }}> {error} </Text>)}
    </>
    )
}
export default Validate;