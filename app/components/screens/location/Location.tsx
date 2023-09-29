import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { cities } from '../../../utils/Localization'
import Layout from '../../layout/Layout'
import Padding from '../../ui/Padding'
import SearchCustom from '../../ui/Search'
import RegionItem from './RegionItem'

const Location:FC = () => {
  const sortedCities = cities.sort((a, b) => {
    if (a.region < b.region) return -1;
    if (a.region > b.region) return 1;
    return 0;
  });

  const [activeCity, setActiveCity] = useState<string | null>(null);

  useEffect(() => {
    const checkActiveCity = async () => {
      try {
        const storedCity = await AsyncStorage.getItem('city');
        setActiveCity(storedCity);
      } catch (error) {
        console.error('Error checking active city:', error);
      }
    };

    checkActiveCity();
  }, []);

  const handleCityClick = async (cityName: string) => {
    try {
      await AsyncStorage.setItem('city', cityName);
      setActiveCity(cityName);
    } catch (error) {
      console.error('Error setting active city:', error);
    }
  };

  return (
    <Layout>
      <Padding>
        <SearchCustom object='Search a city' />
        {sortedCities.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && sortedCities[index - 1].region !== item.region ? (
              <View style={styles.line} key={index} />
            ) : null}
            <RegionItem 
              key={item.id} 
              data={item} 
              isActive={item.name === activeCity}
              onClick={handleCityClick}
            />
          </Fragment>
        ))}
      </Padding>
    </Layout>
  )
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 15
  }
})

export default Location