import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts } from 'expo-font'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { stylesBase } from './app/components/layout/Layout'
import CustomStatusBar from './app/components/ui/CustomStatusBar'
import Navigation from './app/navigation/Navigation'
import { findClosestCity } from './app/utils/Localization'


export default function App() {
  const [closestCity, setClosestCity] = useState<string>('Dubai');

  useEffect(() => {
    const getStoredCity = async () => {
      try {
        const storedCity = await AsyncStorage.getItem('city');
        if (storedCity) {
          setClosestCity(storedCity);
        } else {
          setClosestCity('Dubai');
          storeData('Dubai');
        }
      } catch (error) {
        console.error('Error getting/storing city:', error);
      }
      
    };

    const requestGeolocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        updateClosestCity();
      }
    };

    const updateClosestCity = async () => {
      const closest = await findClosestCity();
      if (closest) {
        setClosestCity(closest.name);
        storeData(closest.name);
      }
    };

    getStoredCity();
    requestGeolocationPermission();

  }, []);

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('city', value);
    } catch (error) {
      console.error('Error storing city:', error);
    }
  };

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaProvider style={stylesBase.layout}>
      <CustomStatusBar backgroundColor='#000' />
      <Navigation />
    </SafeAreaProvider>
  );
}
