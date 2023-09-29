import React, { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface IPadding {
  children: ReactNode;
  style?: any;
}

const Padding:FC<IPadding> = ({ children, style = {} }) => {
  return (
    <View style={{...styles.base, ...style}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
  }
})

export default Padding