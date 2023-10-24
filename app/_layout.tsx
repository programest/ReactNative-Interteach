import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Импорт AsyncStorage
import { Text } from '../constants/Themed';
import React, {useState, useEffect} from 'react';
import Enjoy from './components/EnjoyScreens/Enjoy';
import { Provider } from 'react-redux';
import store from './redux/store';
import { firstEnjoyBol } from './redux/actions'; 

import { useSelector, useDispatch } from 'react-redux';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabsAuth)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
  
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}> 
      <RootLayoutNav />
    </Provider>
    )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  const showWelcomeScreen = useSelector((state: any) => state.firstEnjoy);
  const userAuth = useSelector((state: any) => state.AUTH);
  useEffect(() => {
    // Проверьте в AsyncStorage, был ли показан скрин приветствия
    AsyncStorage.getItem('showWelcomeScreen')
      .then((value) => {
        if (value === null) {
          dispatch(firstEnjoyBol(true));
          // Сохраните флаг, указывающий на показ скрина приветствия
          AsyncStorage.setItem('showWelcomeScreen', 'true');
        } else {
          dispatch(firstEnjoyBol(false));
        }
      })
      .catch((error) => {
        // Обработка ошибок при доступе к AsyncStorage
        console.error('Error accessing AsyncStorage:', error);
      });
  }, []);
  console.log(userAuth)
  return (
      <>
        {showWelcomeScreen ? (
          <Enjoy />
        ) : (
          <ThemeProvider  value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              {userAuth ? <Stack.Screen name="(tabsAuth)" options={{ headerShown: false }} /> : <Stack.Screen name="(tabs)" options={{ headerShown: false }} />}
            </Stack>
          </ThemeProvider>
        )}
      </>
   
  );
}
