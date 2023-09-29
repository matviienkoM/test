import React, { FC, ReactNode } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

interface ILayout {
  children: ReactNode
  isScrollView?: boolean
}

const Layout:FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={stylesBase.layout}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  )
}

export const stylesBase = StyleSheet.create({
  layout: {
    height: '100%',
    width: '100%',
    fontFamily: 'Roboto',
    backgroundColor: '#fff'
  },
});

export default Layout