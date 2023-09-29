import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { BackHandler, StyleSheet } from 'react-native'
import Padding from '../../../ui/Padding'
import ButtonCustom from './ButtonCustom'
import { menu } from './menu'

const getData = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem('city');
    return value;
  } catch (error) {
    console.error('Error getting city:', error);
    return null;
  }
};

const Header:FC = () => {
  const [data, setData] = useState<string>('');
  const isFocused = useIsFocused();

  const updateData = async () => {
    try {
      const result = await getData();
      if (result !== null) {
        setData(result);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    updateData();

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      updateData();
      return true;
    });

    return () => {
      backHandler.remove();
    };
  }, [updateData]);

  useEffect(() => {
    if (isFocused) {
      updateData();
    }
  }, [isFocused]);

  return (
    <Padding style={style.header}>
      {menu.map(item => (
        <ButtonCustom 
          key={item.title} 
          item={item} 
          reverse={item.reverse} 
          text={item.reverse ? item.title : data}
        />
      ))}
    </Padding>
  )
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    marginBottom: 40,
    paddingHorizontal: 20
  }
})

export default Header