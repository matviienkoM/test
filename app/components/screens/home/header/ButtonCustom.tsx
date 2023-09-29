import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { IItem } from '../../../../utils/types'

interface IHeaderItem {
  item: IItem,
  reverse?: boolean,
  text: string
}

const ButtonCustom:FC<IHeaderItem> = ({ item, reverse, text }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(item.title)} style={reverse ? styles.reverses : styles.block }>
      <Feather name={item.iconName} style={{...styles.base, ...styles.icon}} />
      <Text style={{...styles.base, ...styles.text}}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    color: 'white'
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20
  },
  icon: {
    fontSize: 16
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  reverses: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 5
  }
})

export default ButtonCustom