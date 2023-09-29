import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import Padding from './Padding'

const Heading:FC = () => {
  return (
    <Padding style={styles.heading}>
      <Text>Heading</Text>
    </Padding>
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#000',
    paddingVertical: 20
  }
})

export default Heading