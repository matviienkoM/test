import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Logo } from '../../../../../assets/svg/logo'
import i18next from '../../../../../i18n'
import SearchCustom from '../../../ui/Search'
import Header from '../header/Header'

const Main:FC = () => {
  const {width, height} = Dimensions.get('window')
  const {t} = useTranslation()

  return (
    <SafeAreaView>
      <Image source={require('../../../../../assets/img/main.jpg')} style={{...styles.image, width, height: height*0.55}} />
      <Header />
      <View style={{...styles.content, paddingBottom: height*0.38}}>
        <Logo />
        <Text style={styles.text}>{i18next.t('title')}</Text>
        <SearchCustom main object='Search a car' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0
  },
  logoText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    lineHeight: 30
  },
  logoBlue: {
    color: '#3BC4ED'
  },
  logo: {
    width: 111,
    height: 40,
    marginBottom: 10
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 30,
    marginTop: 10
  }
})

export default Main