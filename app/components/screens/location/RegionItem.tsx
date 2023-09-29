import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { City } from '../../../utils/Localization'

interface IRegionItem {
  data: City;
  isActive: boolean;
  onClick: (cityName: string) => void;
}

const RegionItem:FC<IRegionItem> = ({data, isActive, onClick}) => {
  const handleCityClick = () => {
    onClick(data.name);
  };

  return (
    <TouchableOpacity onPress={handleCityClick} style={styles.layout}>
      <View style={styles.block}>
        <Image 
          source={
            data.region === 'UAE' 
            ? 
            require('../../../../assets/img/uae.png') 
            : 
            require('../../../../assets/img/usa.png')
          } 
          style={styles.image} 
        />
        <Text style={[styles.text, isActive && styles.activeText]}>{data.name + ', ' + data.region}</Text>
      </View>
      <Feather name='check' size={16} color='#1359BA' style={[styles.icon, isActive && styles.iconActive]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  icon: {
    display: 'none',
    marginTop: 7,
    marginRight: 10
  },
  iconActive: {
    display: 'flex'
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  activeText: {
    color: '#1359BA',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30
  },
  text: {
    fontSize: 13,
    lineHeight: 17
  }
})

export default RegionItem