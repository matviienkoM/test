import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

interface ISearchCustom {
  main?: boolean
  object: string
}

const SearchCustom:FC<ISearchCustom> = ({ main, object }) => {
  return (
    <TextInput style={main ? {...styles.input, ...styles.main} : {...styles.input, ...styles.default }} placeholder={object} left={<TextInput.Icon icon='magnify' size={18} />} underlineColor='transparent' activeUnderlineColor='transparent' underlineColorAndroid='transparent' />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 2,
    borderRadius: 18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    fontSize: 11,
    lineHeight: 15
  },
  main: {
    backgroundColor: '#fff',
    width: 255,
    borderColor: '#13428D',
    borderWidth: 5,
  },
  default: {
    backgroundColor: '#F5F6F8',
    width: '100%',
    marginBottom: 25,
  }
})

export default SearchCustom