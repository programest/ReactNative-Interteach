import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from '../../../constants/Themed';

interface BackendData {
  data: any[]; // Replace any with the expected data type
  loading: boolean;
  error: string;
  setData: (data: any[]) => void;
  backendActiveBtn: boolean;
}
interface InputData {
    backendActiveBtn: boolean
    validIIN: string
    validPassword: string
}

// Export the hook and specify the return value type
export const useBackend = ({ backendActiveBtn, validPassword, validIIN }: InputData): BackendData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any[]>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }
    console.log(validPassword)
    console.log(validIIN)
    console.log(backendActiveBtn)
    if(validPassword === 'valid' && validIIN ==='valid'){
      setLoading(true)
        fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        // .finally(() => setLoading(false));
    }
  
  }, [backendActiveBtn, validPassword, validIIN]);

  return { data, loading, error, setData };
};

